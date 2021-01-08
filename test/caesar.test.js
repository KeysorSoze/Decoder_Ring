// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');

describe('caesar', () => {
    it('should return a string', () => {
        const result = caesar('word', 1);
        expect(result).to.a('String');
    });
    it('a string of "abc" should return "fgh" when shifted 5', () => {
        const result = caesar('abc', 5);
        expect(result).to.eql('fgh');
    });
    it('a string of "fgh" should return "abc" when shifted -5', () => {
        const result = caesar('fgh', -5);
        expect(result).to.eql('abc');
    });
    it('a string of "z" should return "c" when shifted 3', () => {
        const result = caesar('z', 3);
        expect(result).to.eql('c');
    });
    it('a string of "a" should return "c" when shifted -3', () => {
        const result = caesar('a', -3);
        expect(result).to.eql('x');
    });
    it('should ignore capital letters', () => {
        const result = caesar('A', 1);
        expect(result).to.eql('b');
    });
    it('should maintane non alphabetic symbols', () => {
        const result = caesar('test $', 1);
        expect(result).to.eql('uftu $');
    });
    it('should be able to decode as well if a optional third arrgument is provided', () => {
        const result = caesar('higshi', 4, false);
        expect(result).to.eql('decode');
    });
    it('should return automatically false if shift is equal to 0 or no shift', () => {
        const result = caesar('thinkful');
        expect(result).to.eql(false);
    });
    it('should return automatically false if shift is greater than 25', () => {
        const result = caesar('thinkful', 26);
        expect(result).to.eql(false);
    });
    it('should return automatically false if shift is less than -25', () => {
        const result = caesar('thinkful', -26);
        expect(result).to.eql(false);
    });
});