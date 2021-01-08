const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function substitution(input, key, encode = true) {
    if (verifyKey(key) === false) {
        return false;
    }
    let result = '';
    if (encode) {
        for (char of input.toLowerCase()) {
            if (char === ' ') {
                result += char;
            }
            for (letter in alphabet) {
                if (char === alphabet[letter]) {
                    result += key[letter];
                    continue;
                }
            }
        }
    } else {
        for (char of input.toLowerCase()) {
            if (char === ' ') {
                result += char;
            }
            for (letter in alphabet) {
                if (char === key[letter]) {
                    result += alphabet[letter];
                    continue;
                }
            }
        }
    }
    return result;
}

function verifyKey(key) {
    if (key.length != 26) {
        return false;
    }

    let checkedValues = Object.create(null);
    for (value of key) {
        if (value in checkedValues) {
            return false;
        } else if (value.length > 1) {
            return false;
        }
        checkedValues[value] = true;
    }
}

module.exports = substitution;