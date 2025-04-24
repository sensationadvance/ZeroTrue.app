// Simple smooth-scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Placeholder for form submission
document.querySelector('.signup-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll be in touch soon.');
});
