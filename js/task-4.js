const invalidMsg = 'All form fields must be filled in';

/** @type {HTMLFormElement} */
const enterForm = document.querySelector('.login-form');

enterForm.addEventListener('submit', handleSubmit);

/** @param {Event} event */
function handleSubmit(event) {
  event.preventDefault();

  /** @type {HTMLFormElement} */
  const form = event.target;

  /** @type {String} */
  const email = form.elements.email.value.trim();

  /** @type {String} */
  const password = form.elements.password.value.trim();

  if (!email.length || !password.length) {
    return alert(invalidMsg);
  }

  const result = {
    email,
    password,
  };
  console.log(result);

  form.reset();
}
