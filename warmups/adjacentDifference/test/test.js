let chai = require("chai");
let assert = chai.assert;

let adjacentDiff = require("../app.js");

let tests = {
    allTheSameLength: ["make", "boot", "crap", "test"],
    tooShort: ["this", "that"],
    allEmpty: ["", "", "", "", ""],
    generic: ["a", "ab", "abc", "abcd", "abcdefg", "x", "jk"]
}

describe("Find the 3 adjacent elements with the longest combined length", () => {
    it("Should return the first set of 3 if they are all the same length", () => {
        assert.deepEqual(adjacentDiff(tests.allTheSameLength), ["make", "boot", "crap"]);
        assert.deepEqual(adjacentDiff(tests.allEmpty), ["", "", ""]);
    })
    it("Should throw an error if the array is shorter than 3 elements.", () => {
        assert.throw(() => {adjacentDiff(tests.tooShort)}, "input is too short");
    })
    it("Should return an array of the combined longest 3 elements.", () => {
        assert.deepEqual(adjacentDiff(tests.generic), ["abc", "abcd", "abcdefg",]);
    })
})