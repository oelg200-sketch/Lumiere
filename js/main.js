/* ============================================================
   Lumière Cosmetics — Sitio web
   HTML + CSS + JavaScript (sin frameworks, sin npm)

   Para editar la información del sitio (redes sociales, email,
   teléfono, dirección), busca CONFIG más abajo.
   Para editar los productos, busca PRODUCTS más abajo.
   ============================================================ */

/* ==================== CONFIG DEL SITO ==================== */
/* Cambia estos valores por los de tu negocio */
const CONFIG = {
  name: 'Lumière',
  fullName: 'Lumière Cosmetics',
  email: 'hola@lumiere-cosmetics.com',
  phone: '+503 2000 0000',
  phoneHref: '+5032000000',
  address: 'Centro Comercial Galerías, Local 25, San Salvador, El Salvador',
  social: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
    youtube: 'https://youtube.com',
  },
};

/* ==================== PRODUCTOS ==================== */
/* Edita los productos aquí. price en dólares. */
const PRODUCTS = [
  {
    name: 'Labial Mate Velvet',
    description: 'Acabado mate aterciopelado de larga duración. Fórmula hidratante con vitamina E.',
    price: '$19.90',
    image: 'https://images.pexels.com/photos/17806623/pexels-photo-17806623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Bestseller',
    category: 'Labios',
  },
  {
    name: 'Paleta de Sombras Rose',
    description: '12 tonos pastel mates y satinados. Alta pigmentación y blendado suave.',
    price: '$34.50',
    image: 'https://images.pexels.com/photos/6233285/pexels-photo-6233285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Nuevo',
    category: 'Ojos',
  },
  {
    name: 'Base Líquida Glow',
    description: 'Cobertura natural con efecto luminoso. Disponible en 20 tonos. Libre de parabenos.',
    price: '$26.90',
    image: 'https://images.pexels.com/photos/1776331/pexels-photo-1776331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rostro',
  },
  {
    name: 'Set de Brochas Premium',
    description: '12 brochas de pelo sintético suave. Funda de cuero vegano incluida.',
    price: '$48.00',
    image: 'https://images.pexels.com/photos/29285934/pexels-photo-29285934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Edición limitada',
    category: 'Accesorios',
  },
  {
    name: 'Gloss de Labios Cristal',
    description: 'Brillo transparente con efecto espejo. Sabor a frutos rojos y textura no pegajosa.',
    price: '$15.50',
    image: 'https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Labios',
  },
  {
    name: 'Iluminador Polvo Aura',
    description: 'Destellos rosados con reflejos perlados. Aporta luz natural al rostro.',
    price: '$23.90',
    image: 'https://images.pexels.com/photos/7256074/pexels-photo-7256074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rostro',
  },
  {
    name: 'Colorete Polvo Petal',
    description: 'Rubor en polvo de fusión sedosa. Tonos coral y rosa para un look fresco.',
    price: '$17.90',
    image: 'https://images.pexels.com/photos/7256147/pexels-photo-7256147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rostro',
  },
  {
    name: 'Máscara de Pestañas Volume',
    description: 'Cepillo curvo que separa y multiplica el volumen. Fórmula resistente al agua.',
    price: '$21.90',
    image: 'https://images.pexels.com/photos/8558518/pexels-photo-8558518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Ojos',
  },
];

/* ==================== BENEFICIOS ==================== */
const BENEFITS = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.6.8c0 10.16-5.97 14.24-9.8 16.24"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    title: 'Ingredientes naturales',
    text: 'Formulado con extractos botánicos y aceites esenciales que nutren tu piel.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.43 6.43a13 13 0 0 1-2.67-1.8 2 2 0 0 0-3.46 1.07c-.24 1.29-.6 2.37-1.3 3.27a10.3 10.3 0 0 1-4 3.06 2 2 0 0 0-1.13 1.57c-.14 1.12-.4 2.55-.81 4.5a2 2 0 0 0 2.7 2.26c4.92-2.2 9.19-6.15 10.77-10.75a2 2 0 0 0-.1-1.18Z"/><path d="M4 12c0-2.2.8-4.2 2.1-5.7"/></svg>',
    title: 'Cruelty-free',
    text: 'Nunca testamos en animales. Certificado por Leaping Bunny.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.07s-3.71-3.78-3.71-3.78A1.85 1.85 0 0 0 12 5a1.85 1.85 0 0 0-.29 1.15S10.21 8.73 8 9.93 5 13 5 15a7 7 0 0 0 7 7z"/><path d="M12 22a7 7 0 0 0 6.71-5h-4.48a1 1 0 0 1-.74-.34l-1.16-1.38a1 1 0 0 0-1.54 0l-1.16 1.38a1 1 0 0 1-.74.34H5.29A7 7 0 0 0 12 22z"/></svg>',
    title: 'Hidratación profunda',
    text: 'Ácido hialurónico y vitamina E en cada producto para piel radiante.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    title: 'Dermatológicamente testado',
    text: 'Apto para piel sensible. Sin parabenos, sin sulfatos, sin ftalatos.',
  },
];

/* ==================== ICONOS DE REDES SOCIALES ==================== */
const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.698-2.428-2.895-2.428-4.658 0-3.795 2.762-7.286 7.964-7.286 4.179 0 7.426 2.979 7.426 6.961 0 4.157-2.621 7.499-6.255 7.499-1.222 0-2.371-.635-2.764-1.385l-.751 2.856c-.272 1.047-1.007 2.357-1.501 3.157C9.297 23.532 10.633 24 12.017 24c6.616 0 11.984-5.367 11.984-11.987C23.999 5.367 18.633 0 12.017 0z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
};

const SOCIAL_LIST = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'pinterest', label: 'Pinterest' },
  { key: 'youtube', label: 'YouTube' },
];

/* ==================== ICONOS DE CONTACTO ==================== */
const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
};

/* ==================== RENDER SOCIAL ICONS ==================== */
function renderSocialIcons(container, iconSizeClass) {
  if (!container) return;
  container.innerHTML = SOCIAL_LIST.map(function (s) {
    return '<a href="' + CONFIG.social[s.key] + '" target="_blank" rel="noopener noreferrer" aria-label="' + s.label + '">' + SOCIAL_ICONS[s.key] + '</a>';
  }).join('');
}

/* ==================== RENDER PRODUCTS ==================== */
const CATEGORIES = ['Todos', 'Labios', 'Ojos', 'Rostro', 'Accesorios'];
let activeCategory = 'Todos';

function renderFilters() {
  const container = document.getElementById('filters');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(function (cat) {
    return '<button class="filter-btn' + (cat === activeCategory ? ' active' : '') + '" data-category="' + cat + '">' + cat + '</button>';
  }).join('');

  container.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = activeCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(function (p) { return p.category === activeCategory; });

  grid.innerHTML = filtered.map(function (p) {
    var tagHtml = p.tag ? '<span class="product-tag">' + p.tag + '</span>' : '';
    return '' +
      '<article class="product-card reveal" data-reveal data-reveal-anim="scale">' +
        '<div class="product-image-wrap">' +
          '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" />' +
          '<div class="product-image-overlay"></div>' +
          tagHtml +
          '<button class="product-add">' + ICONS.cart + ' Añadir al carrito</button>' +
        '</div>' +
        '<div class="product-info">' +
          '<p class="product-category">' + p.category + '</p>' +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<p class="product-description">' + p.description + '</p>' +
          '<p class="product-price">' + p.price + '</p>' +
        '</div>' +
      '</article>';
  }).join('');

  // Observe newly added reveal elements
  observeReveals();
}

/* ==================== RENDER BENEFITS ==================== */
function renderBenefits() {
  const grid = document.getElementById('benefitsGrid');
  if (!grid) return;

  grid.innerHTML = BENEFITS.map(function (b) {
    return '' +
      '<div class="benefit-card reveal" data-reveal>' +
        '<span class="benefit-icon">' + b.icon + '</span>' +
        '<h3 class="benefit-title">' + b.title + '</h3>' +
        '<p class="benefit-text">' + b.text + '</p>' +
      '</div>';
  }).join('');

  observeReveals();
}

/* ==================== RENDER CONTACT INFO ==================== */
function renderContactInfo() {
  const items = document.getElementById('contactItems');
  if (!items) return;

  items.innerHTML = '' +
    '<a href="mailto:' + CONFIG.email + '" class="contact-item">' +
      '<span class="contact-item-icon">' + ICONS.mail + '</span>' +
      '<span>' + CONFIG.email + '</span>' +
    '</a>' +
    '<a href="tel:' + CONFIG.phoneHref + '" class="contact-item">' +
      '<span class="contact-item-icon">' + ICONS.phone + '</span>' +
      '<span>' + CONFIG.phone + '</span>' +
    '</a>' +
    '<div class="contact-item">' +
      '<span class="contact-item-icon">' + ICONS.map + '</span>' +
      '<span>' + CONFIG.address + '</span>' +
    '</div>';
}

/* ==================== RENDER MOBILE MENU ==================== */
function renderMobileMenu() {
  const linksContainer = document.querySelector('.mobile-menu-links');
  if (!linksContainer) return;

  var navLinks = document.querySelectorAll('#navLinks a');
  linksContainer.innerHTML = '';
  navLinks.forEach(function (link) {
    var clone = link.cloneNode(true);
    clone.onclick = closeMobileMenu;
    linksContainer.appendChild(clone);
  });

  renderSocialIcons(document.querySelector('.mobile-menu-social'));
}

/* ==================== SCROLL REVEAL ==================== */
var revealObserver = null;

function observeReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (!el.classList.contains('is-visible')) {
      revealObserver.observe(el);
    }
  });
}

/* ==================== NAVBAR SCROLL ==================== */
function setupNavbarScroll() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==================== MOBILE MENU ==================== */
function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  var closeIcon = document.getElementById('closeIcon');

  if (!menu) return;

  var isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    document.body.style.overflow = '';
    if (menuIcon) menuIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
  } else {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (menuIcon) menuIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
  }
}

function closeMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  var closeIcon = document.getElementById('closeIcon');

  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
  if (menuIcon) menuIcon.style.display = 'block';
  if (closeIcon) closeIcon.style.display = 'none';
}

/* ==================== NEWSLETTER FORM ==================== */
function setupNewsletter() {
  var form = document.getElementById('newsletterForm');
  var success = document.getElementById('newsletterSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('newsletterEmail');
    if (email && email.value.trim()) {
      success.classList.add('show');
      email.value = '';
      setTimeout(function () {
        success.classList.remove('show');
      }, 3500);
    }
  });
}

/* ==================== FOOTER YEAR ==================== */
function setFooterYear() {
  var el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', function () {
  renderSocialIcons(document.getElementById('navSocial'));
  renderSocialIcons(document.getElementById('contactSocial'));
  renderSocialIcons(document.getElementById('footerSocial'));
  renderMobileMenu();
  renderFilters();
  renderProducts();
  renderBenefits();
  renderContactInfo();
  setupNavbarScroll();
  setupNewsletter();
  setFooterYear();
  observeReveals();
});
