
export function xpForLevel(l) {
    return Math.round((1 / 4) * (l - 1 + 300 * Math.pow(2, (l - 1) / 7)));
}

export function xpForMaxLevel(currentLevel, targetLevel) {
    let sum = 0;

    for(let level = currentLevel; level <= targetLevel - 1; level++){
        sum+= level + 300 * Math.pow(2, level / 7);
        sum = Math.round(sum);
    }

    return Math.round((1/4) * sum);
}
