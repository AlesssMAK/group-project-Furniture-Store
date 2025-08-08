import { refs } from './refs';

const loader = document.getElementById('loader');

export const showLoader = () => {
  if (loader) loader.classList.remove('hidden');
};

export const hideLoader = () => {
  if (loader) loader.classList.add('hidden');
};

export const showLoadMoreListBtn = () => {
  refs.loadMoreListBtn.classList.remove('hidden');
};

export const hideLoadMoreListBtn = () => {
  refs.loadMoreListBtn.classList.add('hidden');
  
};
