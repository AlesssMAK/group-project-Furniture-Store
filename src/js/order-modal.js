import iziToast from "izitoast";
    import { createOrder } from "./furniture-store-api";

const btnClose = document.querySelector('.modal-window-close-btn');
const orderModal = document.querySelector ('.order-modal');
const formModalOrder = document.querySelector ('.modal-window-form')

let selectedProductId = null;

function openModal() {
selectedProductId = productId;
  orderModal.style.display = "block";
  orderModal.classList.add("is-open")
  document.body.style.overflow = "hidden";
   document.body.classList.add("no-scroll");
}

function closeModalOrder() {
orderModal.style.display = "none";
orderModal.classList.remove("is-open")
  document.body.classList.remove("no-scroll");
  selectedProductId = null;
}


btnClose.addEventListener ("click",closeModalOrder);

btnClose.addEventListener ("keydown", (event) => {
    if (event.key === "Escape") {
        closeModalOrder()
    }
});

orderModal.addEventListener ("click", (event) => {
    if (event.target === orderModal) {
        closeModalOrder();
    }
})

form.addEventListener("submit", sendOrder)

async function sendOrder (event) {
    event.preventDefault();

    const email = event.target.elements['#user-email'].value.trim();
    const tel = event.target.elements['#user-tel'].value.trim();
    const comment = event.target.elements['#user-comment'].value.trim();

    if (!email) {
    iziToast.warning({ message: 'Заповніть поле "Email"!' });
    return;
  }

      if (!tel) {
    iziToast.warning({ message: 'Вкажіть номер телефону!' });
    return;
  }

     if (comment.length < 4 || comment.length > 63) {
    iziToast.warning({ message: 'Комментар не може бути від 5 до 64 символів' });
    return;
  }
  
    
   await createOrder({
    email,
    phone: tel,
    comment,
    color,
    modelId: selectedProductId
  })

   closeModalOrder();
  event.target.reset();
}


