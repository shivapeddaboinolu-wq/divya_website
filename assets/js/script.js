// NAV scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Form submit
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.querySelector('.form-input[type="text"]').value || 'there';
  const service = document.querySelector('select.form-input').value;
  const msg = service
    ? `Hi Divya! I'm ${name} and I'd like to enquire about ${service}.`
    : `Hi Divya! I'm ${name} and I'd like to book an appointment.`;
  window.open(`https://wa.me/919391208530?text=${encodeURIComponent(msg)}`, '_blank');
}

// Mobile menu toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const book = document.querySelector('.nav-book');
  const isOpen = links.style.display === 'flex';
  if (isOpen) {
    links.style.display = '';
    book.style.display = '';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:70px;left:0;right:0;background:#0c0803;padding:1.5rem 5%;gap:1.5rem;border-bottom:0.5px solid rgba(201,168,76,0.2);';
    book.style.cssText = 'display:block;margin:0 5% 1.5rem;text-align:center;';
  }
}
