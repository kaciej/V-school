let chai = require("chai");
let assert = chai.assert;

let robbersLang = require("./app.js");

let tests = {
    small: "yo",
    medium: "hello",
    large: "whatisup"
}

describe("Swedish robbers language", () => {
    it("Should return a new string with all consinents followed by an o and then the consinents.", () => {
        assert.equal(robbersLang(tests.small), "yoyo");
        assert.equal(robbersLang(tests.medium), "hohelollolo");
        assert.equal(robbersLang(tests.large), "wowhohatotisosupop");
    })
})