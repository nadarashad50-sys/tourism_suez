
// Navbar shadow on scroll (اختياري لو حبيتي تزوديه بعدين)

// Hero slider (auto)
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
  }, 6000); // كل 6 ثواني
}

// Footer year
const yearSpans = document.querySelectorAll("#year");
const currentYear = new Date().getFullYear();
yearSpans.forEach((el) => (el.textContent = currentYear));

// Leaflet map
const mapEl = document.getElementById("suezMap");

if (mapEl) {
  const map = L.map("suezMap").setView([29.9668, 32.5498], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const places = [
    {
      lat: 29.95,
      lng: 32.55,
      nameEn: "Suez Beaches",
      nameAr: "شواطئ السويس",
      desc: "Family beaches facing the Gulf of Suez.",
    },
    {
      lat: 29.955,
      lng: 32.566,
      nameEn: "Port Tawfiq Promenade",
      nameAr: "كورنيش بورتوفيق",
      desc: "Waterfront promenade with canal and sea views.",
    },
    {
      lat: 29.9666,
      lng: 32.549,
      nameEn: "Suez National Museum",
      nameAr: "متحف السويس القومي",
      desc: "Museum telling the story of Suez and the canal.",
    },
    {
      lat: 29.9662,
      lng: 32.5497,
      nameEn: "Al-Ghareeb Mosque",
      nameAr: "مسجد الغريب",
      desc: "Key spiritual landmark in Suez.",
    },
  ];

  places.forEach((p) => {
    const marker = L.circleMarker([p.lat, p.lng], {
      radius: 8,
      color: "#1c8fe5",
      fillColor: "#1c8fe5",
      fillOpacity: 0.9,
      weight: 2,
    }).addTo(map);

    marker.bindPopup(
      `<strong>${p.nameEn} / ${p.nameAr}</strong><br><span style="font-size:0.8rem;">${p.desc}</span>`
    );
  });
}
