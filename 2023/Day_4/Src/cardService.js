import { getWinningAndPlayingNums } from "./helpers.js";

export function getTotalPointsFromCard(card) {
    let totalPoints = 1;
    const numbers = getWinningAndPlayingNums(card);

    let quantityOfWinningNums = 0;
    numbers.winningNums.forEach(winningNum => {
        if(numbers.playingNums.includes(winningNum)) quantityOfWinningNums++;
    });

    if (quantityOfWinningNums <= 1) return quantityOfWinningNums;

    for (let i = 1; i < quantityOfWinningNums; i++) {
        totalPoints *= 2;
    }

    return totalPoints;
}
