const elem = {
  form: document.querySelector('.email-form'),
  input: document.querySelector('.email__input'),
  btn: document.querySelector('.email__btn-submit'),
  msg: document.querySelector('.err-msg'),
};
const msg = {
  empty: 'Email cannot be empty',
  invalid: 'Please provide a valid email',
};
const clr = {
  softRed: 'hsl(0, 93%, 68%)',
  desaturatedRed: 'hsl(0, 36%, 70%)',
};

const invalid = () => {
  elem.msg.removeAttribute('hidden');
  elem.btn.classList.add('error');
  elem.input.style.border = `0.1rem solid ${clr.softRed}`;

  if (elem.input.value === '') {
    elem.msg.innerHTML = msg.empty;
  } else {
    elem.msg.innerHTML = msg.invalid;
  }
};

const reset = () => {
  elem.input.value = '';
  elem.msg.setAttribute('hidden', '');
  elem.btn.classList.remove('error');
  elem.input.style.border = `0.1rem solid ${clr.desaturatedRed}`;
};

const submitForm = () => {
  alert('Email Address submitted!');
};

const submitHandler = (event) => {
  event.preventDefault();
  submitForm();
  reset();
};

elem.input.oninvalid = invalid;
elem.form.onsubmit = submitHandler;
