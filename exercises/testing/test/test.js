var chai = require("chai");
var assert = chai.assert;

//import code
var cal = require("../app.js");

describe("A calculator", function () {
    it("should return the sum or two munbers", function () {
        assert.equal(cal.add(2, 2), 4);
        assert.equal(cal.add(-1, -1), -2)
    });
    it("should return the difference of two numbers", function () {
        assert.equal(cal.sub(4, 2), 2);
        assert.equal(cal.sub(-2, 1), -3);
    });
    it("should return the quotient of two numbers", function () {
        assert.equal(cal.div(4, 2), 2);
        assert.equal(cal.div(-4, 2), -2);
    });
    it("should return the result of multiplying two numbers", function () {
        assert.equal(cal.mult(2, 2), 4);
        assert.equal(cal.mult(-2, 2), -4);
    });
    it("should return the modulous of two numbers", function () {
        assert.equal(cal.mod(4, 2), 0);
        assert.equal(cal.mod(20, 6), 2);
    });
});