function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const hexColor = document.querySelector(".color");

function setRandomHexColor() {
  const color = getRandomHexColor();
  body.style.background = color;
  hexColor.textContent = color;
}

button.addEventListener("click", setRandomHexColor);
