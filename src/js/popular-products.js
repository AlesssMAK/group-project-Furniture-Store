import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'css-star-rating/css/star-rating.css';

import { cacheProducts, fetchPopularproducts,} from './furniture-store-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';
import { renderPopularProducts, } from './render-function';


async function popularFurnitures() {
  const swiperWrapper = document.getElementById('popular-products-list');
  swiperWrapper.innerHTML = ''; // очищаємо перед рендером

  const data = await fetchPopularproducts(1);
  const populProducts = data.furnitures || [];
  cacheProducts(populProducts);
  

  if (!populProducts.length) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не отримано список відгуків з API',
      position: 'topRight',
    });
    return;
  }

  populProducts.forEach(product => {
    const slide = renderPopularProducts(product);
    swiperWrapper.appendChild(slide);
  });

  new Swiper('.popular-products-swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 24 },
      1440: { slidesPerView: 4, spaceBetween: 24 },
    },
  });
}

popularFurnitures()





