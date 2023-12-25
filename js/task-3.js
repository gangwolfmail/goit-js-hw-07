const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const checkInput = () => {
  output.textContent =
    input.value.trim() !== "" ? input.value.trim() : "Anonymous";
};

input.addEventListener("input", checkInput);
