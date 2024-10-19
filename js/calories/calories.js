const caloriesInputs = document.querySelectorAll('.main-calories-input');
const checkCalButton = document.querySelector('.main-calories-calculate');
const caloriesResult = document.querySelector('.main-calories-result');
const checkCalories = (inputs) => {
 const valuesArr = [];
 inputs.forEach((input) => {
  if (input.value != '') valuesArr.push(Number(input.value));
 });
 if (valuesArr.length >= 1) {
  const resultCal = valuesArr.reduce((acc, elem) => acc + elem, 0);
  if (resultCal <= caloriesNormal.textContent) {
   caloriesResult.textContent =
    'Вы уложились в суточную норму калорий на день!';
  } else {
   caloriesResult.textContent =
    'Увы, но вы за целый день съели калорий больше, чем указано вверху! Возможен набор веса';
  }
 }
};

checkCalButton.addEventListener('click', () => {
 checkCalories(caloriesInputs);
});
