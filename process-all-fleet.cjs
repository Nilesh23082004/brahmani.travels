const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FLEET_DIR = path.join(__dirname, 'public', 'images', 'fleet');
const ORIGINALS_DIR = path.join(FLEET_DIR, 'originals');

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
  console.log('1. Processing Toyota Innova Crysta...');
  const input = sharp(path.join(FLEET_DIR, 'test_crysta_nobg.png'));
  
  // Fully cover red plate at x: 2130..2510, y: 1145..1315
  const plateSvg = Buffer.from(`
    <svg width="380" height="170" viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="380" height="170" rx="10" fill="#15171c" stroke="#2e333d" stroke-width="3"/>
      <text x="190" y="96" font-family="Arial, sans-serif" font-weight="bold" font-size="38" fill="#abb4c2" text-anchor="middle" letter-spacing="4">INNOVA</text>
    </svg>
  `);

  const composited = await input
    .composite([{
      input: plateSvg,
      top: 1145,
      left: 2130
    }])
    .toBuffer();

  const { png, webp } = await fitOnCanvas(composited);
  fs.writeFileSync(path.join(ORIGINALS_DIR, 'toyota-innova-crysta.png'), png);
  fs.writeFileSync(path.join(FLEET_DIR, 'toyota-innova-crysta.webp'), webp);
  console.log('   Saved toyota-innova-crysta.webp (' + webp.length + ' bytes)');
}

// 2. Maruti Suzuki Ertiga
async function buildErtiga() {
  console.log('2. Processing Maruti Suzuki Ertiga...');
  const { data, info } = await sharp(path.join(FLEET_DIR, 'test_ertiga_red_nobg.png')).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Trim off roof numbers 1 3 9 and base stand along smooth roof curve
  for (let x = 2380; x <= 3120; x++) {
    const t = (x - 2380) / (3120 - 2380);
    const curveY = 566 - (566 - 558) * t - 14 * Math.sin(Math.PI * t);
    for (let y = 0; y < curveY; y++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  // Clear any stray pixels above y=535
  for (let y = 0; y < 535; y++) {
    for (let x = 0; x < width; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  const cleaned = await sharp(data, { raw: info }).png().toBuffer();
  const { png, webp } = await fitOnCanvas(cleaned);
  fs.writeFileSync(path.join(ORIGINALS_DIR, 'maruti-suzuki-ertiga.png'), png);
  fs.writeFileSync(path.join(FLEET_DIR, 'maruti-suzuki-ertiga.webp'), webp);
  console.log('   Saved maruti-suzuki-ertiga.webp (' + webp.length + ' bytes)');
}

// 3. Toyota Innova (Older Gen)
async function buildInnova() {
  console.log('3. Processing Toyota Innova (older gen)...');
  const { data, info } = await sharp(path.join(FLEET_DIR, 'test_innova_fl2_nobg.png')).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Clean left sign artifact outside the rear body contour:
  for (let y = 0; y < 1500; y++) {
    for (let x = 0; x < 210; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  const baseCleaned = await sharp(data, { raw: info }).png().toBuffer();

  // License plate: larger overlay to fully cover the Philippine plate
  const plateSvg = Buffer.from(`
    <svg width="730" height="380" viewBox="0 0 730 380" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="730" height="380" rx="18" fill="#14171d" stroke="#333842" stroke-width="4"/>
      <text x="365" y="215" font-family="Arial, sans-serif" font-weight="bold" font-size="94" fill="#abb4c2" text-anchor="middle" letter-spacing="8">INNOVA</text>
    </svg>
  `);

  const composited = await sharp(baseCleaned)
    .composite([{
      input: plateSvg,
      top: 1915,
      left: 3340
    }])
    .toBuffer();

  const { png, webp } = await fitOnCanvas(composited);
  fs.writeFileSync(path.join(ORIGINALS_DIR, 'toyota-innova.png'), png);
  fs.writeFileSync(path.join(FLEET_DIR, 'toyota-innova.webp'), webp);
  console.log('   Saved toyota-innova.webp (' + webp.length + ' bytes)');
}

// 4. Chevrolet Tavera
async function buildTavera() {
  console.log('4. Processing Chevrolet Tavera...');
  const { data, info } = await sharp(path.join(FLEET_DIR, 'test_tavera_nobg.png')).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Clean right edge artifact x > 2750 and floor haze
  for (let y = 0; y < height; y++) {
    for (let x = 2750; x < width; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  // Remove low-opacity background haze around edges
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (data[idx + 3] < 110) {
        data[idx + 3] = 0;
      }
    }
  }

  const baseCleaned = await sharp(data, { raw: info }).png().toBuffer();

  // License plate in bull bar at x: 405..755, y: 1110..1275
  const plateSvg = Buffer.from(`
    <svg width="350" height="165" viewBox="0 0 350 165" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="350" height="165" rx="8" fill="#111317" stroke="#2c3038" stroke-width="3"/>
      <text x="175" y="96" font-family="Arial, sans-serif" font-weight="bold" font-size="40" fill="#9da6b3" text-anchor="middle" letter-spacing="5">TAVERA</text>
    </svg>
  `);

  const composited = await sharp(baseCleaned)
    .composite([{
      input: plateSvg,
      top: 1110,
      left: 405
    }])
    .toBuffer();

  const { png, webp } = await fitOnCanvas(composited);
  fs.writeFileSync(path.join(ORIGINALS_DIR, 'chevrolet-tavera.png'), png);
  fs.writeFileSync(path.join(FLEET_DIR, 'chevrolet-tavera.webp'), webp);
  console.log('   Saved chevrolet-tavera.webp (' + webp.length + ' bytes)');
}

// 5. Maruti Suzuki Swift Dzire
async function buildDzire() {
  console.log('5. Processing Maruti Suzuki Swift Dzire...');
  const { data, info } = await sharp(path.join(FLEET_DIR, 'test_dzire_2026_nobg.png')).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Level roof bump at y < 92, x in 1200..1520
  for (let y = 0; y < 92; y++) {
    for (let x = 1200; x < 1520; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  const baseCleaned = await sharp(data, { raw: info }).png().toBuffer();

  // The actual license plate is at y: 835..990, x: 310..445
  const plateSvg = Buffer.from(`
    <svg width="170" height="185" viewBox="0 0 170 185" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="170" height="185" rx="6" fill="#13151a" stroke="#2d323d" stroke-width="2"/>
      <text x="85" y="105" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="#9da6b3" text-anchor="middle" letter-spacing="3">DZIRE</text>
    </svg>
  `);

  const composited = await sharp(baseCleaned)
    .composite([{
      input: plateSvg,
      top: 830,
      left: 300
    }])
    .toBuffer();

  const { png, webp } = await fitOnCanvas(composited);
  fs.writeFileSync(path.join(ORIGINALS_DIR, 'swift-dzire.png'), png);
  fs.writeFileSync(path.join(FLEET_DIR, 'swift-dzire.webp'), webp);
  console.log('   Saved swift-dzire.webp (' + webp.length + ' bytes)');
}

// 6, 7, 8. Tempo Traveller 11, 14, 17
async function buildTravellers() {
  console.log('6, 7, 8. Processing Tempo Traveller (11, 14, 17)...');
  const { data, info } = await sharp(path.join(FLEET_DIR, 'test_traveller11_nobg.png')).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Clean faint cloud artifacts above roof: y < 650, x < 2300
  for (let y = 0; y < 650; y++) {
    for (let x = 0; x < 2300; x++) {
      data[(y * width + x) * channels + 3] = 0;
    }
  }

  // Cover contract text on lower side: x: 1650..2150, y: 2280..2370 by sampling from y = 2180 (body paint color above the blue stripe)
  for (let y = 2280; y < 2370; y++) {
    for (let x = 1650; x < 2150; x++) {
      const idx = (y * width + x) * channels;
      if (data[idx + 3] > 100) {
        // Sample color from y = 2180
        const sampleIdx = (2180 * width + x) * channels;
        data[idx] = data[sampleIdx];
        data[idx + 1] = data[sampleIdx + 1];
        data[idx + 2] = data[sampleIdx + 2];
      }
    }
  }

  // Remove low alpha background haze
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (data[idx + 3] < 120) {
        data[idx + 3] = 0;
      }
    }
  }

  const baseCleaned = await sharp(data, { raw: info }).png().toBuffer();

  // Front yellow plate at x: 130..320, y: 2125..2275
  const plateSvg = Buffer.from(`
    <svg width="205" height="145" viewBox="0 0 205 145" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="205" height="145" rx="6" fill="#1b1e24" stroke="#373d47" stroke-width="2"/>
      <text x="102" y="82" font-family="Arial, sans-serif" font-weight="bold" font-size="25" fill="#a4adb9" text-anchor="middle" letter-spacing="3">TRAVELLER</text>
    </svg>
  `);

  const composited = await sharp(baseCleaned)
    .composite([{
      input: plateSvg,
      top: 2125,
      left: 125
    }])
    .toBuffer();

  const { png, webp } = await fitOnCanvas(composited);

  // Save for 11, 14, 17
  const slugs = ['tempo-traveller-11', 'tempo-traveller-14', 'tempo-traveller-17'];
  for (const slug of slugs) {
    fs.writeFileSync(path.join(ORIGINALS_DIR, `${slug}.png`), png);
    fs.writeFileSync(path.join(FLEET_DIR, `${slug}.webp`), webp);
    console.log(`   Saved ${slug}.webp (${webp.length} bytes)`);
  }
}

async function main() {
  await buildCrysta();
  await buildErtiga();
  await buildInnova();
  await buildTavera();
  await buildDzire();
  await buildTravellers();
  console.log('\nAll fleet images rebuilt successfully!');
}

main().catch(console.error);
