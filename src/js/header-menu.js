// console.log("menu");
 const burgerBtn = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = mobileMenu.querySelector('.close');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) closeMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
