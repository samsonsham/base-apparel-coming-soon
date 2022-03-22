const showErrMsg = () => {
  const elemMsg = document.querySelector('.err-msg');
  const elemBtn = document.querySelector('.email__btn-submit');
  elemMsg.classList.add('active');
  elemBtn.classList.add('error');
};

const submitForm = () => {
  alert('Email Address submitted!');
};

const formSubmitHandler = (e) => {
  e.preventDefault();

  const elemInput = document.querySelector('.email__input');
  // Validate email by HTML5 input type email
  if (elemInput.matches(':valid')) {
    submitForm();
  } else {
    showErrMsg();
  }
};
