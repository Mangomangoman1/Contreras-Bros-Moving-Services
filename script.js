const header = document.querySelector('.site-header');

function syncHeaderState() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}

syncHeaderState();
window.addEventListener('scroll', syncHeaderState, { passive: true });
