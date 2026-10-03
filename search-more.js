async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|size|extmetadata&gsrlimit=8`;
  const r = await fetch(url, { headers: { "User-Agent": "BrahmaniTravelsWebsiteBot/1.0 (contact@brahmanitravels.com)" } });
  const data = await r.json();
  const pages = data?.query?.pages || {};
  console.log(`\n=== Query: "${q}" ===`);
  for (const id of Object.keys(pages)) {
    const p = pages[id];
    const info = p.imageinfo?.[0];
    if (info) {
      const meta = info.extmetadata || {};
      console.log(`[${p.title}] (${info.width}x${info.height})`);
      console.log(`  ${info.url}`);
    }
  }
}

async function run() {
  await search("Ertiga red");
  await search("Suzuki Ertiga red");
  await search("Tavera India");
  await search("Force Traveller");
}

run();
