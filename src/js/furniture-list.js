import { fetchFurnitures } from './furniture-store-api';
import { refs } from './refs';
import { showLoader, hideLoader } from './loader';

const renderFurniture = furnitures => {
  const markup = furnitures
    .map(
      ({ images, _id, type, price }) => `
    <li class="furniture-list-render-item" data-id="${_id}">
      <img class="furniture-list-render-img" src="${images[0]}" alt="${type}" />
      <h3 class="furniture-list-render-title">${type}</h3>
      <ul class="furniture-list-render-color-list">
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-one"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-two"></li>
        <li class="furniture-list-render-color-list-item furniture-list-render-color-list-item-current-three"></li>
      </ul>
      <p class="furniture-list-render-price">${price} грн</p>
      <button class="furniture-list-render-btn" type="button">Детальніше</button>
    </li>
    `
    )
    .join('');

  refs.furnitureList.innerHTML = markup;
};

async function loadFurniture() {
  showLoader();
  const data = await fetchFurnitures();
  hideLoader();

  if (data && data.furnitures) {
    renderFurniture(data.furnitures);
  } else {
    refs.furnitureList.innerHTML = '<p>Не вдалося завантажити меблі.</p>';
  }
}

loadFurniture();

//  Клік по категорії ===
document.addEventListener('DOMContentLoaded', () => {
  refs.categoriesList.addEventListener("click", handleCategoryClick);
  activeFirstBtn();
});

export const handleCategoryClick = async e => {
  const clickedBtn = e.target.closest(".btn-list-section-iv");
  if (!clickedBtn) return;
  highlightActiveCategory(clickedBtn);
};

export const activeFirstBtn = () => {
  const firstBtn = document.querySelector('.btn-list-section-iv');
  if (firstBtn) {
    highlightActiveCategory(firstBtn);
  }
  
};
// Підсвітка активної категорії ===

export const highlightActiveCategory = (activeButton) => {
  document.querySelectorAll('.btn-list-section-iv').forEach(btn => btn.classList.remove('active-btn-iv'));
  activeButton.classList.add('active-btn-iv');
};

