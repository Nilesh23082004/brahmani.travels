const sharp = require('sharp');
const fs = require('fs');

const svgOverlay = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#06123A"/>
      <stop offset="60%" stop-color="#0A1F5C"/>
      <stop offset="100%" stop-color="#132C7A"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0%" stop-color="#E8C468"/>
      <stop offset="50%" stop-color="#C9962E"/>
      <stop offset="100%" stop-color="#A97812"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle Gold Border Frame -->
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="none" stroke="url(#gold)" stroke-width="3" stroke-opacity="0.4"/>
  <rect x="42" y="42" width="1116" height="546" rx="18" fill="none" stroke="url(#gold)" stroke-width="1" stroke-opacity="0.2"/>

  <!-- Pill Badge -->
  <rect x="100" y="100" width="380" height="44" rx="22" fill="#C9962E" fill-opacity="0.15" stroke="url(#gold)" stroke-width="1.5"/>
  <text x="130" y="128" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#E8C468" letter-spacing="2">
    PREMIUM CABS &amp; CAR RENTAL
  </text>

  <!-- Main Headline -->
  <text x="100" y="210" font-family="Georgia, serif" font-size="56" font-weight="bold" fill="#FFFFFF">
    Brahmani Travels
  </text>
  <text x="100" y="275" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="url(#gold)">
    Best Cab, Taxi &amp; Car Rental in Ahmedabad
  </text>

  <!-- Tagline / Features -->
  <text x="100" y="345" font-family="Arial, sans-serif" font-size="22" fill="#CBD5E1">
    Swift Dzire · Ertiga · Innova Crysta · Tempo Traveller (11-20 Seater) · Buses
  </text>
  <text x="100" y="385" font-family="Arial, sans-serif" font-size="22" fill="#CBD5E1">
    Doorstep Pickup in Ahmedabad &amp; Gandhinagar · Outstation Tours Across India
  </text>

  <!-- Feature Tags Bottom Row -->
  <rect x="100" y="460" width="210" height="60" rx="16" fill="#FFFFFF" fill-opacity="0.08" stroke="#CBD5E1" stroke-opacity="0.2"/>
  <text x="135" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">
    From ₹11 / Km
  </text>

  <rect x="330" y="460" width="230" height="60" rx="16" fill="#FFFFFF" fill-opacity="0.08" stroke="#CBD5E1" stroke-opacity="0.2"/>
  <text x="360" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">
    24/7 Availability
  </text>

  <rect x="580" y="460" width="240" height="60" rx="16" fill="#FFFFFF" fill-opacity="0.08" stroke="#CBD5E1" stroke-opacity="0.2"/>
  <text x="610" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">
    Sanitized Daily
  </text>

  <rect x="840" y="460" width="260" height="60" rx="16" fill="#C9962E" fill-opacity="0.25" stroke="url(#gold)" stroke-width="2"/>
  <text x="865" y="498" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#E8C468">
    📞 +91 89801 41287
  </text>
</svg>
`);

sharp(svgOverlay)
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('Successfully generated public/og-image.png (1200x630)!'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

