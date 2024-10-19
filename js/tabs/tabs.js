const tabs = document.querySelectorAll('.main-tab');
const bmiWrapper = document.querySelector('.main-bmi-wrapper');
const caloriesWrapper = document.querySelector('.main-calories-wrapper');

tabs.forEach((tab) => {
 tab.addEventListener('click', () => {
  tab.classList.add('active');
  if (tab.dataset.tab == 'bmi') {
   caloriesWrapper.classList.remove('active');
   caloriesWrapper.classList.add('inactive');
   bmiWrapper.classList.remove('inactive');
   bmiWrapper.classList.add('active');
  } else {
   bmiWrapper.classList.remove('active');
   bmiWrapper.classList.add('inactive');
   caloriesWrapper.classList.remove('inactive');
   caloriesWrapper.classList.add('active');
  }
 });
 tabs.forEach((tab2) => {
  tab2.addEventListener('click', () => {
   if (tab2 != tab)
    tab.addEventListener('click', () => {
     tab2.classList.remove('active');
     tab.classList.add('active');
    });
  });
 });
});
