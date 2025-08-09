import iziToast from 'izitoast';
import { getLocalProductById } from './furniture-store-api';
import { refs } from './refs';
import { renderProductModal } from './render-function';
import { openOrderModal } from './order-modal'; // 🔹 ИЗМЕНЕНО — импорт из второй модалки

let currentProductId = null;  // 🔹 ИЗМЕНЕНО — храню ID открытого товара
let currentColor = null;      // 🔹 ИЗМЕНЕНО — храню выбранный цвет

const clickEscPress = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const clickBackdropClick = event => {
  if (event.target === refs.productModal) {
    closeModal();
  }
};

export const openModal = (productId, color) => { // 🔹 ИЗМЕНЕНО — добавил color
  currentProductId = productId;
  currentColor = color;
  
  refs.productModal.classList.add('modal-is-open');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', clickEscPress);
  refs.productModal.addEventListener('click', clickBackdropClick);
};

export const closeModal = () => {
  refs.productModal.classList.remove('modal-is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', clickEscPress);
  refs.productModal.removeEventListener('click', clickBackdropClick);
  currentProductId = null;  // 🔹 ИЗМЕНЕНО
  currentColor = null;      // 🔹 ИЗМЕНЕНО
};

refs.modalCloseBtn.addEventListener('click', closeModal);

export async function onProductModalClick(event) {
  const detailBtn = event.target.closest('.furniture-list-render-btn');
  if (!detailBtn) return;

  const card = detailBtn.closest('.furniture-list-render-item');
  const productId = card?.dataset.id;
  const color = card?.dataset.color || null; // 🔹 ИЗМЕНЕНО — читаем цвет из карточки

  if (!productId) return;

  const product = getLocalProductById(productId);

  if (!product) {
    iziToast.error({
      title: 'Error',
      message: 'Товар не знайдено у кеші',
    });
    return;
  }

  renderProductModal(product);
  openModal(productId, color); // 🔹 ИЗМЕНЕНО — передаем ID и цвет в openModal
}

refs.furnitureList.addEventListener('click', onProductModalClick);

// Кнопка "замовити" в первой модалке
document.addEventListener("click", event => {
  const orderBtn = event.target.closest('.order-btn');
  if (!orderBtn) return;

  closeModal(); 
  openOrderModal(currentProductId, currentColor); // 🔹 ИЗМЕНЕНО — передаем ID и цвет из текущей модалки
});