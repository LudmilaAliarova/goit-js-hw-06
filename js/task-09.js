function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector("button.change-color");
const changeBody = document.querySelector("body");

const newColor = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  changeBtn.textContent = document.body.style.backgroundColor;
};
changeBtn.addEventListener("click", newColor);
