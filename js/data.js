const languageColors = [
  "#3498db", // Blue
  "#e74c3c", // Red
  "#2ecc71", // Green
  "#9b59b6", // Purple
  "#f39c12", // Orange
  "#1abc9c", // Turquoise
  "#e67e22", // Brown
  "#6a1b9a", // Dark Purple
  "#d35400", // Rust
  "#27ae60", // Forest Green
  "#8e44ad", // Violet
  "#c0392b", // Dark Red
  "#16a085", // Dark Cyan
  "#f1c40f", // Yellow
  "#34495e", // Midnight Blue
];

const regionData = [
    {
      "region": "CAR",
      "short-info": "Cordillera Administrative Region jaan ako nag aaral madami bondok jan",
      "population": 7.7,
      "land-area": "12,000",
      "languages-spoken": "Tagalog, Kapampangan, Pangasinan",
      "population-distribution": "Tagalog: 70%, Kapampangan: 20%, Pangasinan: 10%",
      "major-dialects": "Tagalog",
      "language-resources": "www.docs.google.com"
    },
    {
      "region": "NCR",
      "short-info": "jan sa manila pangit jan maosok",
      "population": 15,
      "land-area": "14,000",
      "languages-spoken": "Tagalog, Bicolano, English",
      "population-distribution": "Tagalog: 80%, Bicolano: 15%, English: 5%",
      "major-dialects": "Tagalog",
      "language-resources": "www.slu.edu.ph"
    },
    {
      "region": "ARMM",
      "short-info": "mmmmm sarap",
      "population": 3.2,
      "land-area": "16,000",
      "languages-spoken": "Tagalog, Mindoro languages, English",
      "population-distribution": "Tagalog: 75%, Mindoro languages: 20%, English: 5%",
      "major-dialects": "Tagalog",
      "language-resources": "www.baguiocity.com"
    },
    {
      "region": "Region-I",
      "short-info": "Northwestern tip of Luzon, known for beaches and windsurfing",
      "population": 5.3,
      "land-area": "13,851",
      "languages-spoken": "Ilocano, Tagalog, Pangasinan",
      "population-distribution": "Ilocano: 85%, Tagalog: 10%, Pangasinan: 5%",
      "major-dialects": "Ilocano",
      "language-resources": "www.github.com"
    },
    {
      "region": "Region-II",
      "short-info": "Cagayan Valley, known for its rice terraces and waterfalls",
      "population": 3.2,
      "land-area": "26,846",
      "languages-spoken": "Tagalog, Ilocano, Ibanag",
      "population-distribution": "Tagalog: 55%, Ilocano: 30%, Ibanag: 15%",
      "major-dialects": "Ilocano",
      "language-resources": "www.slu.edu.ph"
    },
    {
      "region": "Region-III",
      "short-info": "Central Luzon, known for its volcanoes and hot springs",
      "population": 12.3,
      "land-area": "39,706",
      "languages-spoken": "Tagalog, Kapampangan, Pangasinan",
      "population-distribution": "Tagalog: 70%, Kapampangan: 20%, Pangasinan: 10%",
      "major-dialects": "Tagalog",
      "language-resources": "www.fb.com"
    },
    {
      "region": "Region-IVA",
      "short-info": "CALABARZON, known for its beaches, mountains, and industrial parks",
      "population": 15.4,
      "land-area": "14,230",
      "languages-spoken": "Tagalog, Bicolano, English",
      "population-distribution": "Tagalog: 80%, Bicolano: 15%, English: 5%",
      "major-dialects": "Tagalog",
      "language-resources": "www.instagram.com"
    },
    {
      "region": "Region-IVB",
      "short-info": "MIMAROPA, known for its islands, beaches, and marine life",
      "population": 3.1,
      "land-area": "13,328",
      "languages-spoken": "Tagalog, Mindoro languages, English",
      "population-distribution": "Tagalog: 75%, Mindoro languages: 20%, English: 5%",
      "major-dialects": "Tagalog",
      "language-resources": "www.tiktok.com"
    },
    {
      "region": "Region-V",
      "short-info": "Southern part of Luzon, known for Mayon Volcano and Bicolano cuisine",
      "population": 6.7,
      "land-area": "9,575",
      "languages-spoken": "Bicolano, Tagalog, English",
      "population-distribution": "Bicolano: 80%, Tagalog: 15%, English: 5%",
      "major-dialects": "Bicolano",
      "language-resources": "www.pakyu.com"
    },
    {
      "region": "Region-VI",
      "short-info": "Panay Island and surrounding islands, known for sugar production and beaches",
      "population": 7.5,
      "land-area": "20,760",
      "languages-spoken": "Hiligaynon, Cebuano, Tagalog",
      "population-distribution": "Hiligaynon: 65%, Cebuano: 20%, Tagalog: 15%",
      "major-dialects": "Kapampangan",
      "language-resources": "www.bicolexpress.com"
    },
    {
      "region": "Region-VII",
      "short-info": "Cebu Island and Bohol Island, known for chocolate production and diving",
      "population": 5.1,
      "land-area": "14,849",
      "languages-spoken": "Cebuano, Tagalog, English",
      "population-distribution": "Cebuano: 85%, Tagalog: 10%, English: 5%",
      "major-dialects": "Kapampangan",
      "language-resources": "www.instagram.com"
    },
    {
      "region": "Region-VIII",
      "short-info": "Leyte Island and Samar Island, known for its historical sites and natural beauty",
      "population": 4.2,
      "land-area": "23,142",
      "languages-spoken": "Cebuano, Waray, Tagalog",
      "population-distribution": "Cebuano: 50%, Waray:50%",
      "major-dialects": "Caviteno",
      "language-resources": "www.tiktok.com"
    },
    {
      "region": "Region-IX",
      "short-info": "cloud nine",
      "population": 4.4,
      "land-area": "12,123",
      "languages-spoken": "Tagalog, Kapampangan, Pangasinan",
      "population-distribution": "Ilocano: 85%, Tagalog: 10%, Pangasinan: 5%",
      "major-dialects": "Ilocano",
      "language-resources": "www.instagram.com"
    },
    {
      "region": "Region-X",
      "short-info": "x-men",
      "population": 6,
      "land-area": "132,233",
      "languages-spoken": "Tagalog, Bicolano, English",
      "population-distribution": "Tagalog: 55%, Ilocano: 30%, Ibanag: 15%",
      "major-dialects": "Ilocano",
      "language-resources": "www.tiktok.com"
    },
    {
      "region": "Region-XI",
      "short-info": "seven eleven",
      "population": 7,
      "land-area": "21,677",
      "languages-spoken": "Tagalog, Mindoro languages, English",
      "population-distribution": "Tagalog: 70%, Kapampangan: 20%, Pangasinan: 10%",
      "major-dialects": "Tagalog",
      "language-resources": "www.instagram.com"
    },
    {
      "region": "Region-XII",
      "short-info": "eyyy",
      "population": 8,
      "land-area": "11,111",
      "languages-spoken": "Hiligaynon, Cebuano, Tagalog",
      "population-distribution": "Tagalog: 75%, Mindoro languages: 20%, English: 5%",
      "major-dialects": "Tagalog",
      "language-resources": "www.tiktok.com"
    },
    {
      "region": "Region-XIII",
      "short-info": "This is the region where they call \"Region Thirteen",
      "population": 5.5,
      "land-area": "90,123",
      "languages-spoken": "Cebuano, Waray, Tagalog",
      "population-distribution": "Cebuano: 85%, Tagalog: 10%, English: 5%",
      "major-dialects": "Bicolano",
      "language-resources": "www.sanmiguel.com"
    }
  ]