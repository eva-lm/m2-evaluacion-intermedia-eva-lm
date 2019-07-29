"use strict";
const button = document.querySelector(".js-button");

const randomNumber = function(ev) {
    ev.preventDefault(); 
    const select = document.querySelector(".js-select");


button.addEventListener("click", randomNumber);