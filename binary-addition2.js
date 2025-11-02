/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function binaryAddition(a, b) {
    let sum = a + b;
    let binaryStr = ''
    if (sum <= 0) {
        return '0'
    }

    while (sum >= 1) {

        sum /= 2

        if (sum % 1 !== 0) {
            binaryStr += '1'
        }
        else {
            binaryStr += '0'
        }

        sum = Math.floor(sum);
    }

    const reverseStr = binaryStr.split('').reverse().join('');

    return reverseStr;
}