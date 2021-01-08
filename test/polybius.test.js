// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('polybius', () => {
    it('should encode', () => {
        const result = polybius('thinkful');
        expect(result).to.eql('4432423352125413');
    });
    it('should dencode', () => {
        const result = polybius('4432423352125413', false);
        expect(result).to.eql('th*i/j*nkful');
    });
    it('should turn i into 42', () => {
        const result = polybius('i');
        expect(result).to.eql('42');
    });
    it('should turn j into 42', () => {
        const result = polybius('j');
        expect(result).to.eql('42');
    });
    it("should turn 42 into 'i/j'", () => {
        const result = polybius('42', false);
        expect(result).to.eql('*i/j*');
    });
    it("should pass through a space", () => {
        const encoded = polybius('a test');
        const result = polybius(encoded, false);
        expect(result).to.eql('a test');
    });
    it("should pass through if not on plybius square", () => {
        const encoded = polybius('4422644', false);
        expect(encoded).to.eql(false);
    });
});