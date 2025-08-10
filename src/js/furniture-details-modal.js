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

export const openModal = (productId, color) => { 
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
  currentProductId = null;  
  currentColor = null;      
};

refs.modalCloseBtn.addEventListener('click', closeModal);

export async function onProductModalClick(event) {
  const detailBtn = event.target.closest('.furniture-list-render-btn');
  if (!detailBtn) return;

  const card = detailBtn.closest('.furniture-list-render-item');
  const productId = card?.dataset.id;
  const color = card?.dataset.color || null; 

  if (!productId) return;

  const product = getLocalProductById(productId);


  if (!product) {
    iziToast.error({
      title: 'Error',
      message: 'Товар не знайдено у кеші',
    });
    return;
  }
  
// повісила слухача на модалк: кнопка "замовити"


  renderProductModal(product);
  openModal(productId, color); 
}

refs.furnitureList.addEventListener('click', onProductModalClick);

// Кнопка "замовити" в первой модалке
document.addEventListener("click", event => {
  const orderBtn = event.target.closest('.order-btn');
  if (!orderBtn) return;

  const selectedProductId = currentProductId;
  const selectedCurrentColor = GetSelectedColor();
  closeModal(); 
  openOrderModal(selectedProductId, selectedCurrentColor);
});

function GetSelectedColor () {
  const selected = document.querySelector('input[name="color"]:checked');
  return selected ? selected.value : null;
}