"use strict";

var _translator = require("./translator.js");

var translatorForm = document.querySelector(".translator");
var translatorInput = document.querySelector(".translator__input");
var englishHeading = document.querySelector(".english-heading");
var morseCodeHeading = document.querySelector(".morse-heading");
var translationField = document.getElementById("translation");
var whenEnglish = document.querySelector(".english-heading");
var whenMorse = document.querySelector(".morse-heading");
morseCodeHeading.classList.add("morse-active");

var displayTranslationFunction = function displayTranslationFunction(e) {
  e.preventDefault();

  if (whenMorse.classList.contains("morse-active")) {
    // tomorse
    return translationField.innerHTML = (0, _translator.translateToMorse)(translatorInput.value);
  }

  if (whenEnglish.classList.contains("english-active")) {
    // toEng
    return translationField.innerHTML = (0, _translator.translateToEnglish)(translatorInput.value);
  }
};

var switchToEnglish = function switchToEnglish() {
  englishHeading.classList.add("english-active");
  morseCodeHeading.classList.remove("morse-active");
};

var switchToMorse = function switchToMorse() {
  morseCodeHeading.classList.add("morse-active");
  englishHeading.classList.remove("english-active");
};

translatorForm.addEventListener("submit", displayTranslationFunction);
englishHeading.addEventListener("click", switchToEnglish);
morseCodeHeading.addEventListener("click", switchToMorse);