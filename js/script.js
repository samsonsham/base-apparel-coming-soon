const showErrMsg = (isShowMsg, msg) => {
  const elemMsg = document.querySelector('.err-msg');
  const elemBtn = document.querySelector('.email__btn-submit');
  const elemInput = document.querySelector('.email__input');

  if (isShowMsg) {
    elemMsg.classList.add('active');
    elemBtn.classList.add('error');
    elemInput.style.border = '0.1rem solid hsl(0, 93%, 68%)';
    elemMsg.innerHTML = msg;
  } else {
    elemMsg.classList.remove('active');
    elemBtn.classList.remove('error');
    elemInput.style.border = '0.01rem solid hsl(0, 36%, 70%)';
    elemMsg.innerHTML = msg;
    elemInput.value = '';
  }
};

const submitForm = () => {
  showErrMsg(false, '');
  alert('Email Address submitted!');
};

const formSubmitHandler = (e) => {
  e.preventDefault();

  const msgEmpty = 'Email cannot be empty';
  const msgInvalid = 'Please provide a valid email';
  const elemInput = document.querySelector('.email__input');

  // Validate email by HTML5 input type email
  if (elemInput.value === '') {
    showErrMsg(true, msgEmpty);
  } else if (elemInput.matches(':valid')) {
    submitForm();
  } else {
    showErrMsg(true, msgInvalid);
  }
};
