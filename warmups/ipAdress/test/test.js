let chai = require("chai");
let assert = chai.assert;

let ipTest = require("../app.js");
let errorMessage = "invalid ip address";

describe("IP address type", () => {
    it("Should return an error if it is a invalid IP address.", () => {
        //includes non-digits except for periods.
        assert.throws(() => {ipTest("ret.abc.efr.ij")}, errorMessage);
        //doesnt contain 3periods
        assert.throws(() => {ipTest("155.165.45")}), errorMessage;
        //not within range of 0 - 255.
        assert.throws(() => {ipTest("455.165.45.01")}, errorMessage);
        // not within the range of 7- 15
        assert.throws(() => {ipTest("1.3.4.")}, errorMessage);
    });
    it("Should return true if a valid IP address"), () => {
        assert.equal(ipTest("0.0.0.0"));
        assert.equal(ipTest("127.0.0.1"));
        assert.equal(ipTest("213.45.143.99"));
        assert.equal(ipTest("45.64.78.12"));
    }
});