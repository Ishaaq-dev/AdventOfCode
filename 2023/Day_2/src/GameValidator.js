import { DICE_COLOURS } from "./constants.js";
import { getGameId, getGameData } from "./helpers.js";

export function getValidGameId(gameLine, constraints) {
    const gameResult = getGame(gameLine);
    const gameValidation = gameResult.games.map(game => {
        let validSet = true;
        DICE_COLOURS.forEach(diceColour => {
            const quantity = game[diceColour];
            if (quantity && quantity > constraints[diceColour])
                validSet = false;
        });
        return validSet;
    });

    if (gameValidation.includes(false)) 
        return false;
    else 
        return gameResult.id;
}

export function getRequiredNumOfDice(gameLine) {
    const gameResult = getGame(gameLine);
    const requiredNumOfDice = {blue: 0, red: 0, green: 0};

    gameResult.games.forEach(game => {
        DICE_COLOURS.forEach(colour => {
            if (game[colour] > requiredNumOfDice[colour])
                requiredNumOfDice[colour] = game[colour];
        });
    });

    return requiredNumOfDice;
}

export function getPowerOfGame(gameLine) {
    const requiredNumOfDice = getRequiredNumOfDice(gameLine);
    const powerOfGame = Object.keys(requiredNumOfDice).reduce((accumulator, colour) => requiredNumOfDice[colour] * accumulator, 1);
    return powerOfGame; 
}

export function getGame(gameLine) {
    const id = getGameId(gameLine);
    const games = getGameData(gameLine);

    return {id, games}
}