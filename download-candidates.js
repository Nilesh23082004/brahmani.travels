const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function downloadFile(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": "BrahmaniTravelsWebsiteBot/1.0 (contact@brahmanitravels.com)" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const fs = await import("fs");
  fs.writeFileSync(dest, buf);
  console.log(`Saved ${dest} (${buf.length} bytes)`);
}

async function run() {
  console.log("Downloading Suzuki Ertiga 1.5 GLX 2021.jpg...");
  await downloadFile(
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Suzuki_Ertiga_1.5_GLX_2021.jpg",
    "public/images/fleet/originals/ertiga-red-candidate.jpg"
  );
  await sleep(2500);

  console.log("Downloading MIAS 2025 All-new Suzuki Dzire Hybrid 01.jpg...");
  await downloadFile(
    "https://upload.wikimedia.org/wikipedia/commons/1/15/MIAS_2025_-_All-new_Suzuki_Dzire_Hybrid_01.jpg",
    "public/images/fleet/originals/dzire-white-candidate.jpg"
  );
  await sleep(2500);

  console.log("Downloading Force Traveller Luxury.jpg...");
  await downloadFile(
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Force_Traveller_Luxury.jpg",
    "public/images/fleet/originals/traveller-luxury-candidate.jpg"
  );
}

run();
