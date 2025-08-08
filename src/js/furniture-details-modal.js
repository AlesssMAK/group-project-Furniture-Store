import { fetchProductModal } from './furniture-store-api';
import { openOrderModal } from './order-modal';
import { refs } from './refs';
import { renderProductModal } from './render-function';


// let currentProductId = null;

// const setCurrentProduct = productId => {
//   currentProductId = productId;
// };

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

export const openModal = productId => {
  refs.productModal.classList.add('modal-is-open');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', clickEscPress);
  refs.productModal.addEventListener('click', clickBackdropClick);
//   setCurrentProduct(productId);
};

export const closeModal = () => {
  refs.productModal.classList.remove('modal-is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', clickEscPress);
  refs.productModal.removeEventListener('click', clickBackdropClick);
};

refs.modalCloseBtn.addEventListener('click', closeModal);

// on click callback function

export async function onProductModalClick(event) {
    const detailBtn = event.target.closest('.furniture-list-render-btn');
    if (!detailBtn) return;
  
    const card = detailBtn.closest('.furniture-list-render-item');
    const productId = card?.dataset.id;
    if (!productId) return;
  
    try {
      const data = await fetchProductModal(productId); 
      renderProductModal(data); 
      openModal();
    } catch (error) {
      console.error('Не вдалося отримати дані товару:', error);
    }

    openOrderModal();
  }
  refs.furnitureList.addEventListener('click', onProductModalClick);




// повісити слухача подіі на кнопку у модальці, щоб відкривалася інша модалка для замовлення товару

