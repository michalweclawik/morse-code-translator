import {
    translateToMorse
} from "./translator";

describe("Testing translateToMorse, turn 'a' in to morse code", () => {
    it("a should translate to be *-", () => {
        // Arrange
        let string;
        // Act
        string = "a";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("*-")
    })

})