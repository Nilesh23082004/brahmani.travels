const fs = require('fs');

async function search() {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=Force+Traveller&gsrnamespace=6&gsrlimit=50&prop=imageinfo&iiprop=url|size|extmetadata';
  const res = await fetch(url, { headers: { 'User-Agent': 'BrahmaniTravelsBot/1.0' } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  pages.forEach(p => {
    if (p.imageinfo && p.imageinfo[0].width >= 1600) {
      console.log(p.title, p.imageinfo[0].width + 'x' + p.imageinfo[0].height, p.imageinfo[0].url);
    }
  });
}
search();
