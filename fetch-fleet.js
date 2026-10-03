import fs from "fs";
import path from "path";

const originalsDir = path.join(process.cwd(), "public", "images", "fleet", "originals");
if (!fs.existsSync(originalsDir)) {
  fs.mkdirSync(originalsDir, { recursive: true });
}

// Candidates for each car slug
const candidates = [
  {
    slug: "swift-dzire",
    title: "File:Suzuki Dzire II 1.2 GLX Hybrid Arctic White Pearl.jpg",
    desc: "Maruti Suzuki Swift Dzire (White sedan)",
  },
  {
    slug: "maruti-suzuki-ertiga",
    title: "File:Maruti Suzuki Ertiga(1).jpg",
    desc: "Maruti Suzuki Ertiga (current generation MUV)",
  },
  {
    slug: "toyota-innova",
    title: "File:Toyota Innova KUN40 FL1 2.5 G White Pearl.jpg",
    desc: "Toyota Innova (older-gen white, 2005-2015 shape)",
  },
  {
    slug: "chevrolet-tavera",
    title: "File:Chevrolet Tavera (depan), Denpasar.jpg",
    desc: "Chevrolet Tavera (SUV/MUV)",
  },
  {
    slug: "toyota-innova-crysta",
    title: "File:Toyota Innova Crysta 2.4 Z front right.jpg",
    desc: "Toyota Innova Crysta (front right 3/4 angle)",
  },
  {
    slug: "tempo-traveller-11",
    title: "File:Force Traveller, Leh-Manali Highway.jpg",
    desc: "Force Traveller (White Tempo Traveller 11-17)",
  },
  {
    slug: "tempo-traveller-20",
    title: "File:Force Motors - Traveller 26 - Agra 2014-05-14 4222.JPG",
    desc: "Force Motors Traveller 26 (Longer-bodied 20 seater)",
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getDetails(title) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|extmetadata`;
  const res = await fetch(url, { headers: { "User-Agent": "BrahmaniTravelsWebsiteBot/1.0 (contact@brahmanitravels.com)" } });
  const data = await res.json();
  const pages = data.query?.pages || {};
  const first = Object.values(pages)[0];
  const info = first?.imageinfo?.[0];
  if (!info) return null;
  const meta = info.extmetadata || {};
  return {
    url: info.url,
    width: info.width,
    height: info.height,
    size: info.size,
    license: meta.LicenseShortName?.value || meta.License?.value || "Creative Commons",
    artist: meta.Artist?.value?.replace(/<[^>]+>/g, "").trim() || "Wikimedia Contributor",
    creditUrl: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`,
  };
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": "BrahmaniTravelsWebsiteBot/1.0 (contact@brahmanitravels.com)" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  return buffer.length;
}

async function main() {
  const results = [];
  for (const c of candidates) {
    const ext = ".jpg";
    const dest = path.join(originalsDir, `${c.slug}${ext}`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 100000) {
      console.log(`Already downloaded: ${c.slug}, skipping download...`);
      const details = await getDetails(c.title);
      results.push({ ...c, ...details, downloadedFile: dest });
      await sleep(1500);
      continue;
    }

    console.log(`Checking ${c.slug}: ${c.title}...`);
    const details = await getDetails(c.title);
    if (!details) {
      console.error(`Not found: ${c.title}`);
      continue;
    }
    console.log(`  Dimensions: ${details.width}x${details.height}, URL: ${details.url}`);
    console.log(`  Downloading to ${dest}...`);
    await sleep(2000);
    const bytes = await download(details.url, dest);
    console.log(`  Downloaded ${bytes} bytes`);
    results.push({
      ...c,
      ...details,
      downloadedFile: dest,
    });
    await sleep(2500);
  }
  fs.writeFileSync("fleet-download-meta.json", JSON.stringify(results, null, 2));
  console.log("\nDone downloading initial candidates!");
}

main().catch(console.error);
