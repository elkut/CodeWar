// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8(1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    if (x === '') {
        return x;
    }


    const words = x.split(' ');

    let score = 0;
    let highestScore = 0;
    let highestScoreIndex = 0;


    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            score += words[i].charCodeAt(j) - 96;
        }

        if (score > highestScore) {
            highestScore = score;
            highestScoreIndex = i;
        }
        score = 0;
    }

    return words[highestScoreIndex];

}