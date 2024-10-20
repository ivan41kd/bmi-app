const registerInputs = document.querySelectorAll('.main-register-input');
const registerButton = document.querySelector('.main-register-button');

const nickRegister = document.querySelector('.main-register-input.nickname');
const passRegister = document.querySelector('.main-register-input.password');

const checkInputs = (nick, pass) => {
 if (nick.value != '' && pass.value != '') {
  localStorage.setItem('isRegistered', true);
 } else null;
 if (localStorage.getItem('isRegistered')) {
  location.reload();
 }
};
const addLoginPass = (nick, pass) => {
 if (nick.value != '' && pass.value != '') {
  const user = [
   {
    login: nick.value,
    pass: pass.value,
   },
  ];
  if (!localStorage.getItem('user')) {
   localStorage.setItem('user', JSON.stringify(user));
  } else {
   const localUser = localStorage.setItem('user', JSON.stringify(user));
  }
 }
};
registerButton.addEventListener('click', () => {
 checkInputs(nickRegister, passRegister);
 addLoginPass(nickRegister, passRegister);
});
