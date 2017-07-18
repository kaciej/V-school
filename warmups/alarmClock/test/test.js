let chai = require("chai");
let assert = chai.assert;

let alarmClock = require("../app.js");



describe("Alarm clock funciton that returns the time as a string of words", () => {
    it("Should given the time in format xx:xx return it in a string of words", () => {
        assert.equal(alarmClock("13:02"), "It's one two pm"),
        assert.equal(alarmClock("00:00"), "It's midnight"),
        assert.equal(alarmClock("01:30"), "It's one thirty am")
    });
    it("Should throw an error if given a time in the wrong format", () => {
        assert.throw(() => {alarmClock("hello")}, "not valid input");
    });
})