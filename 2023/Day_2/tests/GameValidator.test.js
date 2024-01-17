import { expect } from 'chai';
import { getGameData, getValidGameId } from "../src/GameValidator.js";

describe('getValidGameId()', () => {

});

describe('getGameData()', () => {

    describe('it should return gameId and number of each coloured dice in each set in an object', () => {
        it('GameId: 1 | 4b 4r | 1r 2g 6b | 2g', () => {
            const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';

            const result = getGameData(input);
            expect(result).to.deep.equal({
                id: 1,
                games: [
                    {blue: 3, red: 4},
                    {red: 1, green: 2},
                    {blue: 6,green: 2}
                ]
            });
        })
    });
});