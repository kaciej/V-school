let chai = require("chai");
let assert = chai.assert;

let vowelSeparator = require("../app.js");

let tests = {
    small: "kacie",
    medium: "inspire",
    large: "poop is not fun",
    xl: "baby in the basket"
}

describe("Take an object and return a string of vowels and a string of vowels.",() => {
    it("Should return a string with only the vowels and a string with only the consinents", () => {
        assert.deepEqual(vowelSeparator(tests.small), {noVowels: "kc", vowels: "aie"});
        assert.deepEqual(vowelSeparator(tests.medium), {noVowels: "nspr", vowels: "iie"});
    });
    it("Should return an object with no spaces no and vowels and consinents separated.", () => {
        assert.deepEqual(vowelSeparator(tests.large), {noVowels: "ppsntfn", vowels: "ooiou"});
        assert.deepEqual(vowelSeparator(tests.xl), {noVowels: "bbynthbskt", vowels: "aieae"});
    })
})