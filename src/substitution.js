const alpha = 'abcdefghijklmnopqrstuvwxyz';

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
            for (letter in alpha) {
                if (char === alpha[letter]) {
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
            for (letter in alpha) {
                if (char === key[letter]) {
                    result += alpha[letter];
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