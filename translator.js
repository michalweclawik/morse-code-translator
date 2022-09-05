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
    console.log("arrayFromStrings")

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
}