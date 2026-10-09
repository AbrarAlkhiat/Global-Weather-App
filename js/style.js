const countryData = {
  EG: {
    name: "Egypt",
    lat: 26.8206,
    lon: 30.8025,
    landmark: "Giza Pyramids, Cairo",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=2400&q=90"
  },
  FR: {
    name: "France",
    lat: 46.2276,
    lon: 2.2137,
    landmark: "Eiffel Tower, Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2400&q=90"
  },
  US: {
    name: "United States",
    lat: 37.0902,
    lon: -95.7129,
    landmark: "Statue of Liberty, New York",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=2400&q=90"
  },
  JP: {
    name: "Japan",
    lat: 36.2048,
    lon: 138.2529,
    landmark: "Mount Fuji, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2400&q=90"
  },
  GB: {
    name: "United Kingdom",
    lat: 55.3781,
    lon: -3.4360,
    landmark: "Big Ben, London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2400&q=90"
  },
  IT: {
    name: "Italy",
    lat: 41.8719,
    lon: 12.5674,
    landmark: "Colosseum, Rome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=2400&q=90"
  },
  BR: {
    name: "Brazil",
    lat: -14.2350,
    lon: -51.9253,
    landmark: "Christ the Redeemer, Rio",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2400&q=90"
  },
  AE: {
    name: "United Arab Emirates",
    lat: 23.4241,
    lon: 53.8478,
    landmark: "Burj Khalifa, Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=90"
  },
  SA: {
    name: "Saudi Arabia",
    lat: 23.8859,
    lon: 45.0792,
    landmark: "Kingdom Centre, Riyadh",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=90"
  },
  ES: {
    name: "Spain",
    lat: 40.4637,
    lon: -3.7492,
    landmark: "Sagrada Família, Barcelona",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2400&q=90"
  },
  TR: {
    name: "Turkey",
    lat: 38.9637,
    lon: 35.2433,
    landmark: "Hagia Sophia, Istanbul",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=2400&q=90"
  },
  DE: {
    name: "Germany",
    lat: 51.1657,
    lon: 10.4515,
    landmark: "Brandenburg Gate, Berlin",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2400&q=90"
  },
  CA: {
    name: "Canada",
    lat: 56.1304,
    lon: -106.3468,
    landmark: "CN Tower, Toronto",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=2400&q=90"
  },
  
  IN: {
    name: "India",
    lat: 20.5937,
    lon: 78.9629,
    landmark: "Taj Mahal, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=90"
  },
  SG: {
    name: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    landmark: "Marina Bay Sands",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=2400&q=90"
  }
};

const i18n = {
  en: {
    brand: "Atmosphere 3D",
    select: "Select or Search Destination",
    placeholder: "Type a country name...",
    hint: "Choose a destination to explore its weather.",
    idle: "Choose a destination to begin exploring.",
    loading: "Fetching current weather...",
    conditions: "CURRENT CONDITIONS",
    humidity: "Humidity",
    wind: "Wind speed",
    pressure: "Pressure",
    clear: "Clear sky",
    clouds: "Cloudy",
    rain: "Rainy",
    snow: "Snowy",
    storm: "Thunderstorm",
    unknown: "Weather unavailable",
    light: "Light",
    dark: "Dark",
    hero: "Explore the world.",
    description: "Discover destinations and live weather conditions through an interactive 3D globe.",
    current: "Current weather"
  },

  ar: {
    brand: "أتوموسفير 3D",
    select: "اختر وجهتك أو ابحث عنها",
    placeholder: "اكتب اسم الدولة...",
    hint: "اختر وجهة لاستكشاف حالة الطقس فيها.",
    idle: "اختر وجهة لبدء الاستكشاف.",
    loading: "جارٍ جلب حالة الطقس الحالية...",
    conditions: "حالة الطقس الحالية",
    humidity: "الرطوبة",
    wind: "سرعة الرياح",
    pressure: "الضغط الجوي",
    clear: "سماء صافية",
    clouds: "غائم",
    rain: "ممطر",
    snow: "ثلجي",
    storm: "عواصف رعدية",
    unknown: "الطقس غير متاح",
    light: "فاتح",
    dark: "داكن",
    hero: "اكتشف العالم.",
    description: "استكشف الوجهات وحالة الطقس المباشرة عبر كرة أرضية تفاعلية ثلاثية الأبعاد.",
    current: "الطقس الحالي"
  },

  fr: {
    brand: "Atmosphère 3D",
    select: "Choisir ou rechercher une destination",
    placeholder: "Saisir un pays...",
    hint: "Choisissez une destination pour découvrir la météo.",
    idle: "Choisissez une destination pour commencer.",
    loading: "Récupération de la météo...",
    conditions: "CONDITIONS ACTUELLES",
    humidity: "Humidité",
    wind: "Vitesse du vent",
    pressure: "Pression",
    clear: "Ciel dégagé",
    clouds: "Nuageux",
    rain: "Pluvieux",
    snow: "Neigeux",
    storm: "Orage",
    unknown: "Météo indisponible",
    light: "Clair",
    dark: "Sombre",
    hero: "Explorez le monde.",
    description: "Découvrez des destinations et la météo en direct avec un globe 3D interactif.",
    current: "Météo actuelle"
  },

  es: {
    brand: "Atmósfera 3D",
    select: "Elegir o buscar destino",
    placeholder: "Escribe un país...",
    hint: "Elige un destino para consultar el tiempo.",
    idle: "Elige un destino para empezar.",
    loading: "Consultando el tiempo actual...",
    conditions: "CONDICIONES ACTUALES",
    humidity: "Humedad",
    wind: "Velocidad del viento",
    pressure: "Presión",
    clear: "Cielo despejado",
    clouds: "Nublado",
    rain: "Lluvioso",
    snow: "Nieve",
    storm: "Tormenta",
    unknown: "Tiempo no disponible",
    light: "Claro",
    dark: "Oscuro",
    hero: "Explora el mundo.",
    description: "Descubre destinos y el tiempo en directo con un globo 3D interactivo.",
    current: "Tiempo actual"
  },

  de: {
    brand: "Atmosphäre 3D",
    select: "Ziel auswählen oder suchen",
    placeholder: "Land eingeben...",
    hint: "Wähle ein Ziel, um das Wetter zu sehen.",
    idle: "Wähle ein Ziel, um zu beginnen.",
    loading: "Aktuelles Wetter wird geladen...",
    conditions: "AKTUELLE WETTERLAGE",
    humidity: "Luftfeuchtigkeit",
    wind: "Windgeschwindigkeit",
    pressure: "Luftdruck",
    clear: "Klarer Himmel",
    clouds: "Bewölkt",
    rain: "Regnerisch",
    snow: "Schnee",
    storm: "Gewitter",
    unknown: "Wetter nicht verfügbar",
    light: "Hell",
    dark: "Dunkel",
    hero: "Entdecke die Welt.",
    description: "Entdecke Reiseziele und Live-Wetter mit einem interaktiven 3D-Globus.",
    current: "Aktuelles Wetter"
  }
};

let currentLang = "en";
let tomSelectInstance = null;
let scene, camera, renderer, globe, earthGroup;
let rotationTargetY = 0;
let rotationTargetX = 0;
let isNavigating = false;
let hasSelectedDestination = false;
let lastCountryCode = null;
/* Initialize the 3D Earth */
function initGlobe() {
  const container = document.getElementById("globe-container");

  if (!container || !window.THREE) return;

  const width = container.clientWidth || 320;
  const height = container.clientHeight || 300;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    38,
    width / height,
    0.1,
    1000
  );

  camera.position.z = 190;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio || 1, 2)
  );

  renderer.setSize(width, height);
  renderer.outputEncoding = THREE.sRGBEncoding;

  container.innerHTML = "";
  container.appendChild(renderer.domElement);

  earthGroup = new THREE.Group();
  scene.add(earthGroup);

  const geometry = new THREE.SphereGeometry(63, 64, 64);
  const textureLoader = new THREE.TextureLoader();

  textureLoader.setCrossOrigin("anonymous");

  textureLoader.load(
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",

    function (texture) {
      texture.encoding = THREE.sRGBEncoding;

      const material = new THREE.MeshPhongMaterial({
        map: texture,
        specular: new THREE.Color("#233b5c"),
        shininess: 12
      });

      globe = new THREE.Mesh(geometry, material);
      earthGroup.add(globe);

      /* Optional cloud layer */
      const cloudsLoader = new THREE.TextureLoader();
      cloudsLoader.setCrossOrigin("anonymous");

      cloudsLoader.load(
        "https://threejs.org/examples/textures/planets/earth_clouds_1024.png",

        function (cloudTexture) {
          const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(63.8, 64, 64),
            new THREE.MeshPhongMaterial({
              map: cloudTexture,
              transparent: true,
              opacity: 0.19,
              depthWrite: false
            })
          );

          earthGroup.add(clouds);
        },

        undefined,

        function () {
          /* Cloud texture is optional */
        }
      );

      /* Blue atmospheric glow */
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(65.3, 64, 64),
        new THREE.MeshBasicMaterial({
          color: 0x39bfff,
          transparent: true,
          opacity: 0.09,
          side: THREE.BackSide
        })
      );

      earthGroup.add(atmosphere);
    },

    undefined,

    function () {
      /* Fallback if the Earth texture cannot load */
      const material = new THREE.MeshPhongMaterial({
        color: 0x176fba,
        emissive: 0x061c3d,
        shininess: 25
      });

      globe = new THREE.Mesh(geometry, material);
      earthGroup.add(globe);
    }
  );

  scene.add(new THREE.AmbientLight(0xffffff, 1.65));

  const sun = new THREE.DirectionalLight(0xffffff, 2.1);
  sun.position.set(100, 50, 100);
  scene.add(sun);

  animateGlobe();
}

/* Animate the Earth and stop on the selected destination */
function animateGlobe() {
  requestAnimationFrame(animateGlobe);

  if (earthGroup) {
    if (isNavigating) {
      // Smoothly rotate toward the selected country
      earthGroup.rotation.y +=
        (rotationTargetY - earthGroup.rotation.y) * 0.045;

      earthGroup.rotation.x +=
        (rotationTargetX - earthGroup.rotation.x) * 0.045;

      // Stop when the destination is reached
      if (
        Math.abs(earthGroup.rotation.y - rotationTargetY) < 0.001 &&
        Math.abs(earthGroup.rotation.x - rotationTargetX) < 0.001
      ) {
        earthGroup.rotation.y = rotationTargetY;
        earthGroup.rotation.x = rotationTargetX;
        isNavigating = false;
      }
    } else if (!hasSelectedDestination) {
      // Rotate automatically only before a country is selected
      earthGroup.rotation.y += 0.0018;
    }
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

//* Rotate the Earth toward the selected destination */
function rotateGlobeTo(lat, lon) {
  if (!earthGroup) return;

  // Stop automatic rotation after choosing a destination
  hasSelectedDestination = true;
  isNavigating = true;

  // Calculate the target longitude
  const targetY = -(lon * Math.PI / 180) - Math.PI / 2;

  // Choose the shortest rotation toward the destination
  rotationTargetY =
    targetY +
    Math.PI * 2 *
    Math.round(
      (earthGroup.rotation.y - targetY) / (Math.PI * 2)
    );

  // Position the selected latitude toward the center
  rotationTargetX = lat * Math.PI / 180;
}

/* Create the searchable country dropdown */
function setupDropdown() {
  const select = document.getElementById("country-select");

  Object.entries(countryData)
    .sort((a, b) => a[1].name.localeCompare(b[1].name))
    .forEach(([code, country]) => {
      const option = document.createElement("option");

      option.value = code;
      option.textContent = country.name;

      select.appendChild(option);
    });

  tomSelectInstance = new TomSelect(select, {
    create: false,
    allowEmptyOption: true,
    maxOptions: 100,
    closeAfterSelect: true,
    hideSelected: false,
    searchField: ["text"],
    selectOnTab: true,
    placeholder: i18n[currentLang].placeholder,

    render: {
      option: function (data, escape) {
        return `
          <div class="country-option">
            <span>${escape(data.text)}</span>
          </div>
        `;
      },

      item: function (data, escape) {
        return `<div>${escape(data.text)}</div>`;
      },

      no_results: function (data, escape) {
        return `
          <div class="no-results">
            No country found for "${escape(data.input)}"
          </div>
        `;
      }
    },

    onChange: function (value) {
      if (value) {
        handleCountryChange(value);
      }
    }
  });

  /* Make sure the dropdown can receive mouse input */
  tomSelectInstance.dropdown.style.pointerEvents = "auto";
}

/* Load a clear landmark background */
function setLandmarkBackground(country) {
  const bg = document.getElementById("landmark-bg");
  const image = new Image();

  image.onload = function () {
    bg.style.backgroundImage = `url("${country.image}")`;
  };

  image.onerror = function () {
    bg.style.backgroundImage =
      "linear-gradient(135deg,#10243d,#284969)";
  };

  image.src = country.image;
}

/* Fetch weather for the selected country */
async function handleCountryChange(code) {
  const country = countryData[code];

  if (!country) return;

  lastCountryCode = code;

  document.getElementById("globe-status-text").textContent =
    i18n[currentLang].loading;

  rotateGlobeTo(country.lat, country.lon);
  setLandmarkBackground(country);

  const card = document.getElementById("weather-card");

  card.classList.remove("d-none");

  document.getElementById("country-title").textContent =
    country.name;

  document.getElementById("landmark-tag").textContent =
    country.landmark;

  document.getElementById("weather-desc").textContent =
    i18n[currentLang].loading;

  try {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${country.lat}` +
      `&longitude=${country.lon}` +
      "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m" +
      "&timezone=auto";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();

    /* Ignore old requests if another country was selected */
    if (lastCountryCode !== code) return;

    renderWeather(
      country,
      data.current || data.current_weather || {}
    );

    document.getElementById("globe-status-text").textContent =
      i18n[currentLang].idle;

  } catch (error) {
    console.error("Weather fetch error:", error);

    document.getElementById("globe-status-text").textContent =
      i18n[currentLang].unknown;

    document.getElementById("weather-desc").textContent =
      i18n[currentLang].unknown;
  }
}

/* Map weather codes to visual themes */
function getCondition(code) {
  if (code === 0) return "clear";

  if ([1, 2, 3, 45, 48].includes(code)) {
    return "clouds";
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "snow";
  }

  if ([95, 96, 99].includes(code)) {
    return "storm";
  }

  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]
      .includes(code)
  ) {
    return "rain";
  }

  return "clouds";
}

/* Choose a suitable weather icon */
function conditionIcon(condition, isDay) {
  const icons = {
    clear: isDay ? "fa-sun" : "fa-moon",
    clouds: isDay ? "fa-cloud-sun" : "fa-cloud-moon",
    rain: "fa-cloud-showers-heavy",
    snow: "fa-snowflake",
    storm: "fa-cloud-bolt"
  };

  return icons[condition] || "fa-cloud";
}

/* Update the weather card */
function renderWeather(country, weather) {
  const t = i18n[currentLang];
  const card = document.getElementById("weather-card");

  const code = weather.weather_code ?? weather.weathercode ?? 0;
  const condition = getCondition(Number(code));

  card.classList.remove(
    "weather-clear",
    "weather-clouds",
    "weather-rain",
    "weather-snow",
    "weather-storm"
  );

  card.classList.add(`weather-${condition}`);

  document.getElementById("country-title").textContent =
    country.name;

  document.getElementById("landmark-tag").textContent =
    country.landmark;

  const temperature =
    weather.temperature_2m ?? weather.temperature;

  document.getElementById("weather-temp").textContent =
    temperature != null
      ? `${Math.round(temperature)}°C`
      : "--°C";

  document.getElementById("weather-desc").textContent =
    t[condition] || t.clouds;

  document.getElementById("weather-badge").textContent =
    t[condition] || t.clouds;

  document.getElementById("weather-icon").className =
    `fa-solid ${conditionIcon(condition, weather.is_day !== 0)}`;

  document.getElementById("weather-humidity").textContent =
    weather.relative_humidity_2m != null
      ? `${weather.relative_humidity_2m}%`
      : "--";

  const wind =
    weather.wind_speed_10m ?? weather.windspeed;

  document.getElementById("weather-wind").textContent =
    wind != null
      ? `${Math.round(wind)} km/h`
      : "--";

  const pressure =
    weather.surface_pressure ?? weather.pressure_msl;

  document.getElementById("weather-pressure").textContent =
    pressure != null
      ? `${Math.round(pressure)} hPa`
      : "--";
}

/* Dark and light theme */
function setupThemeToggle() {
  document.getElementById("theme-toggle").addEventListener(
    "click",
    function () {
      const root = document.documentElement;
      const current = root.getAttribute("data-theme");

      const next = current === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", next);

      document.getElementById("theme-icon").className =
        `fa-solid ${next === "dark" ? "fa-moon" : "fa-sun"}`;

      document.getElementById("theme-text").textContent =
        i18n[currentLang][next];

      if (tomSelectInstance) {
        tomSelectInstance.refreshOptions(false);
      }
    }
  );
}

/* Language selection */
function applyLanguage(lang) {
  currentLang = i18n[lang] ? lang : "en";

  const t = i18n[currentLang];

  document.documentElement.lang = currentLang;

  document.documentElement.dir =
    currentLang === "ar" ? "rtl" : "ltr";

  document.getElementById("brand-title").textContent =
    t.brand;

  document
    .getElementById("label-select-country")
    .querySelector("span").textContent = t.select;

  const hint = document.getElementById("field-hint");

  hint.lastChild.textContent = ` ${t.hint}`;

  document.getElementById("hero-title").textContent =
    t.hero;

  document.getElementById("hero-description").textContent =
    t.description;

  document.getElementById("current-conditions").textContent =
    t.conditions;

  document.getElementById("lbl-humidity").textContent =
    t.humidity;

  document.getElementById("lbl-wind").textContent =
    t.wind;

  document.getElementById("lbl-pressure").textContent =
    t.pressure;

  document.getElementById("globe-status-text").textContent =
    t.idle;

  const theme = document.documentElement.getAttribute("data-theme");

  document.getElementById("theme-text").textContent =
    t[theme];

  if (tomSelectInstance) {
    tomSelectInstance.settings.placeholder = t.placeholder;

    tomSelectInstance.control_input.setAttribute(
      "placeholder",
      t.placeholder
    );
  }

  if (lastCountryCode) {
    const country = countryData[lastCountryCode];

    document.getElementById("country-title").textContent =
      country.name;

    document.getElementById("landmark-tag").textContent =
      country.landmark;

    document.getElementById("weather-desc").textContent =
      t[getCondition(0)];
  }
}

/* Start the project */
document.addEventListener("DOMContentLoaded", function () {
  initGlobe();
  setupDropdown();
  setupThemeToggle();

  document.getElementById("lang-select").addEventListener(
    "change",
    function (event) {
      applyLanguage(event.target.value);
    }
  );

  /* Resize the globe with the window */
  window.addEventListener("resize", function () {
    const container = document.getElementById("globe-container");

    if (!renderer || !camera || !container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  });

  /* Default destination: Egypt */
  if (tomSelectInstance) {
    tomSelectInstance.setValue("EG", true);
    handleCountryChange("EG");
  }
});
