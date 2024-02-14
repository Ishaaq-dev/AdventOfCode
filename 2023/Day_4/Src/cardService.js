import { getCardDetails } from "./helpers.js";

export function getTotalPointsFromCard(card) {
    const cardDetails = getCardDetails(card);

    const quantityOfWinningNums = cardDetails.quantityOfWinningNums;

    if (quantityOfWinningNums <= 1) return quantityOfWinningNums;
    let totalPoints = 1;
    for (let i = 1; i < quantityOfWinningNums; i++) {
        totalPoints *= 2;
    }

    return totalPoints;
}
