import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showLoader, hideLoader } from './loader.js';

// API
export const BASE_URL = 'https://furniture-store.b.goit.study/api';

// Ендпоінти
export const ENDPOINTS = {
  FURNITURES: '/furnitures',
  CATEGORIES: '/categories',
  ORDERS: '/orders',
  FEEDBACKS: '/feedbacks',
};

// axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// меблі
export async function fetchFurnitures(page = 1, limit = 8) {
  showLoader();
  try {
    const response = await api.get(ENDPOINTS.FURNITURES, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити меблі. Спробуйте пізніше.',
      position: 'topRight',
      timeout: 4000,
    });
    return null;
  } finally {
    hideLoader();
  }
}

// категорії
export async function fetchCategories() {
  showLoader();
  try {
    const response = await api.get(ENDPOINTS.CATEGORIES);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message:
        'Не вдалося завантажити категорії. Перевірте підключення до інтернету.',
      position: 'topRight',
      timeout: 4000,
    });
    return null;
  } finally {
    hideLoader();
  }
}

//  Відгуки
export async function fetchFeedbacks(page = 1, limit = 3) {
  showLoader();
  try {
    const response = await api.get(ENDPOINTS.FEEDBACKS, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити відгуки. Спробуйте оновити сторінку.',
      position: 'topRight',
      timeout: 4000,
    });
    return null;
  } finally {
    hideLoader();
  }
}

// Нове замовлення
export async function createOrder(orderInfo) {
  showLoader();
  try {
    const response = await api.post(ENDPOINTS.ORDERS, orderInfo);

    // успіх колись нас чекає
    iziToast.success({
      title: 'Успіх!',
      message:
        "Замовлення успішно створено. Ми зв'яжемося з вами найближчим часом.",
      position: 'topRight',
      timeout: 4000,
    });
    //Все пропало
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Помилка замовлення',
      message:
        'Не вдалося створити замовлення. Перевірте дані та спробуйте ще раз.',
      position: 'topRight',
      timeout: 4000,
    });
    return null;
  } finally {
    hideLoader();
  }
}
