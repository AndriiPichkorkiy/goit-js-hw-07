/**
 * @returns {String} Hex color string
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/** @type {HTMLButtonElement} */
const btn = document.querySelector('button.change-color');

/** @type {HTMLSpanElement} */
const output = document.querySelector('span.color');

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  output.innerHTML = color;
  output.style.color = color;

  btn.style.backgroundColor = color;
});
