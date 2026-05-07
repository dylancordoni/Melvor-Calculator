
function nextLevel(l) {
    return Math.round((1 / 4) * (l - 1 + 300 * Math.pow(2, (l - 1) / 7)));
}

function toLevel(currentLevel, targetLevel) {
    let sum = 0;

    for(let level = currentLevel; level <= targetLevel - 1; level++){
        sum+= level + 300 * Math.pow(2, level / 7);
        sum = Math.round(sum);
    }

    return Math.round((1/4) * sum);
}


console.log(nextLevel(99));
console.log(toLevel(1, 99));