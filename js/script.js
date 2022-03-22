const showErrMsg = (msg) => {
  const elemMsg = document.querySelector('.err-msg');
  const elemBtn = document.querySelector('.email__btn-submit');
  const elemInput = document.querySelector('.email__input');
  elemMsg.classList.add('active');
  elemBtn.classList.add('error');
  elemInput.style.border = '0.1rem solid hsl(0, 93%, 68%)';
  elemMsg.innerHTML = msg;
};

const submitForm = () => {
  alert('Email Address submitted!');
};

const formSubmitHandler = (e) => {
  e.preventDefault();

  const emptyMsg = 'Email cannot be empty';
  const errMsg = 'Please provide a valid email';
  const elemInput = document.querySelector('.email__input');

  // Validate email by HTML5 input type email
  if (elemInput.value === '') {
    showErrMsg(emptyMsg);
  } else if (elemInput.matches(':valid')) {
    submitForm();
  } else {
    showErrMsg(errMsg);
  }
};
