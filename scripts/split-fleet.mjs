import fs from "fs";
import path from "path";
import sharp from "sharp";

const SOURCE_PNG = "C:/Users/Nilesh/Downloads/a_clean_grid_style_composite_image_collage_of_ve.png";
const FALLBACK_SOURCE = "C:/Users/Nilesh/.gemini/antigravity-ide/brain/ce7a7440-322f-44c5-94da-ff6b24b99e02/.user_uploaded/media_1791047270045.jpg";
const OUTPUT_DIR = path.resolve("./public/images/fleet");

async function main() {
  let sourcePath = SOURCE_PNG;
  if (!fs.existsSync(sourcePath)) {
    sourcePath = FALLBACK_SOURCE;
    console.log("Master PNG not found, using fallback:", sourcePath);
  } else {
    console.log("Using master high-res PNG:", sourcePath);
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Backup master into fleet/originals
  const originalsDir = path.join(OUTPUT_DIR, "originals");
  if (!fs.existsSync(originalsDir)) {
    fs.mkdirSync(originalsDir, { recursive: true });
  }
  fs.copyFileSync(sourcePath, path.join(originalsDir, "collage-master.png"));

  const metadata = await sharp(sourcePath).metadata();
  console.log(`Source dimensions: ${metadata.width}x${metadata.height}`);

  const isMasterRes = metadata.width >= 1600;

  // Approximate cell boundaries (x ranges / y ranges):
  // columns: 0-554, 560-1113, 1120-1672
  // rows:    0-310, 318-619, 627-941
  // We trim ~6px from every edge to remove the gap lines
  const cells1672 = [
    // Row 1
    { name: "swift-dzire", left: 6, top: 6, width: 542, height: 300 },
    { name: "maruti-suzuki-ertiga", left: 566, top: 6, width: 541, height: 300 },
    { name: "toyota-innova", left: 1126, top: 6, width: 540, height: 300 },

    // Row 2
    { name: "chevrolet-tavera", left: 6, top: 324, width: 542, height: 289 },
    { name: "toyota-innova-crysta", left: 566, top: 324, width: 541, height: 289 },
    { name: "tempo-traveller-11", left: 1126, top: 324, width: 540, height: 289 },

    // Row 3
    { name: "tempo-traveller-14", left: 6, top: 633, width: 542, height: 302 },
    { name: "tempo-traveller-17", left: 566, top: 633, width: 541, height: 302 },
    { name: "tempo-traveller-20", left: 1126, top: 633, width: 540, height: 302 },
  ];

  // Scale if not master res
  const scaleX = metadata.width / 1672;
  const scaleY = metadata.height / 941;

  for (const cell of cells1672) {
    const left = Math.round(cell.left * scaleX);
    const top = Math.round(cell.top * scaleY);
    const width = Math.min(Math.round(cell.width * scaleX), metadata.width - left);
    const height = Math.min(Math.round(cell.height * scaleY), metadata.height - top);

    const outPath = path.join(OUTPUT_DIR, `${cell.name}.webp`);

    await sharp(sourcePath)
      .extract({ left, top, width, height })
      .resize(1600, 900, {
        kernel: sharp.kernel.lanczos3,
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 88, effort: 6 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Exported ${cell.name}.webp (1600x900) - ${(stat.size / 1024).toFixed(1)} KB`);
  }

  console.log("All 9 vehicle images successfully split and exported!");
}

main().catch(console.error);
