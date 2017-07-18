let chai = require("chai");
let assert = chai.assert;

let recursiveRpt = require("../app.js");

tests = {
    generic:{
        str: "test",
        count: 2
    },
    neg:{
        str: "test",
        count: -1
    },
    zero:{
        str: "test",
        count: 0
    },
    empty:{
        str: "",
        count: 3
    }
}


describe("Recusive function that returns the reapted string.", () => {
    it("Should throw an error if count is negative entered", () => {
        assert.throw(() => {recursiveRpt(tests.neg.str, tests.neg.count), "Negative number"})
    });
    it("Should throw an error if count is 0 entered", () => {
        assert.throw(() => {recursiveRpt(tests.zero.str, tests.zero.count), "Count is a zero"})
    });
    it("Should throw an error if str if empty entered", () => {
        assert.throw(() => {recursiveRpt(tests.empty.str, tests.empyt.count), "String can't be empty"})
    });
    it("Should return the given string repeated the amount of time in count", () => {
        assert.equal(recursiveRpt(tests.generic.str, tests.generic.count), "testtest");
    });
})