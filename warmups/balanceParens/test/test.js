let chai = require("chai");
let assert = chai.assert;

let balanceParens = require("../app.js");

describe("Function to balance parans", () => {
    it("Should return false if every opening parenthesis does not have a closing one", () => {
        assert.equal(balanceParens("))))missinganopening(("), false);
        assert.equal(balanceParens("()))("), false);
    })
    it("Should return false if every closing does not have a opening on infront of it,", () => {
        assert.equal(balanceParens(")(()"), false);
        assert.equal(balanceParens(")))((("), false);
    })
    it("Should return true if it has equal number of opening and closeing and has an opening before each closing", () => {
        assert.equal(balanceParens("((sometext))"), true);
    })
})