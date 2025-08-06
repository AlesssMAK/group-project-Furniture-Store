import iziToast from "izitoast";
    import { createOrder } from "./furniture-store-api";

const btnClose = document.querySelector('.modal-window-close-btn');
const orderModal = document.querySelector ('.order-modal');
const formModalOrder = document.querySelector ('.modal-window-form')

function openModal() {
  orderModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

btnClose.addEventListener ("click",closeModalOrder);

btnClose.addEventListener ("keydown", (event) => {
    if (event.key === escape) {
        closeModalOrder()
    }
});

btnClose.addEventListener ("click", (event) => {
    if (event.target === orderModal) {
        closeModalOrder();
    }
})

function closeModalOrder() {
orderModal.style.displey = "none";
document.body.style.overflow = "";
}


createOrder();
