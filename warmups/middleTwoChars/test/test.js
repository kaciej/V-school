let chai = require("chai");
let assert = chai.assert;

let midTwoChars = require("../app.js");

describe("Function to find middle two chars", () => {
    it("Should return a string containing the middle two characters of a given string", () => {
        assert.equal(midTwoChars("bubble"), "bb");
        assert.equal(midTwoChars("orange"), "an");
    })
    it("Should throw an error if the string is not of even length", () => {
        assert.throws(() => {midTwoChars("the")}, "String is odd");
        assert.throws(() => {midTwoChars("allen")}, "String is odd");
    })
    it("Should throw an error if there is an empty str passed", () => {
        assert.throws(() => {midTwoChars("")}, "String is empty");
    })
})