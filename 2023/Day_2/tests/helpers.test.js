import { expect } from "chai";
import { getGameId } from "../src/helpers.js";

describe('getGameId()', () => {
    describe('should return gameId as an int', () => {
        it('Game 1: 1 green, 2 blue; 15 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue', () => {
            const input = 'Game 1: 1 green, 2 blue; 15 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue';
            const expectedResult = 1;

            const result = getGameId(input)
            expect(result).to.equal(expectedResult);
        });
    });
});