import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
export const fetchFurnitures = async (page) => {
  try {
    const response = await api.get(ENDPOINTS.FURNITURES, {
      params: {
        page,
        limit: 8,
      },
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
  }
}
//меблі за категорією
export const fetchFurnituresByCategory = async (category, page = 1) => {
  try {
    const response = await api.get(ENDPOINTS.FURNITURES, {
      params: {
        category,
        page,
        limit: 8,
      },
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
  }
}


// категорії
export const fetchCategories = async () => {
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
  }
}

//  Відгуки
export const fetchFeedbacks = async (page = 1, limit = 3) => {
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
  }
}

// Нове замовлення
export const createOrder = async (orderInfo) => {
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
  }
}

// furniture details modal 

let localProducts = [];

export const setLocalProducts = products => {
  localProducts = products;
};

export const getLocalProductById = id => {
  return localProducts.find(p => p._id === id);
};