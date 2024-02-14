import fs from 'fs';

const CardData = fs.readFileSync('./Data/input.txt', 'utf-8').split('\n');

export function getSumOfAllCards(data) {
    let sumOfAllCards = 0;

    for (let i = 0; i < data.length; i++) {
        sumOfAllCards += getTotalPointsFromCard(data[i]);
    }

    return sumOfAllCards;
}