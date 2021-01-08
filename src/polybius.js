const polybiusSquare = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', '*i/j*', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
];


function polybius(input, encode = true) {
    result = '';

    //Check if input needs to be encoded or decoded
    if (encode) {
        //Start with looping through input
        for (letter of input.toLowerCase()) {
            //Next refrence the polybiusSquare to find the number pair for each letter.
            if (letter === 'j' || letter === 'i') {
                result += '42';
                continue;
            } else if (letter === ' ') {
                result += `00`
            }
            for (row in polybiusSquare) {
                //Now that we have the row number we can match the column of current letter.
                for (column in polybiusSquare[row]) {
                    if (polybiusSquare[row][column] === letter) {
                        result += `${+column + 1}${+row + 1}`;
                    }
                }
            }
        }

    } else {
        //Start by making number pairs
        pairs = [];
        //ensure input is an even number before pairing 
        if (input.length % 2 !== 0) {
            return false;
        }
        //assign pairs
        for (number in input) {
            if (number % 2 !== 0) {
                pairs.push([`${input[+number - 1]}`, `${input[+number]}`])
            }
        }
        console.log(pairs);
        //now lets loop through the pairs
        for (pair of pairs) {
            //check if it is a space
            if (+pair[1] === 0) {
                result += ' ';
            }
            //Next by refrence the polybiusSquare to find the number pair for each letter.
            for (row in polybiusSquare) {
                //Now that we have the row number we can match the column of current letter.
                for (column in polybiusSquare[row]) {
                    if (+pair[0] === +column + 1 && +pair[1] === +row + 1) {
                        result += polybiusSquare[+row][+column];
                    }
                }
            }
        }
    }

    return result;
}

module.exports = polybius;