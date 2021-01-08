const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesar(input, shift = 0, encode = true) {
    result = '';
    //start by ensuring the shift ammount is valid
    if (shift === 0 || shift < -25 || shift > 25) {
        return false;
    }

    for (letter of input.toLowerCase()) {
        for (place in alphabet) {
            if (letter === alphabet[place]) {

                //will set shift by either encode or decode
                if (encode) {
                    adjustedLetter = +place + shift;
                } else {
                    adjustedLetter = +place - shift;
                }

                //shift letter
                while (adjustedLetter > 26 || adjustedLetter < 0) {
                    if (adjustedLetter > 26) {
                        adjustedLetter -= 26;
                    } else if (adjustedLetter < 0) {
                        adjustedLetter += 26;
                    }
                }
                result += alphabet[adjustedLetter]
            }
        }
        //will pass through non alphabetic characters without adjustment
        if (!alphabet.includes(letter)) {
            result += letter;
        }
    }
    return result;
}

module.exports = caesar;