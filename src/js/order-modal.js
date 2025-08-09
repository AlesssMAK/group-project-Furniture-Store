import iziToast from "izitoast";
import { createOrder } from "./furniture-store-api";

const btnClose = document.querySelector('.modal-window-close-order-btn');
const orderModal = document.querySelector('.order-modal');
const formModalOrder = document.querySelector('.modal-window-form');

let selectedProductId = null;
let selectedColor = null;

const clickEscPress = event => {
  if (event.code === 'Escape') {
    closeModalOrder();
  }
};

const clickBackdropClick = event => {
  if (event.target === orderModal) {
    closeModalOrder();
  }
};

export function openOrderModal(productId, color) {
  selectedProductId = productId;
  selectedColor = color;

  // orderModal.style.display = "block";
  orderModal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  window.addEventListener('keydown', clickEscPress);
  orderModal.addEventListener('click', clickBackdropClick);
}

function closeModalOrder() {
  console.log("ok");
  
  // orderModal.style.display = "none";
  orderModal.classList.remove("is-open");
  document.body.style.overflow = '';
  window.removeEventListener('keydown', clickEscPress);
 orderModal.removeEventListener('click', clickBackdropClick);
  
  // 🆕 ДОБАВЛЕНО — очистка сохранённых значений
  selectedProductId = null;
  selectedColor = null;
}

btnClose.addEventListener("click", closeModalOrder);


formModalOrder.addEventListener("submit", sendOrder);

async function sendOrder(event) {
  event.preventDefault();


  const email = event.target.elements['user-email'].value.trim();
  const tel = event.target.elements['user-tel'].value.trim();
  const comment = event.target.elements['user-comment'].value.trim();

  if (!email) {
    iziToast.warning({ message: 'Заповніть поле "Email"!' });
    return;
  }
  let digitsOnly = '';
  for (let i = 0; i < tel.length; i++) {
    const char = tel[i];
    if (char >= '0' && char <= '9') {
      digitsOnly += char;
    }
  }
  if (digitsOnly.length != 12) {
    iziToast.warning({ message: 'Вкажіть номер телефону!' });
    return;
  }

    // 🔧 ИЗМЕНЕНО — корректные границы длины комментария
  if (comment.length < 5 || comment.length > 64) {
    iziToast.warning({ message: 'Коментар має бути від 5 до 64 символів' });
    return;
  }

  // 🆕 ДОБАВЛЕНО — сбор данных для POST-запроса
  const orderData = {
    email,
    phone: digitsOnly,
    comment,
    modelId: selectedProductId,
    color: selectedColor
  };

  try {
    // 🆕 ДОБАВЛЕНО — попытка отправить заказ
    
    await createOrder(orderData);

    closeModalOrder();
    formModalOrder.reset();
  } catch (error) {
    // 🆕 ДОБАВЛЕНО — обработка ошибок
    // iziToast.error({ message: "Помилка при надсиланні замовлення. Спробуйте ще раз." });
    // console.error("Order submission failed:", error);
  }
}