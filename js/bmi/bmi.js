const height = document.querySelector('.main-bmi-parameter.height');
const weight = document.querySelector('.main-bmi-parameter.weight');
const age = document.querySelector('.main-bmi-age-input');

const calcButton = document.querySelector('.main-bmi-calculate');
const caloriesNormal = document.querySelector('.main-calories-normal');
const sexInput = document.querySelectorAll('.main-bmi-sex-input');

const checkValues = (element) => {
 if (element != '' && element.classList.contains('invalid')) {
  element.classList.remove('invalid');
  return true;
 } else {
  element.classList.add('invalid');
 }
};

const calculateBMI = (height, weight, age) => {
 if (height.value != '' && weight.value != '') {
  const heightValue = parseFloat(height.value) / 100;
  const weightValue = parseFloat(weight.value);
  const result = weightValue / (heightValue * heightValue);
  return result.toFixed(2);
 }
};

const checkResult = (result) => {
 const value = Math.round(result);
 if (value <= 16) {
  return 'Выраженный дефицит массы тела';
 } else if (value >= 16 && value <= 18.5) {
  return 'Недостаточная (дефицит) масса тела';
 } else if (value >= 18.5 && value <= 25) {
  return 'Норма';
 } else if (value >= 25 && value <= 30) {
  return 'Избыточная масса тела (предожирение)';
 } else if (value >= 30 && value <= 35) {
  return 'Ожирение первой степени';
 } else if (value >= 35 && value <= 40) {
  return 'Ожирение второй степени';
 } else if (value >= 40) {
  return 'Ожирение третьей степени (морбидное)';
 }
};

const renderResult = (bmi, result) => {
 const resultValue = document.querySelector('.main-bmi-result-value');
 const resultText = document.querySelector('.main-bmi-result-text');
 resultValue.textContent = bmi;
 resultText.textContent = result;
};
const calcNormalCalories = (height, weight, age, sex) => {
 let currentSex = null;
 if (height.value != '' && weight.value != '' && age.value != '') {
  const sexChecked = sex.forEach((chk) => {
   if (chk.checked) {
    currentSex = chk;
   }
  });
  if (currentSex.value == 'male') {
   return (
    10 * parseFloat(weight.value) +
    6.25 * parseFloat(height.value) -
    5 * age.value +
    5
   );
  } else {
   return (
    10 * parseFloat(weight.value) +
    6.25 * parseFloat(height.value) -
    5 * age.value +
    161
   );
  }
 }
};

calcButton.addEventListener('click', () => {
 checkValues(age);
 checkValues(height);
 checkValues(weight);
 calculateBMI(height, weight);
 renderResult(
  calculateBMI(height, weight),
  checkResult(calculateBMI(height, weight))
 );

 caloriesNormal.textContent = calcNormalCalories(height, weight, age, sexInput);
});
