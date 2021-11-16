const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should shift each letter of a string right or left in the alphabet according to shift value", () => {
        const actual = caesar("thinkful is the best", -4);
        const expected = "pdejgbqh eo pda xaop"
        expect(actual).to.equal(expected);
    });
    it("should return a string", () => {
        const actual = caesar("hello world!", 8);
        expect(actual).to.be.a("string");
    });
    it("should return false if shift is not between -25 and 25", () => {
        const actual = caesar("hello world!", 30);
        expect(actual).to.be.false;
    });
    it("should decode the message if encode is false", () => {
        const actual = caesar("pdejgbqh eo pda xaop", -4, false);
        const expected = "thinkful is the best"
        expect(actual).to.equal(expected);
    });

});