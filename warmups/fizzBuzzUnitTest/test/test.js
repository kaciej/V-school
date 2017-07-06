
let chai = require("chai");
let assert = chai.assert;

let fizzBuzz = require ("../app.js");

describe("FizzBuzz test", () => {
    it("Should return an Arrya where numbers divisible by 3 are Fizz, 5 are Buzz and both are FizzBuzz and none are the num", () => {
        assert.deepEqual(fizzBuzz(), [1,2,"Fizz", 4,"Buzz", "Fizz", 7,8,"Fizz", "Buzz", 11,"Fizz", 13, 14, "FizzBuzz", 16,17,"Fizz", 19, "Buzz"]);
    })
});