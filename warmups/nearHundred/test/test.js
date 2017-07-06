let chai = require ("chai");
let assert = chai.assert;

let nearHun = require("../app.js");

describe("Is it near one hundred?", () => {
  it("Should return true if the number is within 10 of 100 or 200", () => {
    assert.equal(nearHun(94), true);
    assert.equal(nearHun(190), true);
  })
  it("Should return false if the number is more than 10 away from 100 or 200.", () => {
    assert.equal(nearHun(4), false);
    assert.equal(nearHun(177), false);
  })
});
