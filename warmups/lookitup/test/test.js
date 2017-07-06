let chai = require("chai");
let assert = chai.assert;

//import code from app.js
let addWord = require("../app.js").addWord;
let lookItUp = require("../app.js").lookItUp;

describe("A dict to add and lookup words.", () => {
    it("Should store the word when added", () => {
        addWord("blueberry", "a blue berry");
        assert.equal(lookItUp("blueberry"), "a blue berry");
        addWord("flower", "a pretty plant");
        assert.equal(lookItUp("flower"), "a pretty plant");
    });
    it("should return null when we lookup a word NOT present,", () => {
        assert.equal(lookItUp("flabbergasted"), null);
        assert.equal(lookItUp("building"), null);
    });
    it("Should return false when word is already present.", () => {
        addWord("aardvark", "ant eater");
        assert.equal(addWord("aardvark", "dummy def"), false);
        addWord("climbing", "crazy");
        assert.equal(addWord("climbing", "dummy def"), false);
    })
});