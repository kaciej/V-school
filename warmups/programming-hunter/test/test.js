let chai = require("chai");
let assert = chai.assert;

let matchingWords = require("../index.js");

describe("Print repeated words.", () => {
   it("If two words are repeated print them to the screen.", () => {
       assert.deepEqual(matchingWords("are are you"), ["are"]);
       assert.deepEqual(matchingWords("and and and blue blue or")["and", "blue"]);
       assert.deepEqual(matchingWords("Hello its me you silly hello me")["hello", "me"]);
   });
   it("If the word is not repeasted don't print it.", () => {
       assert.deepEqual(matchingWords("hello I dont know but this").length, 0);
   });
});