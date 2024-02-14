import { getQuantityOfWinningNums, getCardDetails } from "./helpers.js";

export function getTotalPointsFromCard(card) {
    let totalPoints = 1;
    const numbers = getCardDetails(card);

    const quantityOfWinningNums = getQuantityOfWinningNums(numbers.winningNums, numbers.playingNums);

    if (quantityOfWinningNums <= 1) return quantityOfWinningNums;
    for (let i = 1; i < quantityOfWinningNums; i++) {
        totalPoints *= 2;
    }

    return totalPoints;
}
