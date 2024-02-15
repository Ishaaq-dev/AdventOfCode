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

export function getNumberOfWinningCards(card, totalCardsObj) {
    const cardDetails = getCardDetails(card);
    const cardNumber = cardDetails.cardNumber;
    const quantityOfWinningNums = cardDetails.quantityOfWinningNums;

    if(!totalCardsObj[cardNumber]) totalCardsObj[cardNumber] = {original:1, copies:0};
    else totalCardsObj[cardNumber].original++;

    const numberOfCards = totalCardsObj[cardNumber].original + totalCardsObj[cardNumber].copies;

    for (let j = 0; j < numberOfCards; j++) {
        for (let i=cardNumber+1; i <= cardNumber + quantityOfWinningNums; i++) {
            if(totalCardsObj[i])
                totalCardsObj[i].copies++;
            else 
                totalCardsObj[i] = {original:0, copies:1};
        }
    }

    return totalCardsObj;
}

export function getSumOfCards(totalCardsObj) {
    let sum = 0;
    const keys = Object.keys(totalCardsObj);
    keys.forEach(key => {
        sum += totalCardsObj[key].original;
        sum += totalCardsObj[key].copies;
    });
    return sum;
}