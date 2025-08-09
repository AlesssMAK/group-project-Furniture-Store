const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = mobileMenu.querySelector('.modal-window-close-btn');
const mobileLinks = mobileMenu.querySelectorAll('a');
const buyBtns = document.querySelectorAll('.btn-buy, .btn-buy-mobile'); 
const body = document.body;


function openMenu() {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  burgerBtn.setAttribute('aria-expanded', 'true');
  body.style.overflow = 'hidden';
}


function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burgerBtn.setAttribute('aria-expanded', 'false');
  body.style.overflow = '';
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
  link.addEventListener('click', () => closeMenu());
});


buyBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
    const furnitureSection = document.querySelector('#furniture') || document.querySelector('#furniture-list');
    if (furnitureSection) {
      furnitureSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const logoLink = document.querySelector('.header-logo');
if (logoLink) {
  logoLink.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'index.html';
    }
  });
}
