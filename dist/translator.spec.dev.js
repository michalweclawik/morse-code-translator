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
describe("Testing translateToMorse, testing translation of capital letters and space", function () {
  it("Sunny Sunday translate to ... ..- -. -. -.-- / ... ..- -. -.. .- -.-- ", function () {
    // Arrange
    var string; // Act

    string = "Sunny Sunday";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("... ..- -. -. -.-- / ... ..- -. -.. .- -.--");
  });
});
describe("Testing translateToMorse, testing translation of numbers and space", function () {
  it("1 2 3 4 5 translate to .---- / ..--- / ...-- / ....- / ..... /", function () {
    // Arrange
    var string; // Act

    string = "1 2 3 4 5 ";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".---- / ..--- / ...-- / ....- / ..... /");
  });
});
describe("Testing translateToMorse, testing translation of letters,  space, question mark ", function () {
  it("How are you? should translate to be .... --- .-- / .- .-. . / -.-- --- ..- ..--..", function () {
    // Arrange
    var string; // Act

    string = "How are you?";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".... --- .-- / .- .-. . / -.-- --- ..- ..--..");
  });
});
describe("Testing translateToEnglish, testing translation of  space, question mark ", function () {
  it(".... --- .-- / .- .-. . / -.-- --- ..- ..--..  should translate to be HOW ARE YOU?", function () {
    // Arrange
    var string; // Act

    string = ".... --- .-- / .- .-. . / -.-- --- ..- ..--..";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe("HOW ARE YOU?");
  });
});
describe("Testing translateToEnglish, testing translation of numbers, testing and  space", function () {
  it(".---- / ..--- / ...-- / ....- / ..... / should translate to be 1 2 3 4 5 ", function () {
    // Arrange
    var string; // Act

    string = ".---- / ..--- / ...-- / ....- / ..... /";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe("1 2 3 4 5 ");
  });
});
describe("Testing translateToEnglish,testing translation of simply sentence", function () {
  it(".-- .... .- - / .. ... / -.-- --- ..- .-. / -. .- -- . ..--.. should translate to be WHAT IS YOUR NAME?", function () {
    // Arrange
    var string; // Act

    string = ".-- .... .- - / .. ... / -.-- --- ..- .-. / -. .- -- . ..--..";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe("WHAT IS YOUR NAME?");
  });
});
describe('Testing translateToEnglish, testing translation of  " / ( ) :', function () {
  it('.-..-. / -..-. / -.--. / -.--.- / ---... / should translate to be " / ( ) : ', function () {
    // Arrange
    var string; // Act

    string = ".-..-. / -..-. / -.--. / -.--.- / ---... /";
    var result = (0, _translator.translateToEnglish)(string); // Assert

    expect(result).toBe('" / ( ) : ');
  });
});