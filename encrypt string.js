// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata.Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
//     The first letter must be converted to its ASCII code.
//     The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
    if (text === '') return text;

    return text
        .split(' ')
        .map(word => {
            if (word.length === 1) {
                return word.charCodeAt(0).toString();
            }

            const first = word.charCodeAt(0);
            const second = word[1];
            const last = word[word.length - 1];

            if (word.length === 2) {
                return first + last;
            }

            const middle = word.slice(2, -1); // word.slice(2, word.length - 1);

            return first + last + middle + second;
        })
        .join(' ');

}