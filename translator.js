const morseCode = {
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
    ")": "-.--.-",

}





export const translateToMorse = (textInput) => {



    const arrayFromStrings = textInput.toUpperCase().split("");
    console.log(arrayFromStrings);

    return arrayFromStrings
        .map(letter => morseCode[letter] + " ")
        .join("")
        .trim()
}
export const translateToEnglish = (textInput) => {

    const arrayFromMorse = textInput.split(" ");
    return arrayFromMorse
        .map(letter => Object.keys(morseCode).find(key => morseCode[key] === letter))
        .join("");
    // let reversedmorseCode = {};
    // Object.entries(morseCode).forEach(array => {
    //     let key = array[0];
    //     let value = array[1];
    //     reversedmorseCode[value] = key;
    // })
    // console.log(arrayFromMorse);
    // console.log(arrayFromMorse);
    // return arrayFromMorse
    //     .map(morseletter => reversedmorseCode[morseletter])
    //     .join("")



}
// for (let engletter in morseCode) {
//     if (morseCode.hasOwnProperty(engletter)) {
//         console.log("has property")
//         return Object.keys(morseCode).find(key => morseCode[key] === morseLetter)

// console.log(newarray);
//;

// return arrayFromMorse.map(letter => {
//     for (let key in morseCode) {
//         if (morseCode[key] === letter)
//             return key
//     }



// arrayFromMorse = arrayFromMorse.forEach(element => {
//     for (let key in morseCode) {
//         if (morseCode[key] === element)
//             return key
//     }
// });

// console.log(arrayFromMorse)

// if (morseCode[engletter] === morseLetter)
//     console.log("has property")
// morseLetter = engletter;
// console.log(morseLetter)
// return morseLetter



// letter => {
// return Object.keys(morseCode).filter(key => morseCode[key] === letter)