// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// CTA button counter
const ctaBtn = document.getElementById('ctaBtn');
const counter = document.getElementById('counter');
let count = 0;

ctaBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
