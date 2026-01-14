// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== Contact Form (Basic Handling) =====
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Thank you! Your message has been sent (demo).');
    form.reset();
  });
}

