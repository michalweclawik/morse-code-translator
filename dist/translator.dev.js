"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToEnglish = exports.translateToMorse = void 0;
var morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  " ": "/",
  '"': ".-..-.",
  ":": "---...",
  "`": ".----.",
  "-": "-....-",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-"
};

var translateToMorse = function translateToMorse(textInput) {
  var arrayFromStrings = textInput.toUpperCase().split("");
  console.log("arrayFromStrings");
  return arrayFromStrings.map(function (letter) {
    return morseCode[letter] + " ";
  }).join("").trim();
};

exports.translateToMorse = translateToMorse;

var translateToEnglish = function translateToEnglish(textInput) {
  var arrayFromMorse = textInput.split(" ");
  return arrayFromMorse.map(function (letter) {
    return Object.keys(morseCode).find(function (key) {
      return morseCode[key] === letter;
    });
  }).join("");
};

exports.translateToEnglish = translateToEnglish;