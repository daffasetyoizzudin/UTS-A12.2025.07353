
const HERO_SLIDES = [
  {
    kicker: 'TEMUKAN SUARAMU',
    headline: 'SETIAP NADA\nPUNYA CERITA.',
    description: 'Jelajahi alat musik premium yang dirancang untuk menginspirasi kreativitas Anda dan meningkatkan setiap penampilan.',
    modelTag: 'AG-01 NATURAL SERIES',
    image: '../assets/hero-acoustic.jpg',
    alt: 'DAZ Acoustic Guitar AG-01 Natural Finish'
  },
  {
    kicker: 'PRESISI PANGGUNG & STUDIO',
    headline: 'KUASAI SETIAP\nFREKUENSI.',
    description: 'Gitar elektrik solid body dan pickup custom-wound yang dibangun untuk ekspresi panggung yang dinamis.',
    modelTag: 'EG-02 CUSTOM PRO',
    image: '../assets/cat-guitars.jpg',
    alt: 'DAZ Electric Guitar EG-02 Sunburst Finish'
  },
  {
    kicker: 'REKAM DENGAN KEJERNIHAN STUDIO',
    headline: 'DENGAR KEBENARAN\nDI DALAM MIXMU.',
    description: 'Studio monitor dan mikrofon condenser berkualitas referensi yang dirancang untuk akurasi akustik sempurna.',
    modelTag: 'DM-100 STUDIO SERIES',
    image: '../assets/cat-microphones.jpg',
    alt: 'DAZ Professional Condenser Microphone DM-100'
  }
];

const PRODUCTS_DATA = [
  // --- NEW ARRIVALS ---
  {
    id: 'ag-01-new',
    name: 'DAZ Acoustic Guitar AG-01',
    category: 'Guitars',
    price: 1250000,
    badge: 'New',
    section: 'new',
    image: '../assets/hero-acoustic.jpg',
    description: 'Full-size dreadnought acoustic guitar featuring a solid Sitka spruce top and mahogany back for warm, balanced projection.',
    specs: ['Solid Sitka Spruce Top', 'Mahogany Neck & Back', 'Bone Nut & Saddle']
  },
  {
    id: 'dm-05-new',
    name: 'Studio Monitor DM-05',
    category: 'Studio Monitors',
    price: 2450000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-monitors.jpg',
    description: '5-inch bi-amplified nearfield studio reference monitor delivering flat frequency response and tight low-end definition.',
    specs: ['70W Class-D Bi-Amp', '43Hz – 24kHz Response', 'Balanced XLR & TRS Inputs']
  },
  {
    id: 'dk-61-new',
    name: 'DAZ Digital Keyboard DK-61',
    category: 'Keyboards',
    price: 1850000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-keyboards.jpg',
    description: '61-key velocity-sensitive portable synthesizer and stage keyboard with acoustic piano engine and USB-MIDI connectivity.',
    specs: ['61 Velocity Keys', '128-Note Polyphony', 'USB-MIDI & Sustain Pedal Jack']
  },
  {
    id: 'dm-100-new',
    name: 'Professional Microphone DM-100',
    category: 'Microphones',
    price: 750000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-microphones.jpg',
    description: 'Large-diaphragm cardioid condenser microphone ideal for studio vocals, acoustic instruments, and broadcast production.',
    specs: ['Cardioid Polar Pattern', 'Low Self-Noise (14 dBA)', 'Shockmount Included']
  },
  {
    id: 'dd-08-new',
    name: 'Acoustic Drum Kit DD-08',
    category: 'Drums',
    price: 4650000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-drums.jpg',
    description: 'Complete 5-piece birch shell drum set engineered for punchy attack both in live venues and recording rooms.',
    specs: ['6-Ply Birch Shells', 'Chrome Hardware Pack', '22" Kick Drum Configuration']
  },

  {
    id: 'dh-02-new',
    name: 'Headphone Monitor DH-02',
    category: 'Headphones',
    price: 850000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-headphones.jpg',
    description: 'Headphone studio closed-back dengan driver neodymium 45mm untuk monitoring presisi dengan isolasi suara tinggi.',
    specs: ['Driver Neodymium 45mm', 'Respon 18Hz – 26kHz', 'Kabel Detachable 3m']
  },
  {
    id: 'eg-03-new',
    name: 'Electric Guitar EG-03 Sunburst',
    category: 'Guitars',
    price: 3250000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-guitars.jpg',
    description: 'Gitar elektrik semi-hollow body dengan finishing sunburst klasik, cocok untuk jazz, blues, dan rock.',
    specs: ['Maple Top / Mahogany Body', 'Humbucker Alnico II', '24 Fret Rosewood']
  },
  {
    id: 'dm-200-new',
    name: 'Condenser Microphone DM-200',
    category: 'Microphones',
    price: 1150000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-microphones.jpg',
    description: 'Mikrofon condenser small-diaphragm untuk merekam instrumen akustik, drum overhead, dan vokal live.',
    specs: ['Polar Pattern Cardioid', 'SPL Maksimum 138 dB', 'Pad -10dB & High-Pass Filter']
  },
  {
    id: 'dd-04-new',
    name: 'Electronic Drum Kit DE-04',
    category: 'Drums',
    price: 5950000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-drums.jpg',
    description: 'Drum elektronik 9-pad dengan modul suara 610 preset, cocok untuk latihan di rumah tanpa kebisingan.',
    specs: ['9 Mesh Pad', 'Modul 610 Voice', 'USB MIDI & Audio Out']
  },
  {
    id: 'dm-07-new',
    name: 'Studio Monitor DM-07 Pair',
    category: 'Studio Monitors',
    price: 4200000,
    badge: 'New',
    section: 'new',
    image: '../assets/cat-monitors.jpg',
    description: 'Pasangan studio monitor 7-inci bi-amplified dengan DSP room correction untuk mixing yang akurat.',
    specs: ['100W Bi-Amplified', 'DSP Room Correction', 'XLR / TRS / RCA Input']
  },

  // --- POPULAR PICKS ---
  {
    id: 'ag-01-pop',
    name: 'Acoustic Guitar AG-01',
    category: 'Guitars',
    price: 1250000,
    badge: 'Best Seller',
    section: 'popular',
    image: '../assets/story-headstock.jpg',
    description: 'Our signature natural-finish dreadnought acoustic trusted by singer-songwriters and session guitarists alike.',
    specs: ['Natural Satin Neck', 'Die-Cast Chrome Tuners', 'Dreadnought Body']
  },
  {
    id: 'eg-02-pop',
    name: 'Electric Guitar EG-02',
    category: 'Guitars',
    price: 2950000,
    badge: 'Best Seller',
    section: 'popular',
    image: '../assets/cat-guitars.jpg',
    description: 'Versatile double-cutaway solid-body electric guitar equipped with Alnico V pickups and coil-split switching.',
    specs: ['Alder Body / Maple Neck', 'Alnico V Humbuckers', '22 Medium Jumbo Frets']
  },
  {
    id: 'eb-04-pop',
    name: 'Electric Bass EB-04',
    category: 'Guitars',
    price: 2650000,
    badge: '',
    section: 'popular',
    image: '../assets/prod-bass-eb04.jpg',
    description: '4-string active electric bass delivering deep, articulate low frequencies and fast neck playability.',
    specs: ['34" Scale Length', 'Active 3-Band EQ', 'Split-Coil & Single Pickups']
  },
  {
    id: 'dh-01-pop',
    name: 'Professional Studio Headphones DH-01',
    category: 'Headphones',
    price: 950000,
    badge: 'Best Seller',
    section: 'popular',
    image: '../assets/cat-headphones.jpg',
    description: 'Closed-back dynamic monitoring headphones offering superior acoustic isolation and wide stereo imaging.',
    specs: ['50mm Neodymium Drivers', '15Hz – 28kHz Range', 'Detachable Coiled Cable']
  },
  {
    id: 'dk-88-pop',
    name: 'Stage Digital Piano DP-88',
    category: 'Keyboards',
    price: 5250000,
    badge: '',
    section: 'popular',
    image: '../assets/prod-piano-dp88.jpg',
    description: 'Full 88-key weighted hammer-action stage piano with authentic concert grand samples.',
    specs: ['88 Graded Hammer Keys', 'Stereo Line Outputs', 'Triple Pedal Support']
  },
  {
    id: 'eb-05-pop',
    name: 'Bass Guitar EB-05 Active',
    category: 'Guitars',
    price: 3150000,
    badge: 'Best Seller',
    section: 'popular',
    image: '../assets/prod-bass-eb04.jpg',
    description: 'Bass 5-string aktif dengan preamp 3-band dan pickup humbucker untuk genre metal hingga funk.',
    specs: ['5 String Active Bass', 'Preamp 3-Band EQ', '35" Scale Length']
  },
  {
    id: 'dk-49-pop',
    name: 'MIDI Controller DK-49',
    category: 'Keyboards',
    price: 1350000,
    badge: '',
    section: 'popular',
    image: '../assets/cat-keyboards.jpg',
    description: '49-key MIDI controller dengan pad drum 8 buah, knob assignable, dan konektivitas USB plug-and-play.',
    specs: ['49 Semi-Weighted Keys', '8 RGB Drum Pad', 'USB Plug & Play']
  },
  {
    id: 'dh-03-pop',
    name: 'Wireless Headphone DH-03',
    category: 'Headphones',
    price: 1250000,
    badge: 'Best Seller',
    section: 'popular',
    image: '../assets/headphone2.jpg',
    description: 'Headphone wireless Bluetooth 5.0 dengan noise cancelling aktif dan baterai tahan 30 jam untuk musisi mobile.',
    specs: ['Bluetooth 5.0 ANC', 'Baterai 30 Jam', 'Lipat Portabel']
  },
  {
    id: 'dm-105-pop',
    name: 'Dynamic Microphone DM-105',
    category: 'Microphones',
    price: 450000,
    badge: 'Best Seller',
    section: 'popular',
    image: '../assets/cat-microphones.jpg',
    description: 'Mikrofon dynamic cardioid andalan untuk vokal live, podcast, dan perekaman instrumen amplifier.',
    specs: ['Dynamic Cardioid', 'SPL Tinggi 148 dB', 'Kabel XLR 5m Termasuk']
  },
  {
    id: 'dd-10-pop',
    name: 'Drum Pad Compact DP-10',
    category: 'Drums',
    price: 2350000,
    badge: '',
    section: 'popular',
    image: '../assets/cat-drums.jpg',
    description: 'Pad drum elektronik portabel 10-pad untuk latihan dan pertunjukan solo dengan built-in speaker.',
    specs: ['10 Velocity-Sensitive Pad', 'Built-in Speaker 5W', 'Beterei & Adaptor']
  }
];

/* --------------------------------------------------------------------------
   2. UTILITAS FORMAT RUPIAH & STATE APLIKASI
   -------------------------------------------------------------------------- */
const STORAGE_KEY = 'daz_music_cart_v1';

function formatRupiah(number) {
  return 'Rp' + Number(number).toLocaleString('id-ID');
}

let cartState = loadCartFromStorage();
let currentHeroSlide = 0;
let activeCategoryFilter = 'All';

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Could not read cart from localStorage:', err);
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
  } catch (err) {
    console.warn('Could not save cart to localStorage:', err);
  }
}

/* --------------------------------------------------------------------------
   3. RENDER PRODUK & CAROUSEL
   -------------------------------------------------------------------------- */
function createProductCardHTML(product) {
  const badgeClass = product.badge === 'Best Seller' ? 'badge-bestseller' : 'badge-new';
  const badgeMarkup = product.badge
    ? `<span class="product-badge ${badgeClass}">${product.badge}</span>`
    : '';

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${badgeMarkup}
      </div>
      <div class="product-card-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${formatRupiah(product.price)}</p>
        <div class="product-card-actions">
          <button type="button" class="btn-card-detail" data-action="view-details" data-id="${product.id}">
            View Details
          </button>
          <button type="button" class="btn-card-cart" data-action="add-to-cart" data-id="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalogues() {
  const newArrivalsTrack = document.getElementById('newArrivalsTrack');
  const popularPicksTrack = document.getElementById('popularPicksTrack');
  const filterBanner = document.getElementById('activeFilterBanner');
  const filterText = document.getElementById('activeFilterText');

  const filterFn = (item) =>
    activeCategoryFilter === 'All' || item.category.toLowerCase() === activeCategoryFilter.toLowerCase();

  const newItems = PRODUCTS_DATA.filter((p) => p.section === 'new' && filterFn(p));
  const popularItems = PRODUCTS_DATA.filter((p) => p.section === 'popular' && filterFn(p));

  // Jika kategori spesifik dipilih dan salah satu daftar kosong, tampilkan semua produk dari kategori tersebut
  const fallbackCategoryItems = PRODUCTS_DATA.filter(filterFn);

  newArrivalsTrack.innerHTML = (newItems.length ? newItems : fallbackCategoryItems)
    .map(createProductCardHTML)
    .join('');

  popularPicksTrack.innerHTML = (popularItems.length ? popularItems : fallbackCategoryItems)
    .map(createProductCardHTML)
    .join('');

  if (activeCategoryFilter !== 'All') {
    filterBanner.hidden = false;
    filterText.innerHTML = `Filtering instruments by category: <strong>${activeCategoryFilter}</strong>`;
  } else {
    filterBanner.hidden = true;
  }

  renderCarouselDots('newArrivalsTrack', 'newArrivalsDots');
  renderCarouselDots('popularPicksTrack', 'popularPicksDots');
}

function renderCarouselDots(trackId, dotsContainerId) {
  const track = document.getElementById(trackId);
  const dotsWrap = document.getElementById(dotsContainerId);
  if (!track || !dotsWrap) return;

  const cards = track.querySelectorAll('.product-card');
  const count = Math.max(1, Math.min(cards.length, 4));
  dotsWrap.innerHTML = Array.from({ length: count })
    .map((_, idx) => `<span class="carousel-dot ${idx === 0 ? 'active' : ''}"></span>`)
    .join('');
}

function initCarousels() {
  document.addEventListener('click', (e) => {
    const arrowBtn = e.target.closest('.carousel-arrow');
    if (!arrowBtn) return;

    const targetId = arrowBtn.getAttribute('data-carousel-target');
    const dir = arrowBtn.getAttribute('data-dir');
    const track = document.getElementById(targetId);
    if (!track) return;

    const card = track.querySelector('.product-card');
    const step = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({
      left: dir === 'next' ? step : -step,
      behavior: 'smooth'
    });
  });

  // Keyboard arrow support saat fokus pada track carousel
  ['newArrivalsTrack', 'popularPicksTrack'].forEach((id) => {
    const track = document.getElementById(id);
    if (!track) return;

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        track.scrollBy({ left: 320, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        track.scrollBy({ left: -320, behavior: 'smooth' });
      }
    });

    track.addEventListener(
      'scroll',
      () => {
        const dotsId = id === 'newArrivalsTrack' ? 'newArrivalsDots' : 'popularPicksDots';
        const dots = document.querySelectorAll(`#${dotsId} .carousel-dot`);
        if (!dots.length) return;
        const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
        const ratio = Math.min(1, Math.max(0, track.scrollLeft / maxScroll));
        const activeIdx = Math.round(ratio * (dots.length - 1));
        dots.forEach((d, idx) => d.classList.toggle('active', idx === activeIdx));
      },
      { passive: true }
    );
  });
}

/* --------------------------------------------------------------------------
   4. ADVANCED PARALLAX ENGINE (requestAnimationFrame + Reduced Motion)
   -------------------------------------------------------------------------- */
function initParallaxEngine() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const parallaxNodes = Array.from(document.querySelectorAll('[data-parallax]'));
  const heroSection = document.getElementById('hero');
  const heroScaleContainer = document.getElementById('heroScaleContainer');

  let ticking = false;

  function updateParallax() {
    ticking = false;

    // Hormati preferensi prefers-reduced-motion pengguna
    if (prefersReducedMotion.matches) {
      parallaxNodes.forEach((el) => {
        el.style.transform = '';
      });
      if (heroScaleContainer) {
        heroScaleContainer.style.transform = '';
        heroScaleContainer.style.opacity = '';
      }
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    // Gunakan faktor lebih ringan pada layar smartphone agar tetap 60fps & rapi
    const mobileFactor = window.innerWidth < 768 ? 0.35 : 1;

    // 1. Efek Scale-out / Zoom-out halus saat Hero meninggalkan viewport
    if (heroSection && heroScaleContainer) {
      const heroHeight = heroSection.offsetHeight;
      if (scrollY <= heroHeight) {
        const progress = Math.min(1, Math.max(0, scrollY / heroHeight));
        const scaleValue = 1 - progress * 0.06 * mobileFactor;
        const opacityValue = 1 - progress * 0.35 * mobileFactor;
        heroScaleContainer.style.transform = `scale(${scaleValue.toFixed(4)})`;
        heroScaleContainer.style.opacity = opacityValue.toFixed(3);
      }
    }

    // 2. Pergerakan Berlapis untuk Elemen [data-parallax="slow|medium|fast"]
    parallaxNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      // Hanya hitung jika elemen berada di sekitar viewport
      if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;

      const speedAttr = parseFloat(node.getAttribute('data-speed')) || 0.15;
      const centerOffset = rect.top + rect.height * 0.5 - viewportHeight * 0.5;
      const translateY = -centerOffset * speedAttr * mobileFactor;

      node.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    });
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  updateParallax();
}

/* --------------------------------------------------------------------------
   5. INTERSECTION OBSERVER UNTUK SCROLL REVEAL
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. HERO SLIDER INTERAKTIF
   -------------------------------------------------------------------------- */
function updateHeroSlide(index) {
  currentHeroSlide = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
  const slide = HERO_SLIDES[currentHeroSlide];

  const kickerEl = document.getElementById('heroKicker');
  const headlineEl = document.getElementById('heroHeadline');
  const descEl = document.getElementById('heroDescription');
  const modelEl = document.getElementById('heroModelTag');
  const imageEl = document.getElementById('heroSlideImage');
  const dots = document.querySelectorAll('#heroIndicators .hero-dot');

  if (imageEl) {
    imageEl.style.opacity = '0.25';
    setTimeout(() => {
      imageEl.src = slide.image;
      imageEl.alt = slide.alt;
      imageEl.style.opacity = '1';
    }, 160);
  }

  if (kickerEl) kickerEl.textContent = slide.kicker;
  if (headlineEl) headlineEl.innerHTML = slide.headline.replace('\n', '<br />');
  if (descEl) descEl.textContent = slide.description;
  if (modelEl) modelEl.textContent = slide.modelTag;

  dots.forEach((dot, idx) => {
    const isActive = idx === currentHeroSlide;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-selected', String(isActive));
  });
}

function initHeroSlider() {
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const indicators = document.getElementById('heroIndicators');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateHeroSlide(currentHeroSlide - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateHeroSlide(currentHeroSlide + 1));
  }
  if (indicators) {
    indicators.addEventListener('click', (e) => {
      const dot = e.target.closest('.hero-dot');
      if (!dot) return;
      const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
      if (!Number.isNaN(slideIdx)) updateHeroSlide(slideIdx);
    });
  }
}

/* --------------------------------------------------------------------------
   7. KERANJANG BELANJA (ADD TO CART, VALIDASI, DRAWER, LOCALSTORAGE)
   -------------------------------------------------------------------------- */
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  const validQty = parseInt(quantity, 10);

  if (!product || Number.isNaN(validQty) || validQty < 1) {
    return;
  }

  const existing = cartState.find((item) => item.id === product.id);
  if (existing) {
    existing.qty = Math.min(99, existing.qty + validQty);
  } else {
    cartState.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: Math.min(99, validQty)
    });
  }

  saveCartToStorage();
  renderCartUI();
  openCartDrawer();
}

function updateCartItemQty(productId, delta) {
  const itemIndex = cartState.findIndex((item) => item.id === productId);
  if (itemIndex === -1) return;

  const newQty = cartState[itemIndex].qty + delta;
  if (newQty <= 0) {
    cartState.splice(itemIndex, 1);
  } else if (newQty <= 99) {
    cartState[itemIndex].qty = newQty;
  }

  saveCartToStorage();
  renderCartUI();
}

function removeCartItem(productId) {
  cartState = cartState.filter((item) => item.id !== productId);
  saveCartToStorage();
  renderCartUI();
}

function clearCart() {
  cartState = [];
  saveCartToStorage();
  renderCartUI();
}

function renderCartUI() {
  const badge = document.getElementById('cartCountBadge');
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalValue');
  const demoNotice = document.getElementById('cartDemoNotice');

  if (demoNotice) demoNotice.hidden = true;

  const totalCount = cartState.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartState.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (badge) badge.textContent = String(totalCount);
  if (subtotalEl) subtotalEl.textContent = formatRupiah(subtotal);

  if (!container) return;

  if (cartState.length === 0) {
    container.innerHTML = `<p class="cart-empty-msg">Your shopping cart is currently empty.</p>`;
    return;
  }

  container.innerHTML = cartState
    .map(
      (item) => `
      <div class="cart-item" data-cart-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-price">${formatRupiah(item.price)} &times; ${item.qty}</p>
          <div class="cart-qty-controls">
            <button type="button" class="qty-btn" data-cart-action="dec" data-id="${item.id}" aria-label="Decrease quantity">&minus;</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" data-cart-action="inc" data-id="${item.id}" aria-label="Increase quantity">&plus;</button>
          </div>
        </div>
        <button type="button" class="cart-remove-btn" data-cart-action="remove" data-id="${item.id}">Remove</button>
      </div>
    `
    )
    .join('');
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;
  backdrop.hidden = false;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    backdrop.hidden = true;
  }, 300);
}

/* --------------------------------------------------------------------------
   8. PRODUCT DETAIL MODAL
   -------------------------------------------------------------------------- */
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const backdrop = document.getElementById('productModalBackdrop');
  const grid = document.getElementById('modalContentGrid');
  if (!backdrop || !grid) return;

  grid.innerHTML = `
    <div class="modal-img-box">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="modal-info-box">
      <span class="modal-category">${product.category}</span>
      <h3 class="modal-title" id="modalProductTitle">${product.name}</h3>
      <p class="modal-price">${formatRupiah(product.price)}</p>
      <p class="modal-desc">${product.description}</p>
      <ul class="modal-specs">
        ${product.specs.map((s) => `<li>&bull; ${s}</li>`).join('')}
      </ul>
      <button type="button" class="btn btn-primary btn-full" data-action="modal-add-cart" data-id="${product.id}">
        Add to Cart — ${formatRupiah(product.price)}
      </button>
    </div>
  `;

  backdrop.hidden = false;
}

function closeProductModal() {
  const backdrop = document.getElementById('productModalBackdrop');
  if (backdrop) backdrop.hidden = true;
}

/* --------------------------------------------------------------------------
   9. PENCARIAN PRODUK, FILTER KATEGORI, NAVBAR, & EVENT DELEGATION
   -------------------------------------------------------------------------- */
function initInteractions() {
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchCloseBtn = document.getElementById('searchCloseBtn');

  // Scroll state untuk Navbar dan tombol Back-to-top
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY || window.pageYOffset;
      if (siteHeader) siteHeader.classList.toggle('is-scrolled', y > 40);
      if (backToTopBtn) backToTopBtn.classList.toggle('is-visible', y > 500);
    },
    { passive: true }
  );

  // Mobile Menu Hamburger
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('is-active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        mobileMenuBtn.classList.remove('is-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Pencarian Produk Real-Time
  if (searchToggleBtn && searchPanel && searchInput) {
    searchToggleBtn.addEventListener('click', () => {
      const isHidden = searchPanel.hidden;
      searchPanel.hidden = !isHidden;
      searchToggleBtn.setAttribute('aria-expanded', String(isHidden));
      if (isHidden) searchInput.focus();
    });

    searchCloseBtn.addEventListener('click', () => {
      searchPanel.hidden = true;
      searchToggleBtn.setAttribute('aria-expanded', 'false');
    });

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '';
        return;
      }

      const matches = PRODUCTS_DATA.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p style="color: var(--color-light-blue); font-size: 0.9rem;">No instruments found matching "${searchInput.value}".</p>`;
        return;
      }

      searchResults.innerHTML = matches
        .map(
          (item) => `
          <div class="search-result-item" data-action="view-details" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" />
            <div class="search-result-meta">
              <h4>${item.name}</h4>
              <span>${formatRupiah(item.price)}</span>
            </div>
          </div>
        `
        )
        .join('');
    });
  }

  // Event Delegation terpusat untuk semua tombol Kartu, Modal, Keranjang, dan Kategori
  document.addEventListener('click', (e) => {
    // 1. View Details / Add to Cart
    const actionBtn = e.target.closest('[data-action]');
    if (actionBtn) {
      const action = actionBtn.getAttribute('data-action');
      const id = actionBtn.getAttribute('data-id');

      if (action === 'add-to-cart') {
        addToCart(id, 1);
      } else if (action === 'view-details') {
        openProductModal(id);
      } else if (action === 'modal-add-cart') {
        addToCart(id, 1);
        closeProductModal();
      }
      return;
    }

    // 2. Kontrol di dalam Cart Drawer
    const cartBtn = e.target.closest('[data-cart-action]');
    if (cartBtn) {
      const action = cartBtn.getAttribute('data-cart-action');
      const id = cartBtn.getAttribute('data-id');
      if (action === 'inc') updateCartItemQty(id, 1);
      if (action === 'dec') updateCartItemQty(id, -1);
      if (action === 'remove') removeCartItem(id);
      return;
    }

    // 3. Filter Kategori dari Category Strip atau Footer
    const categoryTile = e.target.closest('.category-tile');
    if (categoryTile) {
      const selectedCategory = categoryTile.getAttribute('data-category');
      if (selectedCategory) {
        activeCategoryFilter = selectedCategory;
        document.querySelectorAll('.category-tile').forEach((tile) => {
          tile.classList.toggle('is-active', tile === categoryTile);
        });
        renderCatalogues();
      }
      return;
    }

    const footerCatLink = e.target.closest('[data-footer-cat]');
    if (footerCatLink) {
      activeCategoryFilter = footerCatLink.getAttribute('data-footer-cat');
      renderCatalogues();
      return;
    }
  });

  // Reset Kategori
  const resetCategoryBtn = document.getElementById('resetCategoryBtn');
  if (resetCategoryBtn) {
    resetCategoryBtn.addEventListener('click', () => {
      activeCategoryFilter = 'All';
      document.querySelectorAll('.category-tile').forEach((tile) => tile.classList.remove('is-active'));
      renderCatalogues();
    });
  }

  // Buka / Tutup Cart Drawer
  document.getElementById('cartToggleBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartBackdrop')?.addEventListener('click', closeCartDrawer);
  document.getElementById('clearCartBtn')?.addEventListener('click', clearCart);

  // Tombol Checkout Demo
  document.getElementById('checkoutDemoBtn')?.addEventListener('click', () => {
    const notice = document.getElementById('cartDemoNotice');
    if (!notice) return;
    notice.hidden = false;
    if (cartState.length === 0) {
      notice.textContent = 'Demo Mode: Please add at least one instrument to your cart first.';
    } else {
      notice.textContent =
        'Demo Mode: Checkout simulation active. Connect a backend payment gateway to process live orders.';
    }
  });

  // Tutup Modal Detail Produk
  document.getElementById('closeModalBtn')?.addEventListener('click', closeProductModal);
  document.getElementById('productModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'productModalBackdrop') closeProductModal();
  });

  // Tutup Drawer / Modal dengan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
    }
  });

  // Tombol Back to Top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Tahun otomatis di Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

/* --------------------------------------------------------------------------
   10. VIDEO HERO — MUTE TOGGLE & SCROLL VOLUME FADE
   -------------------------------------------------------------------------- */
function initHeroVideo() {
  const video   = document.getElementById('heroBgVideo');
  const muteBtn = document.getElementById('heroMuteBtn');
  const hero    = document.getElementById('hero');
  if (!video || !muteBtn || !hero) return;

  // ── Tombol Mute / Unmute ──────────────────────────────────────────────────
  muteBtn.addEventListener('click', () => {
    const nowMuted = !video.muted;
    video.muted = nowMuted;

    if (!nowMuted) {
      // Baru di-unmute: set volume sesuai posisi scroll saat ini
      video.volume = calcVolumeFromScroll();
      muteBtn.classList.add('is-unmuted');
      muteBtn.setAttribute('aria-label', 'Matikan suara video');
    } else {
      muteBtn.classList.remove('is-unmuted');
      muteBtn.setAttribute('aria-label', 'Aktifkan suara video');
    }
  });

  // ── Scroll Volume Fade ────────────────────────────────────────────────────
  function calcVolumeFromScroll() {
    const heroH   = hero.offsetHeight;          // tinggi hero section
    const scrollY = window.scrollY;
    // Volume penuh saat scrollY = 0, habis saat scrollY = heroH
    const ratio   = Math.max(0, 1 - scrollY / heroH);
    return parseFloat(ratio.toFixed(3));
  }

  let scrollRafId = null;
  function onScroll() {
    if (scrollRafId) return;
    scrollRafId = requestAnimationFrame(() => {
      scrollRafId = null;
      if (!video.muted) {
        const vol = calcVolumeFromScroll();
        video.volume = vol;
        // Re-mute otomatis jika sudah benar-benar habis
        if (vol === 0) {
          video.muted = true;
          muteBtn.classList.remove('is-unmuted');
          muteBtn.setAttribute('aria-label', 'Aktifkan suara video');
        }
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}


document.addEventListener('DOMContentLoaded', () => {
  renderCatalogues();
  renderCartUI();
  initCarousels();
  initHeroSlider();
  initParallaxEngine();
  initScrollReveal();
  initInteractions();
  initHeroVideo();
});