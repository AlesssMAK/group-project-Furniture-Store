import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchFurnitures,
  fetchFurnituresByCategory,
} from './furniture-store-api';
import { refs } from './refs';
import {
  showLoader,
  hideLoader,
  hideLoadMoreListBtn,
  showLoadMoreListBtn,
} from './helpers';
import { renderFurniture } from './render-function';

let currentPage = 1;

hideLoader();
const loadFurniture = async () => {
  currentPage = 1;
  showLoader();
  const { furnitures, totalItems } = await fetchFurnitures(currentPage);
  hideLoader();
  hideLoadMoreListBtn();

  renderFurniture(furnitures);

  const totalPages = Math.ceil(totalItems / 8);

  if (currentPage >= totalPages) {
    iziToast.info({
      title: 'Повідомлення',
      message: 'Всі меблі завантаженні.',
      position: 'topRight',
      timeout: 4000,
    });
  } else {
    showLoadMoreListBtn();
  }
};

export const handleLoadMoreListClick = async () => {
  currentPage++;
  hideLoadMoreListBtn();
  showLoader();

  const { furnitures, totalItems } = await fetchFurnitures(currentPage);

  renderFurniture(furnitures);

  hideLoader();

  const totalPages = Math.ceil(totalItems / 8);

  if (currentPage >= totalPages) {
    iziToast.info({
      title: 'Повідомлення',
      message: 'Всі меблі завантаженні.',
      position: 'topRight',
      timeout: 4000,
    });
  } else {
    showLoadMoreListBtn();
  }
};

export const handleCategoryClick = async e => {
  const clickedBtn = e.target.closest('.btn-list-section-iv');
  if (!clickedBtn) return;
  highlightActiveCategory(clickedBtn);
  loadFurnitureByCategory(clickedBtn.dataset.id);
};

export const activeFirstBtn = () => {
  const firstBtn = document.querySelector('.btn-list-section-iv');
  if (firstBtn) {
    highlightActiveCategory(firstBtn);
  }
};
// Підсвітка активної категорії ===

export const highlightActiveCategory = activeButton => {
  document
    .querySelectorAll('.btn-list-section-iv')
    .forEach(btn => btn.classList.remove('active-btn-iv'));
  activeButton.classList.add('active-btn-iv');
};

// --------------------------------------------------Завантаження---------------------------------------------------//
loadFurniture();

// --------------------------------------------------Слухачі подій---------------------------------------------------//
//  Клік по категорії ===
document.addEventListener('DOMContentLoaded', () => {
  refs.categoriesList.addEventListener('click', handleCategoryClick);
  activeFirstBtn();
});

refs.loadMoreListBtn.addEventListener('click', handleLoadMoreListClick);
