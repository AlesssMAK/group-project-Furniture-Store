import iziToast from "izitoast";
import { createOrder } from "./furniture-store-api";

const btnClose = document.querySelector('.modal-window-close-btn');
const orderModal = document.querySelector ('.order-modal');
const form = document.querySelector ('.modal-window-form')

let orderData = {};


export function openOrderModal(data = {}) {
orderData = data;  
  orderModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
    window.addEventListener('keydown', handleEsc);
  orderModal.addEventListener('click', handleBackdropClick);
}

function closeModalOrder() {
  console.log('Закриваємо модалку');
 orderModal.classList.remove("is-open");
document.body.style.overflow = "";
     window.removeEventListener('keydown', handleEsc);
  orderModal.removeEventListener('click', handleBackdropClick);
  form.reset();
  orderData = {};
}

function handleEsc(e) {
  if (e.key === 'Escape') {
    closeModalOrder();
  }
}

function handleBackdropClick(e) {
  if (e.target === orderModal) {
    closeModalOrder();
  }
}

if (btnClose) {
  btnClose.addEventListener ("click",closeModalOrder);
  }

  function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateTel (tel) {
  return  /^[0-9]{12}$/.test(tel);
}


if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.elements['user-email'].value.trim();
    const tel = e.target.elements['user-tel'].value.trim();
    const comment = e.target.elements['user-comment'].value.trim();

    if (!validateEmail(email)) {
    iziToast.warning({ message: 'Введіть коректний Email!' });
    return;
  }
  
      if (!validateTel (tel)) {
    iziToast.warning({ message: 'Вкажіть коректний номер телефону!' });
    return;
  }

     if (comment.length < 5 || comment.length > 64) {
    iziToast.warning({ message: 'Комментар має бути від 5 до 64 символів' });
    return;
  }
 
    try {
      await createOrder({
        email,
        phone: tel,
        comment,
        color: orderData.color || null,
        modelId: orderData.productId || null
      });

  iziToast.success({ message: 'Заявку відправлено!' });
      closeModalOrder();
    } catch (err) {
      iziToast.error({ message: 'Сталася помилка. Спробуйте ще раз.' });
    }
  });
 

}

