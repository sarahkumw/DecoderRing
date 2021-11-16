const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("encoding message", () => {

        it("should return a string", () => {
            const actual = polybius("message");
            expect(actual).to.be.a("string");
        });
        it("should change the letters to corresponding numbers of Polybius square", () => {
            const actual = polybius("message");
            const expected = "23513434112251";
            expect(actual).to.equal(expected);
        });
        it("should change both 'i' and 'j' to 42", () => {
            const actual = polybius("thinkful is just great");
            const expected = "4432423352125413 4234 42543444 2224511144";
            expect(actual).to.equal(expected);
        });
        it("should keep spaces as they are", () => {
            const actual = polybius("homework rocks");
            const expected = "3243235125432452 2443315234";
            expect(actual).to.equal(expected);
        });

    });

    describe("decoding message", () => {
        it("should keep spaces as they are", () => {
            const actual = polybius("3243235125432452 2443315234", false);
            const expected = "homework rocks";
            expect(actual).to.equal(expected);
        });
        it("should change the numbers to corresponding letters of the Polybius square", () => {
            const actual = polybius("23513434112251", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it("should change 42 to 'i/j'", () => {
            const actual = polybius("4432423352125413 4234 42543444 2224511144", false);
            const expected = "thi/jnkful i/js i/just great";
            expect(actual).to.equal(expected);
        });
        it("should return false if any of the words have an odd amount of numbers", () => {
            const actual = polybius("3243235432452 244331534", false);
            expect(actual).to.be.false;
        });
    });
});