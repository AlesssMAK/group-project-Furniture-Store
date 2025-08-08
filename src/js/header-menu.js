const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = mobileMenu.querySelector('.modal-window-close-btn');
const mobileLinks = mobileMenu.querySelectorAll('a');
const body = document.body;

// Відкриття меню
function openMenu() {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  burgerBtn.setAttribute('aria-expanded', 'true');
  body.style.overflow = 'hidden'; // блокування скролу сторінки
}

// Закриття меню
function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burgerBtn.setAttribute('aria-expanded', 'false');
  body.style.overflow = ''; // розблокування скролу сторінки
}

// Відкриття/закриття меню по кнопках
burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Закриття меню по кліку за межами меню
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) closeMenu();
});

// Закриття меню по клавіші Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
});

// Плавний скрол і закриття меню по кліку на посиланнях у меню
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();  // просто закриваємо меню, без блокування переходу
  });
});

// mobileLinks.forEach(link => {
//   // link.addEventListener('click', e => {
//     // e.preventDefault();

//     const href = link.getAttribute('href');

//     if (!href) return;

//     if (href === 'index.html' || href === '/' || href === '#') {
//       // Якщо логотип або головна сторінка — просто перейти
//       closeMenu();
//       window.location.href = href;
//       return;
//     }

//     if (href.startsWith('#')) {
//       const target = document.querySelector(href);
//       if (target) {
//         closeMenu();
//         setTimeout(() => {
//           target.scrollIntoView({ behavior: 'smooth' });
//         }, 300); // Затримка, щоб меню закрилось
//       }
//     } else {
//       // Якщо посилання веде кудись ще — можна додати обробку
//       closeMenu();
//       window.location.href = href;
//     }
//   });
// });

// Плавний скрол по кліку на логотип
const logoLink = document.querySelector('.header-logo');
if (logoLink) {
  logoLink.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Якщо секції hero немає, то просто перейти на головну
      window.location.href = 'index.html';
    }
  });
}

// Плавний скрол по кліку на кнопку "До покупок"
const buyBtn = document.querySelector('.buy-btn'); // Вкажи правильний селектор для кнопки
if (buyBtn) {
  buyBtn.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
    const furnitureSection = document.querySelector('#furniture');
    if (furnitureSection) {
      furnitureSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}