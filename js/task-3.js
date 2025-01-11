/** @type {HTMLInputElement} */
const elementInput = document.querySelector('input#name-input');
/** @type {HTMLSpanElement} */
const elementOutput = document.querySelector('span#name-output');

elementInput.addEventListener('input', event => {
  const val = elementInput.value.trim();
  if (val.length) {
    elementOutput.innerHTML = val;
  } else {
    elementOutput.innerHTML = 'Anonymous';
  }
});
