let chai = require("chai");
let assert = chai.assert;

let sleepIn = require("../app.js");

describe("Do you sleep in",() => {
    it("Should return true if on vacation.", () => {
        assert.equal(sleepIn("Saturday", true), true);
        assert.equal(sleepIn("Monday", true), true)
    })
    it("Should return false if vaction is false and it's not the weekend.", () => {
        assert.equal(sleepIn("Tuesday", false), false);
        assert.equal(sleepIn("Thursday", false), false);
    })
    it("Should return true if it's a weekend.", () => {
        assert.equal(sleepIn("Saturday", false), true);
    })
    it("Should throw an error if the weekday input is not a day of the week.", () => {
        assert.thows(() => {sleepIn("blurpday", true)}, "That's not weekday.")
    })
}) 
