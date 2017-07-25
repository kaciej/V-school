let chai = require("chai");
let assert = assert.chai;

let longSub = require("../app.js")

let tests = {
    norpt: "abcdefg",
    allRpt: "aaaaa",
    someRpt: "abcdabcdefg",
    one: "a",
    adjRpt: "hhaaapppyy",
    mix: "haapyhapp"
}

describe("First longest repeated substring", () => {
    it("Should return the whole string for no repeats", () => {
        assert.equal(longSub(tests.norpt), "abcdefg");
    })
    it("Should return the first character if all repeats", () => {
        assert.equal(longSub(tests.allRpt), "aaaa")
    })
    it("Should return ")
})