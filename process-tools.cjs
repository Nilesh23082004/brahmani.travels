const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Helper to fit an image onto a 1600x1000 transparent canvas with ~8% padding
async function fitOnCanvas(inputBuffer, targetWidth = 1460, targetHeight = 860) {
  // Trim empty transparent border first
  const trimmed = await sharp(inputBuffer).trim().toBuffer({ resolveWithObject: true });
  
  // Resize to fit inside target box
  const resized = await sharp(trimmed.data)
    .resize(targetWidth, targetHeight, { fit: 'inside' })
    .toBuffer({ resolveWithObject: true });
  
  const leftPad = Math.round((1600 - resized.info.width) / 2);
  const topPad = Math.round((1000 - resized.info.height) / 2);

  const canvas = await sharp({
    create: {
      width: 1600,
      height: 1000,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{
    input: resized.data,
    left: leftPad,
    top: topPad
  }])
  .png()
  .toBuffer();

  const webp = await sharp(canvas).webp({ quality: 90 }).toBuffer();
  return { png: canvas, webp };
}

// 1. Toyota Innova Crysta
async function buildCrysta() {
  console.log('Processing Toyota Innova Crysta...');
  const input = sharp('public/images/fleet/test_crysta_nobg.png');
  
  // Red plate is at x: 2180..2440, y: 1160..1265 in original 2623x1711
  // Create dark plate overlay
  const plateSvg = Buffer.from(`
    <svg width="280" height="95" viewBox="0 0 280 95" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="280" height="95" rx="10" fill="#181a20" stroke="#333842" stroke-width="3"/>
      <text x="140" y="58" font-family="sans-serif" font-weight="bold" font-size="34" fill="#a0aab8" text-anchor="middle" letter-spacing="4">INNOVA</text>
    </svg>
  `);

  const composited = await input
    .composite([{
      input: plateSvg,
      top: 1168,
      left: 2176
    }])
    .toBuffer();

  const { png, webp } = await fitOnCanvas(composited);
  fs.writeFileSync('public/images/fleet/originals/toyota-innova-crysta.png', png);
  fs.writeFileSync('public/images/fleet/toyota-innova-crysta.webp', webp);
  console.log('Saved toyota-innova-crysta.webp (' + webp.length + ' bytes)');
}

buildCrysta().catch(console.error);
