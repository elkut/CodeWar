// There was a test in your class and you passed it.Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((a, b) => {
        a += b
        return a
    }, 0)
    sum += yourPoints
    const avg = sum / (classPoints.length + 1)

    return yourPoints > sum
}

console.log(betterThanAverage([2, 3], 5))