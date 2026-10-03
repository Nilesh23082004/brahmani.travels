async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|size|extmetadata&gsrlimit=10`;
  const r = await fetch(url, { headers: { "User-Agent": "BrahmaniTravelsBot/1.0" } });
  const data = await r.json();
  const pages = data?.query?.pages || {};
  console.log(`\n=== Query: "${q}" ===`);
  for (const id of Object.keys(pages)) {
    const p = pages[id];
    const info = p.imageinfo?.[0];
    if (info) {
      const meta = info.extmetadata || {};
      console.log(`[${p.title}]`);
      console.log(`  URL: ${info.url}`);
      console.log(`  Dimensions: ${info.width}x${info.height}`);
      console.log(`  License: ${meta.LicenseShortName?.value || "Unknown"}`);
      console.log(`  Artist: ${meta.Artist?.value || "Unknown"}`);
    }
  }
}

async function run() {
  await search("Suzuki Dzire");
  await search("Maruti Dzire");
  await search("Suzuki Ertiga");
  await search("Force Motors Traveller");
  await search("Tempo Traveller");
}

run();
