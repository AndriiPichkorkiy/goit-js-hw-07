/**
 * @returns {String} Hex color string
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/** @type {HTMLDivElement} */
const boxes = document.querySelector('div#boxes');

/** @type {HTMLButtonElement} */
const createBtn = document.querySelector('button[data-create]');

/** @type {HTMLButtonElement} */
const destroyBtn = document.querySelector('button[data-destroy]');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('input[type="number"]');

/**
 *
 * @param {Number} amount
 */
function createBoxes(amount) {
  let markup = '';
  let size = 30;

  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxes.innerHTML = markup;
}

createBtn.addEventListener('click', () => {
  const count = Number(inputEl.value);
  if (count >= 1 && count <= 100) {
    createBoxes(count);
    // Очищаєтся input якщо значення в межах від 1 до 100
    inputEl.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
