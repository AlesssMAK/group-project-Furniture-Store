import { refs } from './refs';

// Furniture Modal

export const renderProductModal = modalData => {
    const { name, description, images, rate, price, sizes, color, category } = modalData;
  
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
      .map((clr, index) => `
        <label class="color-checkbox-label">
          <input type="checkbox" name="color" value="${clr}" class="color-item" id="color-${index}" />
          <span class="color-checkbox-circle" style="background-color: ${clr}"></span>
        </label>
      `)
      .join('');
  
    refs.productMadalContainer.innerHTML = `
      <div class="modal-product-img-gallery">${imagesMarkup}</div>
      <div class="furniture-modal-product-content">
        <h2 class="modal-product-title">${name}</h2>
        <p class="gategory-text">${category.name}</p>
        <p class="product-price">${price} грн</p>
        <svg class="product-rating">${rate}</svg>
        <div class="color-picker">${colorsMarkup}</div>
        <p class="product-description">${description}</p>
        <p class="product-size">Розміри: ${sizes}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    `;
  };
  


// furniture list
  
export const renderFurniture = furnitures => {
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