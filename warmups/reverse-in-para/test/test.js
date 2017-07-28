let chai = require("chai");
let assert = chai.assert;

let reverseInPara = require("../app.js");

let tests = {
    middle: "something(inside)parentheses",
    entire: "(paras)",
    left: "(left)side",
    right: "right(side)",
}

describe("A function to reverse whatever is in the parenthesis.", () => {
    it("Should return a string with the para chars reversed.", () => {
        assert.equal(reverseInPara(tests.middle), "somethingedisniparentheses");
        assert.equal(reverseInPara(tests.entire), "sarap");
        assert.equal(reverseInPara(tests.left), "tfelside");
        assert.equal(reverseInPara(tests.right), "rightedis");
    });
})