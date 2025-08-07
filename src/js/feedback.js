import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { fetchFeedbacks } from './furniture-store-api';
import Raty from 'raty-js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const feedbackList = document.getElementById('feedback-list');
const loader = document.getElementById('feedback-loader');

// === Рейтинг округлення ===
function roundRating(rating) {
  if (rating >= 3.3 && rating <= 3.7) return 3.5;
  if (rating >= 3.8 && rating <= 4.2) return 4;
  return Math.round(rating);
}

// === Рендер картки відгуку ===
function createFeedbackCard({ name, descr, rate }) {
  const roundedRating = roundRating(rate);
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';

  slide.innerHTML = `
    <div class="feedback-card">
      <div class="rating" data-score="${roundedRating}"></div>
      <p class="feedback-text">"${descr}"</p>
      <p class="feedback-author">— ${name}</p>
    </div>
  `;

  // Явно указываем символы звёзд, чтобы они точно отображались
  new Raty(slide.querySelector('.rating'), {
    readOnly: true,
    score: roundedRating,
    starType: 'i',
    starOn: '★',
    starOff: '☆',
    starHalf: '⯨', // Можно заменить на любой подходящий символ для половинчатой звезды
  });

  return slide;
}

// === Рендер всіх відгуків ===
async function renderFeedbacks() {
  loader.classList.remove('visually-hidden');
  feedbackList.innerHTML = ''; // Очищаем контейнер перед рендером

  try {
    const data = await fetchFeedbacks(1, 10);
    console.log('Відгуки з API:', data);

    const feedbacks = data.feedbacks || [];

    if (!feedbacks.length) {
      iziToast.error({
        title: 'Помилка',
        message: 'Не отримано список відгуків з API',
        position: 'topRight',
      });
      return;
    }

    feedbacks.forEach(feedback => {
      const card = createFeedbackCard({
        name: feedback.name || 'Анонім',
        descr: feedback.descr || '',
        rate: feedback.rate || 0,
      });
      feedbackList.appendChild(card);
    });

    // Инициализация Swiper после вставки карточек и Raty
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити відгуки. Спробуйте пізніше.',
      position: 'topRight',
    });
  } finally {
    loader.classList.add('visually-hidden');
  }
}

renderFeedbacks();




