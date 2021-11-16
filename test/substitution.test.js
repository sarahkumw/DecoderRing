const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if alphabet is not a string", () => {
        const actual = substitution("hello world", 53);
        expect(actual).to.be.false;      
    });
    it("should return false if alphabet is not exactly 26 characters", () => {
        const actual = substitution("hello world", "qwertyuiop");
        expect(actual).to.be.false;  
    });
    describe("encoding message", () => {
        it("should change the letter in input to the corresponding new alphabet character", () => {
            const actual = substitution("software engineer", "qwertyuiopasdfghjklzxcvbnm");
            const expected = "lgyzvqkt tfuofttk";
            expect(actual).to.equal(expected);  
        });
        it("should keep spaces as they are", () => {
            const actual = substitution("coding is so fun", "mnbvcxzlkjhgfdsapoiuytrewq");
            const expected = "bsvkdz ki is xyd";
            expect(actual).to.equal(expected);  
        });
    });
    
    describe("decoding message", () => {
        it("should change each letter of the input to the corresponding letter of the alphabet", () => {
            const actual = substitution("lmaaw ulmdhizktkdz", "mnbvcxzlkjhgfdsapoiuytrewq", false);
            const expected = "happy thanksgiving"; 
            expect(actual).to.equal(expected); 
        });
        it("should keep spaces as they are", () => {
            const actual = substitution("l datz valz hyo zkg vggwgtf", "asdfghjklqwertyuiopzxcvbnm", false);
            const expected = "i cant wait for the weekend"; 
            expect(actual).to.equal(expected); 
        });
        it("should ignore capital letters", () => {
            const actual = substitution("!skybi Su Cl%skM", "zxcvbnm@s$fg%klpoiuytr!ewq", false);
            const expected = "winter is coming"; 
            expect(actual).to.equal(expected); 
        });
    });
});