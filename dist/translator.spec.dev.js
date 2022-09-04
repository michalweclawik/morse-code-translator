"use strict";

var _translator = require("./translator");

describe("Testing translateToMorse, turn 'a' in to morse code", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = "a";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".-");
  });
});
describe("Testing translateToMorse, turn 'Sunny Sunday' in to morse code to test capital letters and space", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = "Sunny Sunday";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("... ..- -. -. -.-- / ... ..- -. -.. .- -.--");
  });
});
describe("Testing translateToMorse, turn '1 2 3 4 5 ' in to morse code to test numbers and space", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = "1 2 3 4 5 ";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".---- / ..--- / ...-- / ....- / ..... /");
  });
});
describe("Testing translateToMorse, turn 'How are you?' in to morse code to test letters,  space, question mark ", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = "How are you?";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".... --- .-- / .- .-. . / -.-- --- ..- ..--..");
  });
});
describe("Testing translateToEnglish, turn .... --- .-- / .- .-. . / -.-- --- ..- ..--..  in to english, testing  space, question mark ", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = ".... --- .-- / .- .-. . / -.-- --- ..- ..--..";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe("HOW ARE YOU?");
  });
});
describe("Testing translateToEnglish, turn .---- / ..--- / ...-- / ....- / ..... /  in to numbers, testing  space", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = ".---- / ..--- / ...-- / ....- / ..... /";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe("1 2 3 4 5 ");
  });
});
describe("Testing translateToEnglish, turn .-- .... .- - / .. ... / -.-- --- ..- / -. .- -- .  in to numbers, testing  space", function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = ".-- .... .- - / .. ... / -.-- --- ..- .-. / -. .- -- . ..--..";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe("WHAT IS YOUR NAME?");
  });
});
describe('Testing translateToEnglish, turn .-..-. / -..-. / -.--. / -.--.- / ---... /  in to " / ( ) :', function () {
  it("a should translate to be *-", function () {
    // Arrange
    var string; // Act

    string = ".-..-. / -..-. / -.--. / -.--.- / ---... /";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe('" / ( ) : ');
  });
});