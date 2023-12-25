function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const hexColor = document.querySelector(".color");

function setRandomHexColor() {
  body.style.background = getRandomHexColor();
  hexColor.textContent = getRandomHexColor();
}

button.addEventListener("click", setRandomHexColor);
