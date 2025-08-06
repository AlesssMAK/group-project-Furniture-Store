const loader = document.getElementById('loader');

export function showLoader() {
  if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
  if (loader) loader.classList.add('hidden');
}
