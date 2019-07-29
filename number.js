"use strict";
const button = document.querySelector(".js-button");
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

const functionNumber = function(ev) {
  ev.preventDefault();
  const input = document.querySelector(".js-input");
  const generateNumber = input.value;
  input.innerHTML = generateNumber;

  if (generateNumber < myRandomNumber) {
    const text = document.querySelector(".js-text");
    text.innerHTML = "Demasiado bajo";
  } else if (generateNumber > myRandomNumber) {
    const text = document.querySelector(".js-text");
    text.innerHTML = "Demasiado alto";
  } else if (generateNumber === myRandomNumber) {
    const text = document.querySelector(".js-text");
    text.innerHTML == "¡MUY BIEN CAMPEONA!";
  }
  const numberTimes = document.querySelector(".number-container");
  numberTimes.innerHTML++;
};

button.addEventListener("click", functionNumber);
