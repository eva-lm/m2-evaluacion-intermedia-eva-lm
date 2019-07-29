"use strict";
const button = document.querySelector(".js-button");

const functionNumber = function(ev) {
  ev.preventDefault();
  const input = document.querySelector(".js-input");
  const generateNumber = input.value;
  input.innerHTML = generateNumber;

  const randomNumber = Math.random() * 100;
  const number = randomNumber.toFixed(0);

  if (number == 2) {
    const text = document.querySelector(".js-text");
    text.innerHTML = "Holaaa";
  } else {
  }
};

const text = document.querySelector(".js-text");
button.addEventListener("click", functionNumber);
