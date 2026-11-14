const rawRoutes = [
  {
    name: "Udaipur",
    distance: "250 km",
    duration: "4.5 to 5 hours",
    highway: "NH-48 via Himatnagar, Shamlaji and Ratanpur border",
    bestTime: "September to March",
    placesToSee: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake", "Sajjangarh Monsoon Palace", "Saheliyon-ki-Bari"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹2,750" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹3,250" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹3,750" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹4,500" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹6,000" }
    ],
    faqs: [
      { q: "What is the best route from Ahmedabad to Udaipur by car?", a: "The best route is via NH-48 through Himatnagar, Shamlaji, and Ratanpur border. It is a smooth 4-lane highway taking around 4.5 to 5 hours." },
      { q: "Are state border taxes included in the Ahmedabad to Udaipur taxi fare?", a: "Crossing into Rajasthan incurs an interstate passenger tourist permit tax, which is billed transparently at actual government receipt rates." },
      { q: "Can we do a 1-day or weekend round-trip to Udaipur from Ahmedabad?", a: "Yes, we regularly arrange 2-day and 3-day round trips with customized hotel drop and local sightseeing in Udaipur." }
    ]
  },
  {
    name: "Somnath",
    distance: "420 km",
    duration: "7 to 8 hours",
    highway: "NH-47 and NH-151 via Rajkot, Junagadh and Veraval",
    bestTime: "October to March",
    placesToSee: ["Somnath Jyotirlinga Temple", "Triveni Sangam", "Bhalka Tirth", "Somnath Beach", "Gita Mandir", "Prabhas Patan Museum"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹4,620" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹5,460" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹6,300" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹7,560" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹10,080" }
    ],
    faqs: [
      { q: "What are the temple timings and Aarti schedules at Somnath?", a: "The temple opens daily at 6:00 AM and closes at 10:00 PM. Aartis are held at 7:00 AM, 12:00 PM, and 7:00 PM. The Jay Somnath Sound & Light show is held daily from 8:00 PM to 9:00 PM." },
      { q: "Can we combine Somnath with Junagadh or Gir National Park?", a: "Yes, our chauffeurs can easily route your journey through Junagadh (Uparkot, Girnar) or Sasan Gir for a wildlife safari." },
      { q: "Is the road between Rajkot and Somnath in good condition?", a: "Yes, the 4-lane highway via Jetpur and Junagadh is smooth and well-surfaced with clean food stops." }
    ]
  },
  {
    name: "Dwarka",
    distance: "440 km",
    duration: "7.5 to 8.5 hours",
    highway: "NH-47 and NH-947 via Rajkot, Jamnagar and Khambhalia",
    bestTime: "October to March",
    placesToSee: ["Dwarkadhish Temple (Jagat Mandir)", "Bet Dwarka (via Sudarshan Setu)", "Nageshwar Jyotirlinga", "Rukmini Devi Temple", "Shivrajpur Beach", "Gopi Talav"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹4,840" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹5,720" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹6,600" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹7,920" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹10,560" }
    ],
    faqs: [
      { q: "How do we travel from Dwarka to Bet Dwarka now?", a: "Devotees can now drive directly to Bet Dwarka via the newly opened Sudarshan Setu cable-stayed bridge, saving hours compared to older ferry boat queues." },
      { q: "What is the recommended duration for an Ahmedabad to Dwarka pilgrimage trip?", a: "A 3-day / 2-night trip allows relaxed darshan at Dwarkadhish, Bet Dwarka, Nageshwar Jyotirlinga, and Rukmini Temple." },
      { q: "Can we visit Shivrajpur Blue Flag Beach during the Dwarka trip?", a: "Yes, Shivrajpur beach is just 30 km north of Dwarka and our chauffeur will gladly include it in your sightseeing." }
    ]
  },
  {
    name: "Statue of Unity (Kevadia)",
    distance: "190 km",
    duration: "3 to 3.5 hours",
    highway: "NE-1 to Vadodara, then Dabhoi–Tilakwada State Highway",
    bestTime: "July to March (Pleasant weather & lush scenery)",
    placesToSee: ["Statue of Unity (182m)", "Sardar Sarovar Dam", "Valley of Flowers", "Jungle Safari", "Glow Garden", "Laser Light Show"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹2,090" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹2,470" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹2,850" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹3,420" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹4,560" }
    ],
    faqs: [
      { q: "Is the Statue of Unity open on all days of the week?", a: "No, the Statue of Unity complex is strictly closed on Mondays for maintenance. Plan your road trip between Tuesday and Sunday." },
      { q: "Can we complete the Statue of Unity trip in a single day from Ahmedabad?", a: "Yes, departing at 6:00 AM allows full-day sightseeing including the viewing gallery and 7:00 PM laser show, returning by 11:00 PM." },
      { q: "Do private taxis have access inside the monument area?", a: "Private vehicles park at designated parking plazas; internal eco-friendly buses transport visitors between attractions." }
    ]
  },
  {
    name: "Mount Abu",
    distance: "220 km",
    duration: "4 to 4.5 hours",
    highway: "NH-27 via Mehsana, Siddhpur, Palanpur and Abu Road",
    bestTime: "Throughout the year (Monsoons & Winter are prime)",
    placesToSee: ["Nakki Lake", "Dilwara Jain Temples", "Guru Shikhar", "Sunset Point", "Achalgarh Fort", "Trevor's Tank"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹2,420" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹2,860" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹3,300" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹3,960" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹5,280" }
    ],
    faqs: [
      { q: "Do your drivers have experience with Mount Abu ghat hill driving?", a: "Yes, our chauffeurs possess years of mountain driving experience across the Abu Road hairpin curves." },
      { q: "What is the toll and interstate tax for Mount Abu?", a: "There are FASTag tolls along NH-27 plus a Rajasthan passenger vehicle border entry tax and Mount Abu municipal toll." },
      { q: "Can we visit Ambaji Temple on the way to Mount Abu?", a: "Yes, Ambaji is located near Abu Road and can easily be incorporated into your itinerary." }
    ]
  },
  {
    name: "Jaipur",
    distance: "660 km",
    duration: "10 to 11 hours",
    highway: "NH-48 via Udaipur, Chittorgarh, Bhilwara and Kishangarh",
    bestTime: "October to March",
    placesToSee: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Chokhi Dhani"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹7,260" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹8,580" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹9,900" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹11,880" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹15,840" }
    ],
    faqs: [
      { q: "How long does a taxi take from Ahmedabad to Jaipur?", a: "The drive takes around 10 to 11 hours via NH-48. Many travelers prefer an overnight journey or a 1-night stop in Udaipur." },
      { q: "Are outstation one-way drops available from Ahmedabad to Jaipur?", a: "Yes, we provide dedicated one-way taxi drops from Ahmedabad to any hotel or residence in Jaipur." },
      { q: "Which vehicle is best suited for the long drive to Jaipur?", a: "The Toyota Innova Crysta or Maruti Ertiga provides optimal suspension and comfort for this long-distance journey." }
    ]
  },
  {
    name: "Mumbai",
    distance: "530 km",
    duration: "8.5 to 9.5 hours",
    highway: "NE-1 to Vadodara, then NH-48 via Bharuch, Surat, Navsari and Vapi",
    bestTime: "October to March",
    placesToSee: ["Gateway of India", "Marine Drive", "Bandra-Worli Sea Link", "Siddhivinayak Temple", "Colaba Causeway"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹5,830" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹6,890" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹7,950" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹9,540" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹12,720" }
    ],
    faqs: [
      { q: "Can I book a one-way cab from Ahmedabad to Mumbai?", a: "Yes, we offer fixed one-way drops to Mumbai international airport (BOM), South Mumbai, Bandra, Thane, and Navi Mumbai." },
      { q: "What are the major toll plazas between Ahmedabad and Mumbai?", a: "Key tolls include NE-1 Vadodara, Bharuch Narmada Bridge, Surat, Boriach, and Charoti (Maharashtra border)." },
      { q: "Is night driving safe on the Ahmedabad to Mumbai NH-48 highway?", a: "Yes, NH-48 is an active, heavily lit multi-lane industrial corridor with 24/7 food plazas and police patrolling." }
    ]
  },
  {
    name: "Surat",
    distance: "265 km",
    duration: "4 to 4.5 hours",
    highway: "NE-1 to Vadodara, then NH-48 via Bharuch",
    bestTime: "All year round",
    placesToSee: ["Dumas Beach", "Surat Castle", "Sardar Patel Museum", "Dutch Garden", "Gopi Talav", "VR Surat Mall"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹2,915" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹3,445" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹3,975" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹4,770" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹6,360" }
    ],
    faqs: [
      { q: "How much does a one-way taxi from Ahmedabad to Surat cost?", a: "One-way fares for Swift Dzire start from ~₹2,900 plus highway tolls, dropping you directly at any Surat location." },
      { q: "Can I book a same-day return cab for business in Surat's textile markets?", a: "Yes, our same-day business disposal package allows full-day travel between Ring Road textile markets and diamond bourses." },
      { q: "What is the fastest route to Surat from East Ahmedabad?", a: "Take the SP Ring Road directly onto NE-1 Expressway to Vadodara, then merge seamlessly onto NH-48 to Surat." }
    ]
  },
  {
    name: "Vadodara",
    distance: "110 km",
    duration: "1.5 to 2 hours",
    highway: "National Expressway 1 (NE-1 Mahatma Gandhi Expressway)",
    bestTime: "All year round (Special during Navratri)",
    placesToSee: ["Laxmi Vilas Palace", "Sayaji Baug (Kamati Baug)", "Baroda Museum & Picture Gallery", "Kirti Mandir", "EME Temple"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹1,210" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹1,430" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹1,650" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹1,980" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹2,640" }
    ],
    faqs: [
      { q: "How fast is the drive between Ahmedabad and Vadodara?", a: "Via the NE-1 expressway, the 100-km drive takes under 90 minutes from toll gate to toll gate." },
      { q: "Can I book an airport taxi from Ahmedabad Airport directly to Vadodara?", a: "Yes, we provide 24/7 direct airport pickups from SVPI Airport straight to your doorstep in Vadodara." },
      { q: "Are one-way taxis available from Ahmedabad to Vadodara?", a: "Yes, we run daily one-way trips starting from just ₹1,210 base fare." }
    ]
  },
  {
    name: "Rajkot",
    distance: "215 km",
    duration: "3.5 to 4 hours",
    highway: "NH-47 via Bagodara, Limbdi and Chotila",
    bestTime: "October to March",
    placesToSee: ["Watson Museum", "Kaba Gandhi No Delo", "Aji Dam", "Chamunda Mata Temple Chotila", "Rotary Dolls Museum"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹2,365" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹2,795" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹3,225" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹3,870" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹5,160" }
    ],
    faqs: [
      { q: "Can we stop for darshan at Chamunda Mata Temple in Chotila on the way?", a: "Yes! Chotila is directly on the highway between Limbdi and Rajkot, and our driver will happily halt for darshan." },
      { q: "Is the Ahmedabad to Rajkot highway 6-lane?", a: "The corridor has been upgraded to a 6-lane expressway, making the drive fast, smooth, and safe." },
      { q: "What is the one-way taxi fare to Rajkot?", a: "One-way fares for Swift Dzire start from ~₹2,365 plus highway toll charges." }
    ]
  },
  {
    name: "Diu",
    distance: "365 km",
    duration: "6.5 to 7.5 hours",
    highway: "NH-47 / NH-51 via Dhandhuka, Amreli, Una and Tad",
    bestTime: "October to April",
    placesToSee: ["Nagoa Beach", "Diu Fort", "St. Paul's Church", "Naida Caves", "Ghoghla Beach", "INS Khukri Memorial"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹4,015" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹4,745" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹5,475" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹6,570" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹8,760" }
    ],
    faqs: [
      { q: "What is the best route to Diu from Ahmedabad by road?", a: "The most popular route is via Bagodara, Dhandhuka, Barwala, Botad, Amreli, Rajula, and Una to Diu." },
      { q: "Can we visit Somnath and Gir along with Diu?", a: "Yes, Diu is only 85 km from Somnath and 100 km from Gir National Park, making a 3 to 4 day coastal circuit very popular." },
      { q: "Are water sports open at Nagoa beach throughout the winter?", a: "Yes, parasailing, jet skiing, and banana boat rides operate actively from October through May." }
    ]
  },
  {
    name: "Saputara",
    distance: "400 km",
    duration: "7 to 8 hours",
    highway: "NE-1 to Vadodara, then NH-48 to Bilimora/Navsari and Waghai ghat road",
    bestTime: "July to February (Monsoons & Winter)",
    placesToSee: ["Saputara Lake", "Sunset Point", "Gira Waterfalls", "Saputara Ropeway", "Hatgadh Fort", "Step Garden"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹4,400" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹5,200" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹6,000" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹7,200" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹9,600" }
    ],
    faqs: [
      { q: "Is the road to Saputara safe during monsoons?", a: "The Waghai-Saputara ghat road is picturesque and well-maintained. Our chauffeurs drive cautiously during heavy rainfall." },
      { q: "Can we visit Gira Waterfalls on the way to Saputara?", a: "Yes, Gira Waterfalls is located near Waghai right along the route to Saputara." },
      { q: "How many days are recommended for a Saputara hill trip?", a: "A 2-night / 3-day itinerary is ideal to explore the lake, gardens, viewpoints, and tribal craft museum." }
    ]
  },
  {
    name: "Pavagadh",
    distance: "145 km",
    duration: "2.5 to 3 hours",
    highway: "NE-1 to Vadodara bypass, then Halol State Highway",
    bestTime: "All year round (especially Navratri & monsoons)",
    placesToSee: ["Kalika Mata Temple (Hilltop)", "Champaner-Pavagadh Archaeological Park", "Pavagadh Ropeway", "Jami Masjid Champaner"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹1,595" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹1,885" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹2,175" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹2,610" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹3,480" }
    ],
    faqs: [
      { q: "Can taxis drive up to Machi at Pavagadh?", a: "Private cabs drive up to Machi, from where passengers can take the ropeway (Udan Khatola) or stairs to Kalika Mata temple." },
      { q: "Can we combine Pavagadh with Statue of Unity in a 2-day trip?", a: "Yes, Pavagadh (Halol) and Kevadia (Statue of Unity) are within 1.5 hours of each other and form a perfect weekend circuit." },
      { q: "What is the cab fare from Ahmedabad to Pavagadh?", a: "Round-trip cab fares for Swift Dzire start from ~₹3,200 for a full-day same-day return pilgrimage." }
    ]
  },
  {
    name: "Ambaji",
    distance: "185 km",
    duration: "3.5 to 4 hours",
    highway: "NH-27 via Mehsana, Palanpur and Danta",
    bestTime: "All year round (Famous during Bhadarvi Poonam)",
    placesToSee: ["Ambaji Mata Temple", "Gabbar Hill (51 Shaktipeeth Yatra)", "Kamakshi Mandir", "Mansarovar", "Kailash Hill"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹2,035" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹2,405" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹2,775" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹3,330" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹4,440" }
    ],
    faqs: [
      { q: "Is there a ropeway at Gabbar Hill Ambaji?", a: "Yes, an efficient cable car ropeway takes devotees up Gabbar Hill for darshan of the eternal holy flame (Akhand Jyot)." },
      { q: "Can we do a same-day return trip to Ambaji from Ahmedabad?", a: "Yes, departing Ahmedabad at 6:00 AM gets you to Ambaji by 10:00 AM for morning darshan, returning home by 7:00 PM." },
      { q: "Can we visit Taranga Jain Temples on the way to Ambaji?", a: "Yes, Taranga Hill is a short detour from Mehsana/Kheralu and can be added on request." }
    ]
  },
  {
    name: "Shirdi",
    distance: "490 km",
    duration: "8.5 to 9.5 hours",
    highway: "NE-1 to Vadodara, NH-48 to Surat/Navsari, then via Dharampur/Saputara to Nashik and Shirdi",
    bestTime: "September to March",
    placesToSee: ["Sai Baba Samadhi Temple", "Dwarkamai", "Chavadi", "Gurusthan", "Shani Shingnapur (~70 km)"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹5,390" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹6,370" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹7,350" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹8,820" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹11,760" }
    ],
    faqs: [
      { q: "What is the best route from Ahmedabad to Shirdi by car?", a: "The most comfortable route is via Vadodara, Bharuch, Surat, Navsari, Dharampur, Nashik, and Shirdi." },
      { q: "Can we include Shani Shingnapur and Trimbakeshwar in the Shirdi tour?", a: "Yes! A 3-day / 2-night itinerary comfortably covers Shirdi Sai Baba darshan, Shani Shingnapur, and Trimbakeshwar Jyotirlinga." },
      { q: "Do your drivers assist with online Shirdi VIP Aarti passes?", a: "Our drivers advise you on temple trust counter timings and entry gates for quick darshan access." }
    ]
  },
  {
    name: "Jodhpur",
    distance: "480 km",
    duration: "8 to 9 hours",
    highway: "NH-27 to Palanpur, then NH-62 via Sirohi, Pali to Jodhpur",
    bestTime: "October to March",
    placesToSee: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Mandore Gardens", "Clock Tower & Sardar Market"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹5,280" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹6,240" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹7,200" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹8,640" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹11,520" }
    ],
    faqs: [
      { q: "How are the road conditions between Ahmedabad and Jodhpur?", a: "The highway via Abu Road, Sirohi, and Pali is a well-paved 4-lane national highway with excellent speeds." },
      { q: "Can we visit Ranakpur Jain Temple on the way to Jodhpur?", a: "Yes, Ranakpur's famous 1444-pillar marble temple is a scenic detour near Sadri and can be added to your road trip." },
      { q: "What are the outstation cab charges for Jodhpur?", a: "Fares start at ₹11/km for Dzire and ₹13/km for Ertiga with transparent interstate road permits." }
    ]
  },
  {
    name: "Pushkar",
    distance: "540 km",
    duration: "8.5 to 9.5 hours",
    highway: "NH-48 via Udaipur and Bhilwara, or via Palanpur, Beawar and Ajmer",
    bestTime: "October to March (Pushkar Camel Fair)",
    placesToSee: ["Brahma Temple", "Pushkar Lake & 52 Ghats", "Savitri Devi Temple (Ropeway)", "Ajmer Dargah Sharif (~15 km)", "Desert Camping"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹5,940" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹7,020" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹8,100" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹9,720" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹12,960" }
    ],
    faqs: [
      { q: "Can we visit Ajmer Sharif Dargah along with Pushkar?", a: "Yes, Ajmer is only 15 km from Pushkar and our driver will arrange drop and pickup near Dargah market." },
      { q: "When is the Pushkar Camel Fair held?", a: "The annual festival is held every Kartik Purnima (typically October or November) and attracts travelers worldwide." },
      { q: "Is a one-way cab available to Pushkar or Ajmer?", a: "Yes, we provide dedicated one-way taxi drops directly from Ahmedabad to Pushkar or Ajmer." }
    ]
  },
  {
    name: "Delhi",
    distance: "950 km",
    duration: "14 to 16 hours",
    highway: "NH-48 via Udaipur, Jaipur and Gurgaon Expressway",
    bestTime: "October to March",
    placesToSee: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Akshardham Temple Delhi", "Rashtrapati Bhavan"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹10,450" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹12,350" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹14,250" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹17,100" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹22,800" }
    ],
    faqs: [
      { q: "Is it feasible to drive from Ahmedabad to Delhi in one stretch?", a: "Yes, with two experienced highway drivers, the 950-km drive takes around 14 to 16 hours via the fast expressways." },
      { q: "Can we stop for an overnight halt in Udaipur or Jaipur?", a: "Yes, breaking the journey overnight in Udaipur or Jaipur makes the trip very pleasant and relaxed." },
      { q: "Can I book a one-way relocation cab to Delhi or Gurgaon?", a: "Yes, we regularly provide one-way family relocation and luggage transfer cabs from Ahmedabad to Delhi NCR." }
    ]
  },
  {
    name: "Bhuj/Kutch",
    distance: "340 km",
    duration: "5.5 to 6.5 hours",
    highway: "NH-947 and NH-27 via Viramgam, Halvad, Malia and Bhachau",
    bestTime: "November to February (Rann Utsav Season)",
    placesToSee: ["Aina Mahal", "Prag Mahal", "Kutch Museum", "White Rann of Kutch (Dhordo)", "Kala Dungar", "Mandvi Beach"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹3,740" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹4,420" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹5,100" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹6,120" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹8,160" }
    ],
    faqs: [
      { q: "How far is Dhordo (White Desert) from Bhuj?", a: "Dhordo is 85 km north of Bhuj, taking roughly 1.5 hours of driving across the scenic Banni plains." },
      { q: "Do your drivers know the permit procedure for Rann Utsav?", a: "Yes, our drivers assist you at the Bhirandiyara permit checkpoint to ensure smooth entry into the White Desert." },
      { q: "Can we also visit Mandvi Beach and Vijay Vilas Palace?", a: "Yes, Mandvi is 60 km south of Bhuj and makes a great addition to your Kutch road trip." }
    ]
  },
  {
    name: "Gir National Park",
    distance: "360 km",
    duration: "6.5 to 7.5 hours",
    highway: "NH-47 to Rajkot, then NH-151 via Junagadh to Sasan Gir",
    bestTime: "December to April",
    placesToSee: ["Sasan Gir Lion Safari", "Devalia Safari Park", "Gir Jungle Trail", "Kamleshwar Dam", "Girnar Hills Junagadh"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹3,960" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹4,680" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹5,400" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹6,480" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹8,640" }
    ],
    faqs: [
      { q: "Do we need advance permits for Sasan Gir Lion Safari?", a: "Yes, safari permits must be booked months in advance on the official Gujarat Forest portal (girlion.gujarat.gov.in)." },
      { q: "What is Devalia Safari Park?", a: "Devalia is an enclosed interpretation zone within Gir where lion and wildlife sightings are guaranteed even without an inner-forest safari permit." },
      { q: "Can we book a 3-day round trip from Ahmedabad covering Gir and Somnath?", a: "Yes, Somnath is just 45 km from Sasan Gir, making a combined wildlife and pilgrimage tour very popular." }
    ]
  },
  {
    name: "Junagadh",
    distance: "315 km",
    duration: "5.5 to 6 hours",
    highway: "NH-47 to Rajkot, then NH-151 via Gondal and Jetpur",
    bestTime: "October to March",
    placesToSee: ["Girnar Ropeway & Temple", "Uparkot Fort", "Mahabat Maqbara", "Sakkarbaug Zoo", "Damodar Kund"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹3,465" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹4,095" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹4,725" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹5,670" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹7,560" }
    ],
    faqs: [
      { q: "Is the Girnar Ropeway operational in Junagadh?", a: "Yes, Asia's longest temple ropeway takes pilgrims up to Ambaji peak on Mount Girnar in under 10 minutes." },
      { q: "What is special about Mahabat Maqbara?", a: "Mahabat Maqbara is an architectural marvel blending Indo-Islamic, Gothic, and European styles with winding spiral minarets." },
      { q: "Can we hire a cab from Junagadh to Somnath?", a: "Yes, Somnath is only 85 km from Junagadh and our chauffeur will drop you comfortably." }
    ]
  },
  {
    name: "Shamlaji",
    distance: "130 km",
    duration: "2 to 2.5 hours",
    highway: "NH-48 via Himatnagar",
    bestTime: "All year round (especially Dev Uthani Ekadashi Fair)",
    placesToSee: ["Shamlaji Vishnu Temple (Gadadhar)", "Meshwo River & Dam", "Shyamal Van", "Devni Mori Buddhist Relics site"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹1,430" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹1,690" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹1,950" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹2,340" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹3,120" }
    ],
    faqs: [
      { q: "How long does it take to reach Shamlaji from Ahmedabad by taxi?", a: "Via the smooth 4-lane NH-48 expressway, the 130-km drive takes just 2 to 2.5 hours from Nava Naroda." },
      { q: "Can we do a same-day return trip to Shamlaji?", a: "Yes, Shamlaji is an easy 5 to 6 hour round-trip pilgrimage, perfect for a peaceful Sunday morning with family." },
      { q: "Is Shamlaji on the route to Udaipur?", a: "Yes, Shamlaji sits right before the Gujarat-Rajasthan Ratanpur border along the highway to Udaipur." }
    ]
  },
  {
    name: "Dakor",
    distance: "85 km",
    duration: "1.5 to 2 hours",
    highway: "Ahmedabad–Dakor Road via Kathwada, Mahudha or via NE-1 / Nadiad",
    bestTime: "All year round (Famous on Sharad Purnima)",
    placesToSee: ["Ranchhodraiji Temple Dakor", "Gomti Lake Dakor", "Galteshwar Shiva Temple", "Santram Mandir Nadiad"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹990" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹1,170" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹1,350" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹1,620" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹2,160" }
    ],
    faqs: [
      { q: "What is the best time for darshan at Dakor Ranchhodraiji Temple?", a: "Morning Mangla Aarti (6:45 AM) and Shringar Aarti (8:30 AM to 11:30 AM) are the most auspicious times for darshan." },
      { q: "Can we also visit Galteshwar Shiva Temple near Dakor?", a: "Yes, the ancient 12th-century Solanki-era Galteshwar temple on the Mahi River is just 15 km from Dakor." },
      { q: "How much does a round-trip taxi from Ahmedabad to Dakor cost?", a: "A same-day round-trip taxi in a Swift Dzire costs around ₹2,000 to ₹2,400 all-inclusive." }
    ]
  },
  {
    name: "Nathdwara",
    distance: "290 km",
    duration: "5 to 5.5 hours",
    highway: "NH-48 to Udaipur, then NH-58 to Nathdwara",
    bestTime: "September to March",
    placesToSee: ["Shrinathji Temple Nathdwara", "Statue of Belief (Viswas Swaroopam 369ft Shiva)", "Haldighati Memorial", "Eklingji Temple (~25 km)"],
    fares: [
      { vehicle: "Swift Dzire (4-Seater)", price: "₹3,190" },
      { vehicle: "Maruti Suzuki Ertiga (6-Seater)", price: "₹3,770" },
      { vehicle: "Toyota Innova (7-Seater)", price: "₹4,350" },
      { vehicle: "Toyota Innova Crysta (7-Seater)", price: "₹5,220" },
      { vehicle: "Tempo Traveller (14-Seater)", price: "₹6,960" }
    ],
    faqs: [
      { q: "What are the 8 daily darshan timings (Jhankis) at Shrinathji Temple?", a: "The 8 darshans are Mangla, Shringar, Gwal, Rajbhog, Utthapan, Bhog, Sandhya Aarti, and Shayan. Morning Rajbhog is the most popular." },
      { q: "What is the Statue of Belief in Nathdwara?", a: "It is the world's tallest Lord Shiva statue (369 feet / 112 metres), featuring internal elevators, viewing decks, and evening laser projection." },
      { q: "Can we combine Nathdwara with Udaipur and Haldighati?", a: "Yes, Nathdwara is just 45 km north of Udaipur. Our cabs regularly cover this complete Mewar spiritual circuit." }
    ]
  }
];

const routes = rawRoutes.map(r => {
  const slug = `ahmedabad-to-${r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-taxi`;
  return {
    slug,
    from: "Ahmedabad",
    to: r.name,
    distance: r.distance,
    duration: r.duration,
    bestTime: r.bestTime,
    placesToSee: r.placesToSee,
    fares: r.fares,
    faqs: r.faqs,
    h1: `Ahmedabad to ${r.name} Taxi Service`,
    metaTitle: `Ahmedabad to ${r.name} Taxi | Fare from ₹11/km – Brahmani Travels`,
    metaDescription: `Book reliable taxi from Ahmedabad to ${r.name}. Distance ${r.distance}, travel time ${r.duration}. Swift Dzire, Ertiga, Innova Crysta & Tempo Traveller from ₹11/km.`,
    body: `Planning a journey from Ahmedabad to ${r.name}? Brahmani Travels offers dedicated, reliable chauffeur-driven cab service connecting Ahmedabad to ${r.name} (${r.distance}, ~${r.duration}). Whether you are traveling for a family pilgrimage, leisure vacation, or business meeting, our clean, air-conditioned fleet guarantees a safe, comfortable, and punctual road trip.

### Highway Route & Driving Experience
The drive from Ahmedabad to ${r.name} traverses the ${r.highway}. Our commercial drivers are seasoned highway experts who know every curve, bypass, toll plaza, and clean family restaurant along the corridor. 

### Why Book Brahmani Travels for Ahmedabad to ${r.name}
1. Guaranteed Doorstep Pickup: We pick you up directly from your residence, hotel, or Ahmedabad Airport (SVPI) at any time of day or night.
2. Verified Highway Chauffeurs: Courteous, non-smoking drivers with deep knowledge of local routes and sightseeing spots.
3. Transparent Per-Kilometre Billing: Rates start at ₹11/km for sedans and ₹13/km for Ertiga with zero hidden charges.
4. Flexible Travel: Halt at clean highway rest stops, scenic viewpoints, and heritage landmarks at your leisure.

Book your private taxi from Ahmedabad to ${r.name} today. Call Rajesh Prajapati on +91 89801 79677 or message us on WhatsApp for an instant, guaranteed quote.`
  };
});

const carsData = [
  {
    slug: "swift-dzire",
    name: "Swift Dzire",
    h1: "Maruti Suzuki Swift Dzire on Rent in Ahmedabad",
    metaTitle: "Swift Dzire on Rent in Ahmedabad | ₹11/km Sedan Taxi – Brahmani Travels",
    metaDescription: "Book Maruti Swift Dzire on rent in Ahmedabad from ₹11/km. 4-seater sedan, clean AC, verified driver for local & outstation trips. Call +91 89801 79677.",
    specs: {
      seats: 4,
      type: "Sedan",
      ratePerKm: 11,
      idealFor: "Solo travelers, couples, small families (up to 4 passengers), airport transfers and business commutes."
    },
    image: "/images/fleet/swift-dzire-v2.webp",
    body: `The Maruti Suzuki Swift Dzire is India's most beloved and dependable compact sedan. Renowned for its smooth highway cruising, refined cabin acoustics, and excellent fuel efficiency, the Dzire is the ultimate choice for budget-conscious travelers who refuse to compromise on cleanliness, air conditioning, and riding comfort.

At Brahmani Travels, our Swift Dzire fleet is maintained to the highest standards. Every car is thoroughly washed and vacuumed before dispatch, equipped with clean seat covers, chilled air conditioning, and driven by a courteous, background-verified chauffeur.

Key Specifications & Features:
- Seating Capacity: 4 Passengers + 1 Chauffeur.
- Luggage Capacity: Generous 378-litre boot space accommodating 2 large suitcases plus 2 cabin duffel bags.
- Fuel & AC: High-efficiency petrol/CNG with powerful climate-controlled air conditioning.
- Interior Amenities: Ergonomic plush fabric seats, ample rear legroom, power windows, and mobile charging slots.

Ideal Use Cases:
- Daily local city travel across Ahmedabad and Gandhinagar.
- Punctual 24/7 airport drops and pickups at SVPI Airport.
- Budget-friendly outstation road trips to Udaipur, Vadodara, Mount Abu, and Somnath.

Fares start from just ₹11 per kilometre. Call Brahmani Travels at +91 89801 79677 for instant booking.`,
    faqs: [
      { q: "What is the per-km rate for Swift Dzire in Ahmedabad?", a: "Our rate for Swift Dzire is ₹11 per kilometre for outstation travel, subject to standard minimum daily kilometer norms." },
      { q: "How many suitcases can fit in the Swift Dzire trunk?", a: "The Dzire comfortably accommodates 2 medium-to-large suitcases along with 2 soft backpacks." },
      { q: "Is AC included throughout the trip?", a: "Yes, full-time air conditioning is 100% included in all our bookings." }
    ]
  },
  {
    slug: "maruti-suzuki-ertiga",
    name: "Maruti Suzuki Ertiga",
    h1: "Maruti Suzuki Ertiga on Rent in Ahmedabad",
    metaTitle: "Ertiga on Rent in Ahmedabad | ₹13/km 6-Seater MUV – Brahmani Travels",
    metaDescription: "Rent Maruti Suzuki Ertiga in Ahmedabad at ₹13/km. Spacious 6-seater AC cab with driver for family trips, outstation tours & airport drop. Call +91 89801 79677.",
    specs: {
      seats: 6,
      type: "MUV",
      ratePerKm: 13,
      idealFor: "Families of 5-6 passengers, outstation weekend trips, temple darshans and airport luggage transfers."
    },
    image: "/images/fleet/maruti-suzuki-ertiga-v2.webp",
    body: `The Maruti Suzuki Ertiga is the undisputed champion of family road trips in Gujarat. Combining the nimble agility of a passenger car with the spacious versatility of a 3-row Multi-Utility Vehicle (MUV), the Ertiga allows families of 5 to 6 passengers to travel together comfortably without breaking the bank.

At Brahmani Travels, our Ertiga vehicles are meticulously maintained with sanitized upholstery, roof-mounted secondary AC blowers for rear rows, and polite chauffeurs trained in highway safety.

Key Specifications & Features:
- Seating Capacity: 6 Passengers + 1 Chauffeur.
- Luggage Flexibility: 50:50 split third-row seats that fold flat to create a cavernous cargo bay when carrying heavy airport luggage.
- Powerful Air Conditioning: Independent roof-mounted AC vents ensuring all three rows remain cool even in peak summer.
- Ride Comfort: High roofline with generous headroom, wide opening rear doors for easy ingress by elderly parents.

Ideal Use Cases:
- Family vacations to Statue of Unity, Saputara, and Diu.
- Saurashtra temple circuits (Somnath, Dwarka, Girnar).
- Airport transfers for families returning from international flights with multiple large suitcases.

Fares start from just ₹13 per kilometre. Call +91 89801 79677 to book your Ertiga.`,
    faqs: [
      { q: "How many passengers can travel comfortably in an Ertiga?", a: "The Ertiga seats up to 6 passengers comfortably. For maximum luggage space on outstation trips, it is ideal for 4 to 5 passengers." },
      { q: "Does the Ertiga have rear air conditioning vents?", a: "Yes, the Ertiga features roof-mounted AC vents with separate fan speed controls for the middle and rear rows." },
      { q: "What is the per-km rate for Maruti Ertiga?", a: "Our rate is ₹13 per kilometre for outstation journeys." }
    ]
  },
  {
    slug: "toyota-innova",
    name: "Toyota Innova",
    h1: "Toyota Innova on Rent in Ahmedabad",
    metaTitle: "Toyota Innova on Rent in Ahmedabad | ₹15/km 7-Seater SUV – Brahmani Travels",
    metaDescription: "Hire Toyota Innova on rent in Ahmedabad from ₹15/km. Reliable 7-seater SUV with expert chauffeur for outstation tours & highway road trips. Call +91 89801 79677.",
    specs: {
      seats: 7,
      type: "SUV",
      ratePerKm: 15,
      idealFor: "Long-distance highway travel, 6-7 passenger groups, pilgrimage yatras to Somnath & Dwarka."
    },
    image: "/images/fleet/toyota-innova-v2.webp",
    body: `The legendary Toyota Innova is celebrated worldwide for its bulletproof reliability, heavy-duty suspension, and unmatched highway ride quality. Over millions of highway kilometres, the Innova has proven to be the most dependable vehicle on Indian roads, soaking up potholes and uneven expansion joints with utter poise.

At Brahmani Travels, our Toyota Innova fleet is trusted by families and corporate teams embarking on long multi-day journeys across Gujarat, Rajasthan, and Maharashtra.

Key Specifications & Features:
- Seating Capacity: 7 Passengers + 1 Chauffeur.
- Rugged Ladder-Frame Chassis: Outstanding stability and safety at highway cruising speeds.
- Dual-Zone Climate Control: High-capacity air conditioning system keeping the entire cabin chilled.
- Generous Legroom & Recline: Deeply cushioned seats with wide armrests ensuring passengers arrive fatigue-free.

Ideal Use Cases:
- Multi-day pilgrimage circuits (Dwarka, Somnath, Ambaji, Shamlaji).
- Rajasthan heritage tours (Udaipur, Jodhpur, Mount Abu).
- Corporate field visits and industrial tours across Gujarat.

Fares start from ₹15 per kilometre. Reserve your Toyota Innova by calling +91 89801 79677.`,
    faqs: [
      { q: "What is the per-km rate for Toyota Innova?", a: "Our rate for the classic 7-seater Toyota Innova is ₹15 per kilometre." },
      { q: "Is the Innova comfortable for elderly family members?", a: "Yes, the Innova is renowned for its plush cushioning, wide doors, and upright seating posture that relieves knee and back pressure." },
      { q: "How much luggage can an Innova carry with 6 passengers?", a: "With the third row in use, it holds 2-3 medium bags in the boot, plus additional baggage on our secure overhead luggage carrier if needed." }
    ]
  },
  {
    slug: "chevrolet-tavera",
    name: "Chevrolet Tavera",
    h1: "Chevrolet Tavera on Rent in Ahmedabad",
    metaTitle: "Chevrolet Tavera on Rent in Ahmedabad | ₹16/km 9-Seater – Brahmani Travels",
    metaDescription: "Rent 9-seater Chevrolet Tavera in Ahmedabad at ₹16/km. Affordable group vehicle with driver for village visits, picnics & temple tours. Call +91 89801 79677.",
    specs: {
      seats: 9,
      type: "SUV",
      ratePerKm: 16,
      idealFor: "Large budget-conscious groups, village functions, religious gatherings and picnic groups up to 9 people."
    },
    image: "/images/fleet/chevrolet-tavera-v2.webp",
    body: `The Chevrolet Tavera is a rugged, spacious 9-seater MUV designed specifically for budget-conscious group travel. When you need to transport 8 to 9 family members or colleagues without paying the higher rates of a large Tempo Traveller, the Tavera provides the perfect economical bridge.

With its side-facing rear jump seats, high ground clearance, and robust mechanical setup, the Tavera is especially popular for rural visits, village marriage functions, community gatherings, and group darshans across Gujarat.

Key Specifications & Features:
- Seating Capacity: 9 Passengers + 1 Chauffeur.
- Heavy-Duty Suspension: Easily navigates rural roads, village tracks, and uneven surfaces.
- Economical Per-Head Cost: Split among 9 passengers, per-person travel expenses are lower than state transport bus tickets!
- Powerful Air Conditioning: Reliable cooling across the extended cabin.

Ideal Use Cases:
- Village family gatherings and ancestral home visits.
- Religious sanghs and community temple yatras (Dakor, Pavagadh, Ambaji).
- Budget group picnics and social events.

Fares start from ₹16 per kilometre. Call Brahmani Travels at +91 89801 79677.`,
    faqs: [
      { q: "How many passengers can legally travel in the Chevrolet Tavera?", a: "Our commercial Tavera is registered and certified for up to 9 passengers plus the driver." },
      { q: "What is the per-km rate for Chevrolet Tavera?", a: "Our rate is ₹16 per kilometre." },
      { q: "Is the Tavera equipped with air conditioning?", a: "Yes, all our Tavera vehicles are equipped with functional air conditioning." }
    ]
  },
  {
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    h1: "Toyota Innova Crysta on Rent in Ahmedabad",
    metaTitle: "Innova Crysta on Rent in Ahmedabad | ₹18/km Luxury 7-Seater – Brahmani Travels",
    metaDescription: "Book luxury Toyota Innova Crysta on rent in Ahmedabad from ₹18/km. Premium captain seats, rear AC blowers, verified executive chauffeur. Call +91 89801 79677.",
    specs: {
      seats: 7,
      type: "SUV",
      ratePerKm: 18,
      idealFor: "VIP executive travel, NRI family holidays, weddings, long outstation road trips where comfort is paramount."
    },
    image: "/images/fleet/toyota-innova-crysta-v2.webp",
    body: `The Toyota Innova Crysta represents the absolute pinnacle of luxury road travel in India. With its commanding road presence, sculpted aerodynamic lines, sophisticated cabin, and potent 2.4-litre diesel engine, the Crysta delivers a first-class travel experience that rivals premium luxury German saloons while conquering Indian highway conditions with effortless ease.

At Brahmani Travels, our Innova Crysta fleet is the crown jewel of our service. Each vehicle features plush leatherette captain seats with individual armrests, ambient roof lighting, individual digital climate control, and whisper-quiet cabin insulation.

Key Specifications & Features:
- Seating Capacity: 7 Passengers (including 2nd-row luxury captain seats).
- 2.4L GD Diesel Engine (150 PS / 343 Nm): Effortless highway acceleration and effortless mountain hill climbs.
- Triple-Zone Climate Control: Digital temperature controls with ceiling vents for all three rows.
- Executive Amenities: USB quick-chargers, rear seat folding tables, premium sound insulation, and cavernous luggage capacity.

Ideal Use Cases:
- Executive VIP corporate delegations and CEO transit.
- Luxury bridal cars and high-profile wedding convoys.
- NRI family holidays across Gujarat and Rajasthan.
- Long-distance road trips to Udaipur, Mount Abu, and Statue of Unity.

Fares start from ₹18 per kilometre. Experience true road luxury — call Brahmani Travels on +91 89801 79677.`,
    faqs: [
      { q: "Does the Innova Crysta have 2nd-row captain seats?", a: "Yes, our luxury Innova Crystas feature dedicated 2nd-row captain seats with individual slide, recline, and armrests." },
      { q: "What is the per-km rate for Innova Crysta in Ahmedabad?", a: "Our rate is ₹18 per kilometre for outstation travel." },
      { q: "Can we hire the Innova Crysta for wedding ceremonies and VIP guest reception?", a: "Yes, the Innova Crysta is our most popular wedding and corporate VIP vehicle." }
    ]
  },
  {
    slug: "tempo-traveller-11",
    name: "Tempo Traveller (11 Seater)",
    h1: "11 Seater Luxury Tempo Traveller on Rent in Ahmedabad",
    metaTitle: "11 Seater Tempo Traveller on Rent Ahmedabad | ₹23/km – Brahmani Travels",
    metaDescription: "Hire 11-seater luxury Tempo Traveller in Ahmedabad from ₹23/km. 1x1 Maharaja pushback seats, dual AC, music system for family tours. Call +91 89801 79677.",
    specs: {
      seats: 11,
      type: "Tempo Traveller",
      ratePerKm: 23,
      idealFor: "Small group vacations (8-10 people), boutique wedding convoys, luxury pilgrimage tours."
    },
    image: "/images/fleet/tempo-traveller-11-v2.webp",
    body: `The 11-Seater Luxury Force Tempo Traveller is designed for discerning travelers who want maximum personal space and royal comfort. Featuring a rare 1x1 Maharaja luxury seating configuration, each passenger enjoys an extra-wide plush reclining captain seat with generous legroom, wide aisles, and panoramic picture windows.

At Brahmani Travels, our 11-seater Tempo Traveller offers the intimacy and luxury of an executive jet on wheels. Perfect for small family getaways, destination weddings, and executive group transit.

Key Specifications & Features:
- Seating Capacity: 11 Passengers + 1 Chauffeur + 1 Helper.
- 1x1 Maharaja Luxury Layout: Extra-wide bucket seats with calf support and deep recline.
- High-Output Twin AC: Dual compressors keep the cabin cool even during scorching summer heat.
- Entertainment: LED TV with Android streaming, Bluetooth stereo, and microphone.

Fares start at ₹23/km. Call +91 89801 79677 to book.`,
    faqs: [
      { q: "What is the seating layout of the 11-seater Tempo Traveller?", a: "It features a spacious 1x1 Maharaja configuration with wide middle aisles and individual luxury captain seats." },
      { q: "What is the per-km rate?", a: "The rate is ₹23 per kilometre." },
      { q: "Can it climb hill stations like Mount Abu?", a: "Yes, our Tempo Travellers have powerful CRDI diesel engines and climb hill roads with ease." }
    ]
  },
  {
    slug: "tempo-traveller-14",
    name: "Tempo Traveller (14 Seater)",
    h1: "14 Seater Luxury Tempo Traveller on Rent in Ahmedabad",
    metaTitle: "14 Seater Tempo Traveller on Rent Ahmedabad | ₹24/km – Brahmani Travels",
    metaDescription: "Rent 14-seater Force Tempo Traveller in Ahmedabad at ₹24/km. Pushback reclining seats, separate luggage compartment, powerful AC. Call +91 89801 79677.",
    specs: {
      seats: 14,
      type: "Tempo Traveller",
      ratePerKm: 24,
      idealFor: "Medium family get-togethers, corporate team offsites, Mount Abu and Udaipur road trips."
    },
    image: "/images/fleet/tempo-traveller-14-v2.webp",
    body: `The 14-Seater Force Tempo Traveller is our most versatile and popular group transport vehicle. Striking the perfect balance between passenger capacity, agile road handling, and spacious comfort, it easily accommodates medium-sized family groups, friend reunions, and corporate project teams.

Equipped with 2x1 pushback seats, individual AC vents, and a dedicated rear luggage compartment, the 14-seater keeps your entire party together without anyone feeling crowded.

Key Specifications & Features:
- Seating Capacity: 14 Passengers + Chauffeur.
- 2x1 Pushback Seating: Comfortable recline with headrests and armrests.
- Dedicated Luggage Boot: Ample space for suitcases, backpacks, and supplies.
- Clean Entertainment System: High-definition audio and video entertainment.

Fares start at ₹24/km. Call +91 89801 79677.`,
    faqs: [
      { q: "What is the per-km rate for 14-seater Tempo Traveller?", a: "Our rate is ₹24 per kilometre." },
      { q: "Is there enough luggage space for 14 passengers?", a: "Yes, there is a dedicated rear boot plus an optional roof luggage carrier." },
      { q: "Are drivers experienced with long outstation journeys?", a: "Yes, our heavy-vehicle drivers have minimum 5+ years of highway driving experience." }
    ]
  },
  {
    slug: "tempo-traveller-17",
    name: "Tempo Traveller (17 Seater)",
    h1: "17 Seater Luxury Tempo Traveller on Rent in Ahmedabad",
    metaTitle: "17 Seater Tempo Traveller on Rent Ahmedabad | ₹25/km – Brahmani Travels",
    metaDescription: "Book 17-seater luxury AC Tempo Traveller in Ahmedabad from ₹25/km. High roof, individual reading lights, LED entertainment system. Call +91 89801 79677.",
    specs: {
      seats: 17,
      type: "Tempo Traveller",
      ratePerKm: 25,
      idealFor: "Large family weddings, pilgrim groups to Somnath & Dwarka, corporate convention transit."
    },
    image: "/images/fleet/tempo-traveller-17-v2.webp",
    body: `When your traveling group expands to 15 to 17 people, renting two separate cars increases fuel, toll, and driver costs while separating the group. The 17-Seater Luxury Force Tempo Traveller provides the perfect solution, keeping everyone together in a unified, air-conditioned lounge environment.

Features high-roof ceiling allowing passengers to stand upright comfortably, wide panoramic windows, and smooth air suspension.

Key Specifications & Features:
- Seating Capacity: 17 Passengers + Chauffeur.
- High Roof Design: Easy movement along the central aisle.
- Twin-Compressor AC: Unmatched cooling performance across all rows.
- USB Charging & LED Lights: Modern convenience for every passenger.

Fares start at ₹25/km. Call +91 89801 79677 to book.`,
    faqs: [
      { q: "What is the per-km rate for 17-seater Tempo Traveller?", a: "Our rate is ₹25 per kilometre." },
      { q: "Can we hire this for a 4-day Gujarat pilgrimage tour?", a: "Yes, we regularly provide 17-seaters for Somnath, Dwarka, and Gir circuits." },
      { q: "Does the vehicle have pushback seats?", a: "Yes, all seats are ergonomic pushback reclining seats." }
    ]
  },
  {
    slug: "tempo-traveller-20",
    name: "Tempo Traveller (20 Seater)",
    h1: "20 Seater Grand Tempo Traveller on Rent in Ahmedabad",
    metaTitle: "20 Seater Tempo Traveller on Rent Ahmedabad | ₹30/km – Brahmani Travels",
    metaDescription: "Hire 20-seater Force Tempo Traveller in Ahmedabad at ₹30/km. Maximum seating capacity, twin AC blowers, experienced highway driver. Call +91 89801 79677.",
    specs: {
      seats: 20,
      type: "Tempo Traveller",
      ratePerKm: 30,
      idealFor: "Big wedding parties, school and college trips, large pilgrim sanghs and community tours."
    },
    image: "/images/fleet/tempo-traveller-20-v2.webp",
    body: `The 20-Seater Grand Force Tempo Traveller is the largest vehicle in the Tempo Traveller category. Delivering the seating capacity of a mini-bus with the nimble maneuverability and lower toll rates of a light commercial vehicle, it is the top choice for large wedding parties, school excursions, and religious community pilgrimages.

At Brahmani Travels, our 20-seater Tempo Travellers feature heavy-duty AC units, reinforced suspension for maximum passenger comfort, and ample storage for oversized baggage.

Key Specifications & Features:
- Seating Capacity: 20 Passengers + Chauffeur.
- Maximum Economy: Unbeatable per-passenger travel cost for large groups.
- Heavy-Duty Cooling: Twin AC blowers designed for large cabin volumes.
- Verified Chauffeurs: Experienced commercial drivers with deep route familiarity.

Fares start at ₹30/km. Call +91 89801 79677 to book.`,
    faqs: [
      { q: "What is the rate per km for a 20-seater Tempo Traveller?", a: "Our rate is ₹30 per kilometre for outstation journeys." },
      { q: "Can a 20-seater Tempo Traveller navigate narrow old-city streets?", a: "Yes, it has much better maneuverability than a full-size bus and can access most hotel driveways." },
      { q: "Is an advance booking required for 20-seater models?", a: "Yes, during peak wedding and holiday seasons, we recommend booking at least 1-2 weeks in advance." }
    ]
  }
];

module.exports = {
  routes,
  cars: carsData
};

