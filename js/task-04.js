let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const btnDecClick = () => {
  counterValue -= 1;
  console.log(counterValue);
  value.textContent = counterValue;
};

const btnInClick = () => {
  counterValue += 1;
  console.log(counterValue);
  value.textContent = counterValue;
};

btnDecrement.addEventListener("click", btnDecClick);
btnIncrement.addEventListener("click", btnInClick);
