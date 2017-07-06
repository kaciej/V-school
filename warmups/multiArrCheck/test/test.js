let chai = require("chai");
let assert = chai.assert;

let arrDataType = require("../app.js");

describe("Check if a multi dem array has all the same data types.", () => {
  it("Should return true if the array has all the same data types.", () => {
    assert.equal(arrDataType([[2,4,5,6,6],[2,4,5,6,6]]), true);
    assert.equal(arrDataType([["fe","huh", "bud", "did"], ["fe","huh", "bud", "did"]]), true);
  });
  it("Should return false if the multi dem array doen't have like data types.", () => {
    assert.equal(arrDataType([[2,4,5,"6",6], ["fe","huh", true, "did"]]), false);
    assert.equal(arrDataType([[2,4,5,false,6], ["fe","huh", "bud", "did"]]), false);
  })
});
