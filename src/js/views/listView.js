import { elements } from './base';

export const renderItem = item => {
  const markup = `
    <li class="shopping__item" data-itemid="${item.id}">
      <div class="shopping__count">
        <input type="number" value="${item.count}" min="0" step="${item.count}" class="shopping__count--value">
        <p>${item.unit}</p>
      </div>
      <p class="shopping__description">${item.ingredient}</p>
      <button class="shopping__delete btn-tiny">
        <svg>
          <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
      </button>
    </li>
  `;
  elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteList = () => {
  elements.shopping.innerHTML = '';
  const btn = document.querySelector('.btn-delete-list');
  if (btn) btn.parentElement.removeChild(btn);
};

export const renderDeleteButton = () => {
  const markup = `
    <button class="btn-small btn-delete-list">
      <svg>
        <use href="img/icons.svg#icon-squared-cross"></use>
      </svg>
      <span>Delete Shopping list</span>
    </button>
  `;
  elements.shopping.insertAdjacentHTML('beforebegin', markup);
};
export const deleteItem = id => {
  const item = document.querySelector(`[data-itemid="${id}"]`);
  if (item) item.parentElement.removeChild(item);
};