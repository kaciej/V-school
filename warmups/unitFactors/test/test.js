let chai = require("chai");
let assert = chai.assert;

let getFactors = require("../app.js")

describe("A factorial counter", () => {
    it("Should return prime if the number is prime.", () => {
        assert.equal(getFactors(7), "prime");
        assert.equal(getFactors(5), "prime");
    })
    it("Should return the number of factorials in a number if not prime.", () => {
        assert.equal(getFactors(10), 4);
        assert.equal(getFactors(12), 6);
    })
});