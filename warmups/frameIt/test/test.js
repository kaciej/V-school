let chai = require("chai");
let assert = chai.assert;

let frameIt = require("../app.js");


describe("Frames a string into and array of characters", () => {
    it("Should return a word in a multi demsitonal array", () => {
        assert.deepEqual(frameIt("Kacie"), [
            ["*","*","*","*","*","*","*"],
            ["*","K","a","c","i","e","*"],
            ["*","*","*","*","*","*","*"]
            ])
    });
})