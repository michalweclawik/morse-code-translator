import {
    translateToMorse,
    translateToEnglish
} from "./translator";

describe("Testing translateToMorse, turn 'a' in to morse code", () => {
    it("a should translate to be *-", () => {
        // Arrange
        let string;
        // Act
        string = "a";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".-")
    })

})
describe("Testing translateToMorse, testing translation of capital letters and space", () => {
    it("Sunny Sunday translate to ... ..- -. -. -.-- / ... ..- -. -.. .- -.-- ", () => {
        // Arrange
        let string;
        // Act
        string = "Sunny Sunday";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("... ..- -. -. -.-- / ... ..- -. -.. .- -.--")
    })

})
describe("Testing translateToMorse, testing translation of numbers and space", () => {
    it("1 2 3 4 5 translate to .---- / ..--- / ...-- / ....- / ..... /", () => {
        // Arrange
        let string;
        // Act
        string = "1 2 3 4 5 ";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".---- / ..--- / ...-- / ....- / ..... /")
    })

})
describe("Testing translateToMorse, testing translation of letters,  space, question mark ", () => {
    it("How are you? should translate to be .... --- .-- / .- .-. . / -.-- --- ..- ..--..", () => {
        // Arrange
        let string;
        // Act
        string = "How are you?";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".... --- .-- / .- .-. . / -.-- --- ..- ..--..")
    })

})
describe("Testing translateToEnglish, testing translation of  space, question mark ", () => {
    it(".... --- .-- / .- .-. . / -.-- --- ..- ..--..  should translate to be HOW ARE YOU?", () => {
        // Arrange
        let string;
        // Act
        string = ".... --- .-- / .- .-. . / -.-- --- ..- ..--..";

        let result = translateToEnglish(string);
        // Assert
        expect(result).toBe("HOW ARE YOU?")
    })

})
describe("Testing translateToEnglish, testing translation of numbers, testing and  space", () => {
    it(".---- / ..--- / ...-- / ....- / ..... / should translate to be 1 2 3 4 5 ", () => {
        // Arrange
        let string;
        // Act
        string = ".---- / ..--- / ...-- / ....- / ..... /";

        let result = translateToEnglish(string);
        // Assert
        expect(result).toBe("1 2 3 4 5 ")
    })

})
describe("Testing translateToEnglish,testing translation of simply sentence", () => {
    it(".-- .... .- - / .. ... / -.-- --- ..- .-. / -. .- -- . ..--.. should translate to be WHAT IS YOUR NAME?", () => {
        // Arrange
        let string;
        // Act
        string = ".-- .... .- - / .. ... / -.-- --- ..- .-. / -. .- -- . ..--..";

        let result = translateToEnglish(string);
        // Assert
        expect(result).toBe("WHAT IS YOUR NAME?")
    })

})
describe('Testing translateToEnglish, testing translation of  " / ( ) :', () => {
    it('.-..-. / -..-. / -.--. / -.--.- / ---... / should translate to be " / ( ) : ', () => {
        // Arrange
        let string;
        // Act
        string = ".-..-. / -..-. / -.--. / -.--.- / ---... /";

        let result = translateToEnglish(string);
        // Assert
        expect(result).toBe('" / ( ) : ')
    })

})