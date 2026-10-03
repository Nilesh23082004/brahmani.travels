async function printQuery(q) {
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
      console.log(`[${p.title}] - ${info.width}x${info.height}`);
      console.log(`  ${info.url}`);
    }
  }
}

async function run() {
  await printQuery("Suzuki Dzire");
  await printQuery("Suzuki Ertiga");
}

run();
