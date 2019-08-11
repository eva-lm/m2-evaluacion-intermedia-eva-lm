"use strict";
const text = document.querySelector(".js-text");
const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const numberTimes = document.querySelector(".number-container");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);


function insertText (feedback) {
  text.innerHTML = feedback;
};
function functionNumber() {
  const generateNumber = parseInt(input.value);

if (generateNumber < myRandomNumber) {
  insertText("Demasiado bajo");
} else if (generateNumber > myRandomNumber) {
  insertText("Demasiado alto");
} else insertText ("¡HAS GANADO, CAMPEONA!");
counter();
};


function counter() {
  numberTimes.innerHTML++;
};

button.addEventListener("click", functionNumber);
