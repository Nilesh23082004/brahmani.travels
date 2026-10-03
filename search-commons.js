const queries = [
  "Maruti Suzuki Dzire white",
  "Maruti Suzuki Ertiga red",
  "Toyota Innova white",
  "Chevrolet Tavera",
  "Toyota Innova Crysta",
  "Force Traveller white",
];

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&prop=imageinfo&iiprop=url|size|extmetadata&gsrlimit=5`;
  const res = await fetch(url, { headers: { "User-Agent": "BrahmaniTravelsBot/1.0" } });
  const data = await res.json();
  const pages = data?.query?.pages || {};
  console.log(`\n=== Results for: "${query}" ===`);
  for (const id of Object.keys(pages)) {
    const p = pages[id];
    const info = p.imageinfo?.[0];
    if (info) {
      const meta = info.extmetadata || {};
      console.log(`Title: ${p.title}`);
      console.log(`  URL: ${info.url}`);
      console.log(`  Width: ${info.width}x${info.height}`);
      console.log(`  License: ${meta.LicenseShortName?.value || "Unknown"}`);
      console.log(`  Artist: ${meta.Artist?.value || "Unknown"}`);
    }
  }
}

async function run() {
  for (const q of queries) {
    await searchCommons(q);
  }
}

run().catch(console.error);
