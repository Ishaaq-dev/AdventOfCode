import fs from 'fs';
import { getValidGameId } from "./GameValidator.js";

const gameData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getSumOfPossibleGameIds(red, green, blue) {
    const constaints = {red, green, blue};

    const sumOfValidGameIds = gameData.reduce((accumulator, gameLine) => {
        const gameId = getValidGameId(gameLine, constaints);
        if(gameId) return accumulator + gameId;
        else return accumulator;
    }, 0);

    return sumOfValidGameIds;
}

console.log('Sum of valid Game Ids: ', getSumOfPossibleGameIds(12, 13, 14));