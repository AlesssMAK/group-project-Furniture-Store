// Імпорт стилів (обов’язково)
import 'swiper/css';

// Імпорт самого Swiper і модулів, якщо треба
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Ініціалізація
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

console.log("feedback");
