const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  siteNav.classList.toggle('is-open', !isExpanded);
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('.signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = 'Thanks for your interest! Newsletter sign-up is coming soon.';
  event.currentTarget.reset();
});
