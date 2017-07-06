var chai = require("chai");
var assert = chai.assert;

var isPalindrome = require("../app.js");

describe("Tests for a palindrome", function (){
    it("Should return true if it is a palindrome", function (){
        assert.equal(isPalindrome("noon"), true);
        assert.equal(isPalindrome("bob"), true);
    });
    it("Should return flase if it's not a palindrome", function(){
        assert.equal(isPalindrome("here I am"), false);
        assert.equal(isPalindrome("poo in the stew"), false);
    });
    it("Should return true if palindrome has caps, special characters", function (){
       assert.equal(isPalindrome("Mom@#$"), true);
        assert.equal(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"), true);
    });
});