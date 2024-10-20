const nickLogin = document.querySelector('.main-login-input.nickname');
const passLogin = document.querySelector('.main-login-input.password');
const rememberChk = document.querySelector('.main-login-remember');
const loginButton = document.querySelector('.main-login-button');

const validLogin = (nick, pass) => {
 const userData = JSON.parse(localStorage.getItem('user'));
 userData.forEach((user) => {
  if (user.login == nick.value && user.pass == pass.value) {
   if (rememberChk.checked) {
    localStorage.setItem('isAuthenticated', true);
   } else {
    sessionStorage.setItem('isAuthenticated', true);
   }
   location.reload();
  }
 });
};

loginButton.addEventListener('click', () => validLogin(nickLogin, passLogin));
