import fs from 'fs';
import { getPowerOfGame, getValidGameId } from "./GameValidator.js";

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

function getPowerOfAllGames() {
    const sumOfAllPowers = gameData.reduce((acc, gameLine) => acc + getPowerOfGame(gameLine), 0);
    return sumOfAllPowers;
}

console.log('Sum of valid Game Ids: ', getSumOfPossibleGameIds(12, 13, 14));
console.log('Sum of all powers: ', getPowerOfAllGames());