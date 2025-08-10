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

// ====== state ======
let currentPage = 1;
const PER_PAGE = 8;

// ====== init ======
document.addEventListener('DOMContentLoaded', () => {
  refs.categoriesList?.addEventListener('click', handleCategoryClick);
  refs.loadMoreListBtn?.addEventListener('click', handleLoadMoreListClick);

  loadFurniture();
  activeFirstBtn();
});

export const activeFirstBtn = () => {
  const firstBtn = document.querySelector('.btn-list-section-iv');
  if (firstBtn) {
    highlightActiveCategory(firstBtn);
  }
};

export const highlightActiveCategory = activeButton => {
  document
    .querySelectorAll('.btn-list-section-iv')
    .forEach(btn => btn.classList.remove('active-btn-iv'));
  activeButton.classList.add('active-btn-iv');
};

// ====== data loaders ======
const loadFurniture = async () => {
  currentPage = 1;
  showLoader();
  try {
    const { furnitures, totalItems } = await fetchFurnitures(currentPage);
    renderFurniture(furnitures); // припускаю, що це рендерить ЗАМІНОЮ списку
    const totalPages = Math.ceil(totalItems / PER_PAGE);
    if (currentPage < totalPages) showLoadMoreListBtn();
    else hideLoadMoreListBtn();
  } catch (e) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити меблі. Спробуйте пізніше.',
      position: 'topRight',
      timeout: 4000,
    });
    hideLoadMoreListBtn();
  } finally {
    hideLoader();
  }
};

async function loadFurnitureByCategory(category, page = 1) {
  showLoader();
  try {
    const { furnitures, totalItems } = await fetchFurnituresByCategory(
      category,
      page
    );
    renderFurniture(furnitures);
    const totalPages = Math.ceil(totalItems / PER_PAGE);
    if (page < totalPages) showLoadMoreListBtn();
    else hideLoadMoreListBtn();
  } catch (e) {
    hideLoadMoreListBtn();
    refs.furnitureList.innerHTML = '<p>Не вдалося завантажити меблі.</p>';
  } finally {
    hideLoader();
  }
}

// ====== handlers ======
export const handleCategoryClick = async e => {
  const clickedBtn = e.target.closest('.btn-list-section-iv');
  if (!clickedBtn) return;

  highlightActiveCategory(clickedBtn);
  const cat = clickedBtn.dataset.id;

  if (!cat || cat === 'all') {
    await loadFurniture();
  } else {
    currentPage = 1;
    await loadFurnitureByCategory(cat, currentPage);
  }
};

export const handleLoadMoreListClick = async () => {
  // визначаємо активну категорію
  const active = document.querySelector('.btn-list-section-iv.active-btn-iv');
  const cat = active?.dataset.id;

  currentPage += 1;
  hideLoadMoreListBtn();
  showLoader();

  try {
    if (!cat || cat === 'all') {
      const { furnitures, totalItems } = await fetchFurnitures(currentPage);
      renderFurniture(furnitures);
      const totalPages = Math.ceil(totalItems / PER_PAGE);
      if (currentPage < totalPages) showLoadMoreListBtn();
    } else {
      const { furnitures, totalItems } = await fetchFurnituresByCategory(
        cat,
        currentPage
      );
      renderFurniture(furnitures);
      const totalPages = Math.ceil(totalItems / PER_PAGE);
      if (currentPage < totalPages) showLoadMoreListBtn();
    }
  } catch (e) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити меблі. Спробуйте пізніше.',
      position: 'topRight',
      timeout: 4000,
    });
  } finally {
    hideLoader();
  }
};