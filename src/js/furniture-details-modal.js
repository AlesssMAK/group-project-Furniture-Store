import iziToast from 'izitoast';
import { getLocalProductById } from './furniture-store-api';
import { refs } from './refs';
import { renderProductModal } from './render-function';


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
  
    const product = getLocalProductById(productId);
  
    if (!product) {
      iziToast.error({
        title: 'Error',
        message: 'Товар не знайдено у кеші',
      });
      return;
    }
  
    renderProductModal(product);
    openModal();
  }


  refs.furnitureList.addEventListener('click', onProductModalClick);
  


// повісила слухача на модалк: кнопка "замовити"

export const openModalOrder = () => {
  refs.orderModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', clickEscPress);
  refs.orderModal.addEventListener('click', clickBackdropClick);
};


document.addEventListener("click", event => {
    const orderBtn = event.target.closest('.order-btn');
    if(!orderBtn) return;
  closeModal();
  openModalOrder();
})