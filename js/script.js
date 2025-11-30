// ----------------------
// HERO SLIDER
// ----------------------
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

if (slides.length > 0) {
  showSlide(0);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);
}

// ----------------------
// FOOTER YEAR
// ----------------------
document.querySelectorAll("#year").forEach(
  (el) => (el.textContent = new Date().getFullYear())
);

// ----------------------
// LEAFLET MAP
// ----------------------
const mapEl = document.getElementById("suezMap");

if (mapEl) {
  const map = L.map("suezMap").setView([29.9668, 32.5498], 12);

  // Base layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // ----------------------
  // CATEGORY COLORS
  // ----------------------
  const colors = {
    historic: "#d9534f",   // Red
    religious: "#8e44ad",  // Purple
    waterfront: "#1c8fe5", // Blue
    clubs: "#f39c12",      // Orange
    marine: "#16a085",     // Green
  };

  // ----------------------
  // ALL LOCATIONS + IMAGES
  // ----------------------
  const places = [

    // HISTORIC SITES
    {
      cat: "historic",
      lat: 29.9679,
      lng: 32.5515,
      nameEn: "Messageri House",
      nameAr: "بيت المساجيري",
      desc: "Historic European-style maritime building.",
      image: "messageri-house.jpg"
    },
    {
      cat: "historic",
      lat: 29.9666,
      lng: 32.549,
      nameEn: "Suez National Museum",
      nameAr: "متحف السويس القومي",
      desc: "The main historical museum in Suez.",
      image: "museum-suez.jpg"
    },
    {
      cat: "historic",
      lat: 29.885,
      lng: 32.73,
      nameEn: "Fortified Point – Ayoun Mousa",
      nameAr: "النقطة الحصينة – عيون موسى",
      desc: "October War site near Ayoun Mousa.",
      image: "fortified-point.jpg"
    },
    {
      cat: "historic",
      lat: 29.9535,
      lng: 32.567,
      nameEn: "Shatta Pasha Palace",
      nameAr: "قصر شحاتة باشا سليم",
      desc: "Historic palace overlooking Port Tawfiq.",
      image: "shatta-palace.jpg"
    },

    // RELIGIOUS
    {
      cat: "religious",
      lat: 29.9662,
      lng: 32.5497,
      nameEn: "Al-Ghareeb Mosque",
      nameAr: "مسجد الغريب",
      desc: "Spiritual landmark of Suez.",
      image: "mosque-ghareeb.jpg"
    },
    {
      cat: "religious",
      lat: 29.9631,
      lng: 32.5546,
      nameEn: "Greek Church – St. Catherine",
      nameAr: "الكنيسة اليونانية – القديسة كاترين",
      desc: "Historic Greek church.",
      image: "greek-church.jpg"
    },
    {
      cat: "religious",
      lat: 29.9548,
      lng: 32.5565,
      nameEn: "Good Shepherd Church",
      nameAr: "كنيسة الراعي الصالح",
      desc: "One of the main Christian landmarks in Suez.",
      image: "good-shepherd-church.jpg"
    },

    // WATERFRONT
    {
      cat: "waterfront",
      lat: 29.97,
      lng: 32.55,
      nameEn: "El-Sawaissa Beach",
      nameAr: "شاطئ السوايسة",
      desc: "Local family beach.",
      image: "beach-sawaissa.jpg"
    },
    {
      cat: "waterfront",
      lat: 29.953,
      lng: 32.565,
      nameEn: "Port Tawfiq Promenade",
      nameAr: "ممشى بورتوفيق",
      desc: "Sea–canal waterfront walk.",
      image: "promenade-porttawfiq.jpg"
    },
    {
      cat: "waterfront",
      lat: 29.962,
      lng: 32.554,
      nameEn: "Palm Promenade",
      nameAr: "ممشى النخيل",
      desc: "Palm-lined walking area.",
      image: "palm-promenade.jpg"
    },

    // CLUBS
    {
      cat: "clubs",
      lat: 29.9709,
      lng: 32.5495,
      nameEn: "Montakhab Suez Club",
      nameAr: "نادي منتخب السويس",
      desc: "Historic football club.",
      image: "club-montakhab.jpg"
    },
    {
      cat: "clubs",
      lat: 29.977,
      lng: 32.548,
      nameEn: "Nasr Petroleum Club",
      nameAr: "نادي النصر للبترول",
      desc: "Sports & family club.",
      image: "club-nasr.jpg"
    },
    {
      cat: "clubs",
      lat: 29.975,
      lng: 32.545,
      nameEn: "Ghazl Suez Club",
      nameAr: "نادي غزل السويس",
      desc: "Sports club.",
      image: "club-ghazl.jpg"
    },
    {
      cat: "clubs",
      lat: 29.9648,
      lng: 32.5555,
      nameEn: "Family Club",
      nameAr: "نادي الأسرة",
      desc: "Family & kids activities.",
      image: "club-family.jpg"
    },

    // MARINE ACTIVITIES
    {
      cat: "marine",
      lat: 29.9553,
      lng: 32.5661,
      nameEn: "Lucinda Suez",
      nameAr: "لوسيندا السويس",
      desc: "Modern waterfront venue with beautiful sea views.",
      image: "lucinda-suez.jpg"
    },
    {
      cat: "marine",
      lat: 29.952,
      lng: 32.57,
      nameEn: "Sea Trips & Ship Photography",
      nameAr: "رحلات بحرية وتصوير السفن",
      desc: "Boats + ship photography zone.",
      image: "sea-trips.jpg"
    },
  ];

  // ----------------------
  // ADD MARKERS TO MAP
  // ----------------------
  places.forEach((p) => {
    const marker = L.circleMarker([p.lat, p.lng], {
      radius: 9,
      color: colors[p.cat],
      fillColor: colors[p.cat],
      fillOpacity: 0.9,
      weight: 2,
    }).addTo(map);

    marker.bindPopup(`
      <strong>${p.nameEn} / ${p.nameAr}</strong><br>

      <img src="assets/images/map/${p.image}"
           style="width:140px; border-radius:8px; margin:8px 0;" />

      <span style="font-size:0.85rem;">${p.desc}</span>
    `);

    marker.bindTooltip(p.nameEn, { permanent: false });
  });
}
