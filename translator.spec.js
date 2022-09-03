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
describe("Testing translateToMorse, turn 'Sunny Sunday' in to morse code to test capital letters and space", () => {
    it("a should translate to be *-", () => {
        // Arrange
        let string;
        // Act
        string = "Sunny Sunday";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("... ..- -. -. -.-- / ... ..- -. -.. .- -.--")
    })

})
describe("Testing translateToMorse, turn '1 2 3 4 5 ' in to morse code to test numbers and space", () => {
    it("a should translate to be *-", () => {
        // Arrange
        let string;
        // Act
        string = "1 2 3 4 5 ";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".---- / ..--- / ...-- / ....- / ..... /")
    })

})
describe("Testing translateToMorse, turn 'How are you?' in to morse code to test letters,  space, question mark ", () => {
    it("a should translate to be *-", () => {
        // Arrange
        let string;
        // Act
        string = "How are you?";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".... --- .-- / .- .-. . / -.-- --- ..- ..--..")
    })

})
describe("Testing translateToEnglish, turn .... --- .-- / .- .-. . / -.-- --- ..- ..--..  in to english, testing  space, question mark ", () => {
    it("a should translate to be *-", () => {
        // Arrange
        let string;
        // Act
        string = ".... --- .-- / .- .-. . / -.-- --- ..- ..--..";

        let result = translateToEnglish(string);
        // Assert
        expect(result).toBe("HOW ARE YOU?")
    })

})