const isAuthenticatedSession = sessionStorage.getItem('isAuthenticated');
const isAuthenticatedLocal = localStorage.getItem('isAuthenticated');
const isRegistered = localStorage.getItem('isRegistered');
const tabsWrapper = document.querySelector('.main-tabs');

if (!isAuthenticatedSession && !isAuthenticatedLocal) {
 tabsWrapper.remove();
 articles.forEach((article) => article.remove());
} else {
 document.querySelector('.main-login').remove();
}

if (!isRegistered) {
 document.querySelector('.main-login').remove();
} else {
 document.querySelector('.main-register').remove();
}
