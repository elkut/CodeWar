// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

//     Examples
// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((
function duplicateEncode(word) {
    return word
        .toLoweCase()
        .split('')
        .map((a, w) => w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')')
        .join('')
}


function duplicateEncode(word) {
    const s = word.toLowerCase();

    const counts = {}
    for (const ch of s) {
        counts[ch] = (counts[ch] || 0) + 1
    }

    let result = ''
    for (const ch of s) {
        if (counts[ch] !== 1) {
            result += '('
        } else {
            result += ')'
        }
    }

    return result;
}
