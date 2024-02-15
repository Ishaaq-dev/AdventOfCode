import fs from 'fs';
import { getTotalPointsFromCard, getNumberOfWinningCards, getSumOfCards } from './cardService.js';

const CardData = fs.readFileSync('./Data/input.txt', 'utf-8').split('\n');

export function getSumOfAllCards(data) {
    let sumOfAllCards = 0;

    for (let i = 0; i < data.length; i++) {
        sumOfAllCards += getTotalPointsFromCard(data[i]);
    }

    return sumOfAllCards;
}

export function getTotalNumberOfCards(data) {
    let totalCards = {};

    for (let i=0; i<data.length;i++) {
        totalCards = getNumberOfWinningCards(data[i], totalCards);
    }

    const totalNumber = getSumOfCards(totalCards);

    return totalNumber;
}