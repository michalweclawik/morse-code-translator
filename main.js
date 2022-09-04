import {
    translateToMorse,
    translateToEnglish

} from "./translator.js";


const translatorForm = document.querySelector(".translator");
const translatorInput = document.querySelector(".translator__input");
const englishHeading = document.querySelector(".english-heading");
const morseCodeHeading = document.querySelector(".morse-heading");
const translationField = document.getElementById("translation");
const whenEnglish = document.querySelector(".english-heading");
const whenMorse = document.querySelector(".morse-heading");

morseCodeHeading.classList.add("morse-active")

const displayTranslationFunction = (e) => {
    e.preventDefault();
    if (whenMorse.classList.contains("morse-active")) {
        // tomorse
        return translationField.innerHTML = translateToMorse(translatorInput.value)
    }
    if (whenEnglish.classList.contains("english-active")) {
        // toEng
        return translationField.innerHTML = translateToEnglish(translatorInput.value)
    }
}

const switchToEnglish = () => {
    englishHeading.classList.add("english-active")
    morseCodeHeading.classList.remove("morse-active")
}

const switchToMorse = () => {
    morseCodeHeading.classList.add("morse-active")
    englishHeading.classList.remove("english-active")
}

translatorForm.addEventListener("submit", displayTranslationFunction);
englishHeading.addEventListener("click", switchToEnglish);
morseCodeHeading.addEventListener("click", switchToMorse);