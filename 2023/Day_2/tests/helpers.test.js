import { expect } from "chai";
import { getGameId, getGameData, convertStringGameToObj } from "../src/helpers.js";
import { gameFive, gameFour, gameOne, gameThree, gameTwo } from "./testData.js";

describe('getGameId()', () => {
    describe('should return gameId as an int', () => {
        it('Game 1', () => {
            const input = gameOne;
            const expectedResult = 1;

            const result = getGameId(input)
            expect(result).to.equal(expectedResult);
        });
    });
});

describe('getGameData()', () => {
    describe('should return an object representing each game in an array', () => {
        it('Game 1', () => {
            const input = gameOne;
            const expectedResult = [{blue: 3, red: 4}, {red: 1, green: 2, blue: 6}, {green: 2}];

            const result = getGameData(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 2', () => {
            const input = gameTwo;
            const expectedResult = [{blue: 1, green: 2}, {red: 1, green: 3, blue: 4}, {green: 1, blue: 1}];

            const result = getGameData(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 3', () => {
            const input = gameThree;
            const expectedResult = [{green: 8, blue: 6, red: 20}, {red: 4, green: 13, blue: 5}, {green: 5, red: 1}];

            const result = getGameData(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 4', () => {
            const input = gameFour;
            const expectedResult = [{green: 1, blue: 6, red: 3}, {red: 6, green: 3}, {green: 3, blue: 15, red: 14}];

            const result = getGameData(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Game 5', () => {
            const input = gameFive;
            const expectedResult = [{blue: 1, red: 6, green: 3}, {red: 1, blue: 2, green: 2}];

            const result = getGameData(input);
            expect(result).to.deep.equal(expectedResult);
        });
    });
});

describe('convertStringGameToObj()', () => {
    describe('should return an object representing each game in an array', () => {
        it(' 3 blue, 4 red ', () => {
            const input = ' 3 blue, 4 red ';
            const expectedResult = {blue: 3, red: 4};

            const result = convertStringGameToObj(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it(' 1 red, 2 green, 6 blue', () => {
            const input = ' 1 red, 2 green, 6 blue';
            const expectedResult = {red: 1, green: 2, blue: 6};

            const result = convertStringGameToObj(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it(' 8 green, 6 blue, 20 red', () => {
            const input = ' 8 green, 6 blue, 20 red';
            const expectedResult = {red: 20, green: 8, blue: 6};

            const result = convertStringGameToObj(input);
            expect(result).to.deep.equal(expectedResult);
        });
    });
});