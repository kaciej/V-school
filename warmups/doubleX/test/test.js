let chai = require("chai");
let assert = chai.assert;

let doublex = require("../app.js");

describe("Tests double X.", () => {
    it("Should return true if the first x is follwed by and x", () => {
        assert.equal(doublex("Here's two xx"), true);
        assert.equal(doublex("more xx's jijjx"), true);
    });
    it("Should return false if the the first x is not followed by an x.", () => {
        assert.equal(doublex("heres an x and x"), false);
        assert.equal(doublex("box moxx"), false);
    });
});