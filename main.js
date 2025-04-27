// Automatic Slider
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // Change slide every 4 seconds
// Toggle Search Input when 🔍 clicked
document.getElementById('searchIcon').addEventListener('click', function() {
    document.querySelector('.icons').classList.toggle('active');
    document.getElementById('searchInput').focus();
});

// Wishlist Click
document.getElementById('wishlistIcon').addEventListener('click', function() {
    alert("Wishlist clicked!");
});

// Cart Sidebar Toggle
const cartIcon = document.getElementById('cartIcon');
cartIcon.addEventListener('click', () => {
  alert('🛒 Your cart is currently empty!');
});
// Click Product to Add to Cart
const products = document.querySelectorAll('.product-card');
products.forEach(product => {
  product.addEventListener('click', () => {
    alert('✅ Product added to cart!');
  });
});

// Lightbox Popup on Product Image Click
products.forEach(product => {
  product.querySelector('img').addEventListener('click', (e) => {
    e.stopPropagation(); // Stop parent click
    const src = e.target.src;
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${src}"><span class="close-lightbox">✖</span>`;
    document.body.appendChild(lightbox);

    document.querySelector('.close-lightbox').addEventListener('click', () => {
      lightbox.remove();
    });
  });
});

// Hide Navbar on Scroll Down
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-80px'; // hide
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑ Top';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fake Loading Screen
window.addEventListener('load', () => {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = `
    <div class="spinner"></div>
    <h1 class="loading-text">Loading...</h1>
  `;
  document.body.appendChild(loader);
  
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.transform = 'scale(1.2)';
    setTimeout(() => loader.remove(), 600);
  }, 2000); // loader stays for 2s
});
