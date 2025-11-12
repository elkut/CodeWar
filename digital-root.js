/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples:
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// sample tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(digitalRoot(16), 7)
        assert.strictEqual(digitalRoot(456), 6)
    });
});

/*
   A number’s digital root equals n % 9, except that for multiples of 9, the result should be 9 (not 0).
    
   Subtract 1 → shifts the range so that multiples of 9 no longer become 0 after modulo.

   % 9 → takes the remainder when divided by 9.

   Add 1 back → restores the range to 1–9.
*/

function digitalRoot(n) {
    return (n - 1) % 9 + 1
}