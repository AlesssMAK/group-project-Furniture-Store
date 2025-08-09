import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// підключаємо бібліотеку зірок (база)
import 'css-star-rating/css/star-rating.css';

import { fetchFeedbacks } from './furniture-store-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const feedbackList = document.getElementById('feedback-list');

// === ОКРУГЛЕННЯ ЗА ПРАВИЛОМ ===
// 3.3–3.7 -> 3.5; 3.8–4.2 -> 4; решта — до найближчого 0.5
function normalizeRating(rate) {
  const r = Math.max(0, Math.min(5, Number(rate) || 0));
  if (r >= 3.3 && r <= 3.7) return 3.5;
  if (r >= 3.8 && r <= 4.2) return 4;
  return Math.round(r * 2) / 2;
}

// === Розмітка, яку очікує css-star-rating ===
function starMarkup() {
  return `
    <div class="star-container">
      ${Array.from({ length: 5 })
        .map(
          () => `
          <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
          </div>`
        )
        .join('')}
    </div>`;
}

// === Картка відгуку ===
function createFeedbackCard({ name, descr, rate }) {
  const rounded = normalizeRating(rate);
  const value = Math.floor(rounded);      // 0..5
  const half = rounded % 1 === 0.5;       // чи є половинка

  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <div class="feedback-card">
      <div
        class="rating star-icon medium direction-ltr label-hidden ${half ? 'half' : ''} value-${value}"
        aria-label="Рейтинг ${rounded} з 5"
      >
        <div class="label-value" aria-hidden="true">${rounded}</div>
        ${starMarkup()}
      </div>

      <p class="feedback-text">"${descr}"</p>
      <p class="feedback-author">— ${name}</p>
    </div>
  `;
  return slide;
}

// === Рендер усіх відгуків ===
async function renderFeedbacks() {
  feedbackList.innerHTML = '';

  const data = await fetchFeedbacks(1, 10);
  const feedbacks = data.feedbacks || [];

  if (!feedbacks.length) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не отримано список відгуків з API',
      position: 'topRight',
    });
    return;
  }

  feedbacks.forEach(fb => {
    feedbackList.appendChild(
      createFeedbackCard({
        name: fb.name || 'Анонім',
        descr: fb.descr || '',
        rate: fb.rate ?? 0,
      })
    );
  });

  new Swiper('.feedback-swiper', {
  modules: [Navigation, Pagination],
  loop: false,
  centeredSlides: false,
  initialSlide: 0,
  watchOverflow: true,
  observer: true,
  observeParents: true,

  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    768:  { slidesPerView: 2, spaceBetween: 20 },
    1440: { slidesPerView: 3, spaceBetween: 24 },
  },

  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
});
}


renderFeedbacks();