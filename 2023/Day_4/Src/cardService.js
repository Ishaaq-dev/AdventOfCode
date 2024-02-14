import { getQuantityOfWinningNums, getCardDetails } from "./helpers.js";

export function getTotalPointsFromCard(card) {
    const numbers = getCardDetails(card);

    const quantityOfWinningNums = getQuantityOfWinningNums(numbers.winningNums, numbers.playingNums);

    if (quantityOfWinningNums <= 1) return quantityOfWinningNums;
    let totalPoints = 1;
    for (let i = 1; i < quantityOfWinningNums; i++) {
        totalPoints *= 2;
    }

    return totalPoints;
}
