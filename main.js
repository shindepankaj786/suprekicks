// Automatic Slider
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);


// Show Search Input Toggle
const iconContainer = document.getElementById('iconContainer');
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', function () {
  iconContainer.classList.toggle('active');
  if (iconContainer.classList.contains('active')) {
    searchInput.focus();
  }
});

// Hide search if click outside
document.addEventListener('click', function (e) {
  if (!iconContainer.contains(e.target)) {
    iconContainer.classList.remove('active');
  }
});

// Wishlist Click
document.getElementById('wishlistIcon').addEventListener('click', function () {
  alert("❤️ Wishlist clicked!");
});

// Cart Click
document.getElementById('cartIcon').addEventListener('click', function () {
  alert("🛒 Your cart is currently empty!");
});

// Product card click (optional)

const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  iconContainer.classList.toggle("active");
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
backToTopBtn.textContent = '↑';
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
  // Select denomination
  const denomButtons = document.querySelectorAll('.denomination-btn');
  denomButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      denomButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Quantity controls
  const qtyInput = document.getElementById('quantity');
  document.getElementById('increase').addEventListener('click', () => {
    let value = parseInt(qtyInput.value) || 1;
    qtyInput.value = value + 1;
  });

  document.getElementById('decrease').addEventListener('click', () => {
    let value = parseInt(qtyInput.value) || 1;
    if (value > 1) {
      qtyInput.value = value - 1;
    }
  });


