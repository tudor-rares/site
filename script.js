// Calculate duration for McDonald's experience
function calculateDuration(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  return `${years} years, ${months} months, and ${days} days`;
}

// Handle scroll events for the navbar
function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Handle mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
}

// Handle contact form submission
function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  window.location.href = `mailto:rarestudor.dev@gmail.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
}

// Initialize the page
function init() {
  // Set current year in the footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Calculate and display McDonald's duration
  document.getElementById('mcdonaldsDuration').textContent = calculateDuration('2023-11-01');
  
  // Set up event listeners
  window.addEventListener('scroll', handleScroll);
  document.getElementById('menuToggle').addEventListener('click', toggleMobileMenu);
  document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);