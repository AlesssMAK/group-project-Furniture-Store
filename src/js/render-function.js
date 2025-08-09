import { refs } from './refs';
import { setLocalProducts } from './furniture-store-api';




import 'css-star-rating/css/star-rating.css';


// -----------------------------------------зірки---------------------------------
// === ОКРУГЛЕННЯ ЗА ПРАВИЛОМ ===
export const normalizeRating = (rate) => {
  const r = Math.max(0, Math.min(5, Number(rate) || 0));
  if (r >= 3.3 && r <= 3.7) return 3.5;
  if (r >= 3.8 && r <= 4.2) return 4;
  return Math.round(r * 2) / 2;
};

// === Розмітка, яку очікує css-star-rating ===
export const  starMarkup = () => {
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






// -----------------------------------------зірки---------------------------------




export const renderProductModal = modalData => {
  const { name, description, images, rate, price, sizes, color, category } =
    modalData;

     const rounded = normalizeRating(rate);
  const value = Math.floor(rounded);      // 0..5
  const half = rounded % 1 === 0.5;

  const imagesMarkup = `
      <div class="gallery">
        <img src="${images[0]}" alt="${name}" class="gallery__item gallery__item--large" />
        <div class="gallery__row">
          <img src="${images[1]}" alt="${name}" class="gallery__item" />
          <img src="${images[2]}" alt="${name}" class="gallery__item" />
        </div>
      </div>
    `;

  const colorsMarkup = color
    .map(
      (clr, index) => `
    <label class="color-checkbox-label">
      <input
        type="radio"
        name="color"
        value="${clr}"
        class="color-item"
        id="color-${index}"
        ${index === 0 ? 'checked' : ''}
      />
      <span class="color-checkbox-circle" style="background-color: ${clr}"></span>
    </label>
  `
    )
    .join('');

  refs.productMadalContainer.innerHTML = `
      <div class="modal-product-img-gallery">${imagesMarkup}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${name}</h2>
        <p class="gategory-text">${category.name}</p>
        <p class="product-price">${price} грн</p>
        <div
        class="rating star-icon medium direction-ltr label-hidden ${half ? 'half' : ''} value-${value}"
        aria-label="Рейтинг ${rounded} з 5"
      >
        <div class="label-value" aria-hidden="true">${rounded}</div>
        ${starMarkup()}
      </div>
      <p class=".product-description product-color">Колір</p>
        <div class="color-picker">${colorsMarkup}</div>
        <p class="product-description">${description}</p>
        <p class="product-size">Розміри: ${sizes}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `;
};




// furniture list

export const renderFurniture = furnitures => {

  setLocalProducts(furnitures);

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
