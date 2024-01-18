import { expect } from 'chai';
import { getGame, getPowerOfGame, getRequiredNumOfDice, getValidGameId } from "../src/GameValidator.js";
import { gameOne, gameTwo, gameThree, gameFour, gameFive } from "./testData.js";

describe('getValidGameId()', () => {
    const constaints = {
        red: 12,
        green: 13,
        blue: 14
    }

    describe('should return the id of a game that does not breach the constaints', () => {
        it('Game 1', () => {
            const input = gameOne, expectedResult = 1;
            const result = getValidGameId(input, constaints);

            expect(result).to.equal(expectedResult);
        });
        it('Game 2', () => {
            const input = gameTwo, expectedResult = 2;
            const result = getValidGameId(input, constaints);

            expect(result).to.equal(expectedResult);
        });
        it('Game 3', () => {
            const input = gameThree, expectedResult = false;
            const result = getValidGameId(input, constaints);

            expect(result).to.equal(expectedResult);
        });
        it('Game 4', () => {
            const input = gameFour, expectedResult = false;
            const result = getValidGameId(input, constaints);

            expect(result).to.equal(expectedResult);
        });
        it('Game 5', () => {
            const input = gameFive, expectedResult = 5;
            const result = getValidGameId(input, constaints);

            expect(result).to.equal(expectedResult);
        });
    });
});

describe('getGame()', () => {
    describe('it should return gameId and number of each coloured dice in each set in an object', () => {
        it('GameId: 1 | 4b 4r | 1r 2g 6b | 2g', () => {
            const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';

            const result = getGame(input);
            expect(result).to.deep.equal({
                id: 1,
                games: [
                    {blue: 3, red: 4},
                    {red: 1, green: 2, blue: 6},
                    {green: 2}
                ]
            });
        })
    });
});

describe('getRequiredNumOfDice()', () => {
    describe('should return required number of dice to complete the game ', () => {
        it('Game 1', () => {
            const input = gameOne, expectedResult = {red: 4, green: 2, blue: 6};

            const result = getRequiredNumOfDice(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 2', () => {
            const input = gameTwo, expectedResult = {red: 1, green: 3, blue: 4};

            const result = getRequiredNumOfDice(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 3', () => {
            const input = gameThree, expectedResult = {red: 20, green: 13, blue: 6};

            const result = getRequiredNumOfDice(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 4', () => {
            const input = gameFour, expectedResult = {red: 14, green: 3, blue: 15};

            const result = getRequiredNumOfDice(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 5', () => {
            const input = gameFive, expectedResult = {red: 6, green: 3, blue: 2};

            const result = getRequiredNumOfDice(input);
            expect(result).to.deep.equal(expectedResult);
        });
    });
});

describe('getPowerOfGame()', () => {
    describe('should return a multiplication of all quantity of dice together', () => {
        it('Game 1', () => {
            const input = gameOne, expectedResult = 48;
            const result = getPowerOfGame(input);

            expect(result).to.equal(expectedResult);
        });
        it('Game 2', () => {
            const input = gameTwo, expectedResult = 12;
            const result = getPowerOfGame(input);

            expect(result).to.equal(expectedResult);
        });
        it('Game 3', () => {
            const input = gameThree, expectedResult = 1560;
            const result = getPowerOfGame(input);

            expect(result).to.equal(expectedResult);
        });
        it('Game 4', () => {
            const input = gameFour, expectedResult = 630;
            const result = getPowerOfGame(input);

            expect(result).to.equal(expectedResult);
        });
        it('Game 5', () => {
            const input = gameFive, expectedResult = 36;
            const result = getPowerOfGame(input);

            expect(result).to.equal(expectedResult);
        });
    });
});