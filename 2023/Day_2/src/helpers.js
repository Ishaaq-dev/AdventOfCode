import { PART } from "./constants.js";

function getDataFromLine(gameLine, part) {
    const gameLineSplit = gameLine.split(':');
    return gameLineSplit[part];
}

export function getGameId(gameLine) {
    const gameIdSplit = getDataFromLine(gameLine, PART.GAME_ID);
    const gameId = gameIdSplit.split(" ")[1];
    return parseInt(gameId);
}

export function getGameData(gameLine) {
    const gameDataSplit = getDataFromLine(gameLine, PART.GAME_DATA);
    const stringGames = gameDataSplit.split(";");

    const games = stringGames.map(game => convertStringGameToObj(game));

    return games;
}

export function convertStringGameToObj(diceData) {
    const diceColours = {};
    const diceColoursStr = diceData.split(',');
    diceColoursStr.forEach(diceColour => {
        const diceColourData = diceColour.trim().split(' ');
        const colour = diceColourData[1].trim(), quantity = parseInt(diceColourData[0].trim());
        diceColours[colour] = quantity;
    });
    return diceColours;
}