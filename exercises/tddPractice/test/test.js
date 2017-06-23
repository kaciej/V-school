var chai = require("chai");
var assert = chai.assert;

var funks = require("../app.js");


describe("Test for last digit same", function () {
    it("Should return true if the number last same last digit", function () {
        assert.equal(funks.lastTwo(42, 3332), true);
        assert.equal(funks.lastTwo(77, 5687), true);
    });
    it("Should return true if the number last same last digit", function () {
        assert.equal(funks.lastTwo(46, 3332), false);
        assert.equal(funks.lastTwo(78, 5687), false);
    });
});

describe("Take first and last letters off string", function (){
    it("Should return the string without the first and last character", function(){
        assert.equal(funks.chopped("hello"), "ell");
        assert.equal(funks.chopped("yo"), "");
    });
})
