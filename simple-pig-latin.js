// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.

//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str) {
    return str
        .split(' ')
        .map(word => {
            // if it's a single non-letter character (like "!" or "?"), leave it
            // if (word.length === 1 && !isLetter(word[0])) {
            //     return word;
            // }

            if (word.length === 1 && !/[a-z]/i.test(word[0])) {
                return word;
            }
            // otherwise, treat it as a word: move first letter to end + "ay"
            // word.slice(1) → "ello"
            // word[0] → "H"
            return word.slice(1) + word[0] + 'ay';
        })
        .join(' ');                     // join words back into a sentence
}

// helper: check if a character is a letter (A–Z or a–z)
function isLetter(ch) {
    const code = ch.charCodeAt(0);
    return (
        (code >= 65 && code <= 90) || // 'A'–'Z'
        (code >= 97 && code <= 122) // 'a'–'z'
    )
}

function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}