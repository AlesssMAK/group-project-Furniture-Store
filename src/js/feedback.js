import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'css-star-rating/css/star-rating.css';

import { fetchFeedbacks } from './furniture-store-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { normalizeRating, starMarkup } from './render-function';

const feedbackList = document.getElementById('feedback-list');


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