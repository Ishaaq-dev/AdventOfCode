import { expect } from "chai";
import { getNumberOfWinningCards, getSumOfCards, getTotalPointsFromCard } from "../Src/cardService.js";
import { Cards } from "./testData.js";

describe('getTotalPointsFromCard()', () => {
    describe('winning cards -> should return total number of points', () => {
        it('card 1: 8 points', () => {
            const input = Cards.One, expectedResult = 8;
            const result = getTotalPointsFromCard(input);
            expect(result).to.equal(expectedResult);
        });
        it('card Two: 2 points', () => {
            const input = Cards.Two, expectedResult = 2;
            const result = getTotalPointsFromCard(input);
            expect(result).to.equal(expectedResult);
        });
        it('card Three: 2 points', () => {
            const input = Cards.Three, expectedResult = 2;
            const result = getTotalPointsFromCard(input);
            expect(result).to.equal(expectedResult);
        });
        it('card Four: 1 points', () => {
            const input = Cards.Four, expectedResult = 1;
            const result = getTotalPointsFromCard(input);
            expect(result).to.equal(expectedResult);
        });
    });
    describe('losing cards -> should return 0', () => {
        it('card Five: 0 points', () => {
            const input = Cards.Five, expectedResult = 0;
            const result = getTotalPointsFromCard(input);
            expect(result).to.equal(expectedResult);
        });
        it('card Six: 0 points', () => {
            const input = Cards.Six, expectedResult = 0;
            const result = getTotalPointsFromCard(input);
            expect(result).to.equal(expectedResult);
        });
    });
});

describe('getNumberOfWinningCards()', () => {
    it('card One : 4 winning numbers', () => {
        const input = Cards.One, totalCardsObj = {};
        const expectedResult = {
            1: {original: 1, copies: 0},
            2: {original: 0, copies: 1},
            3: {original: 0, copies: 1},
            4: {original: 0, copies: 1},
            5: {original: 0, copies: 1}
        };
        const result = getNumberOfWinningCards(input, totalCardsObj);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Two : 2 winning numbers', () => {
        const input = Cards.Two, totalCardsObj = {
            1: {original: 1, copies: 0},
            2: {original: 0, copies: 1},
            3: {original: 0, copies: 1},
            4: {original: 0, copies: 1},
            5: {original: 0, copies: 1}
        };
        const expectedResult = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 0, copies: 3},
            4: {original: 0, copies: 3},
            5: {original: 0, copies: 1}
        };
        const result = getNumberOfWinningCards(input, totalCardsObj);
        expect(result).to.deep.equal(expectedResult);
    });
    it('card Three : 2 winning numbers', () => {
        const input = Cards.Three, totalCardsObj = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 0, copies: 3},
            4: {original: 0, copies: 3},
            5: {original: 0, copies: 1}
        };
        const expectedResult = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 0, copies: 7},
            5: {original: 0, copies: 5}
        };
        const result = getNumberOfWinningCards(input, totalCardsObj);
        expect(result).to.deep.equal(expectedResult);
    });

    it('card Four : 1 winning numbers', () => {
        const input = Cards.Four, totalCardsObj = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 0, copies: 7},
            5: {original: 0, copies: 5}
        };
        const expectedResult = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 1, copies: 7},
            5: {original: 0, copies: 13}
        };
        const result = getNumberOfWinningCards(input, totalCardsObj);
        expect(result).to.deep.equal(expectedResult);
    });

    it('card Five : 0 winning numbers', () => {
        const input = Cards.Five, totalCardsObj = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 1, copies: 7},
            5: {original: 0, copies: 13}
        };
        const expectedResult = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 1, copies: 7},
            5: {original: 1, copies: 13}
        };
        const result = getNumberOfWinningCards(input, totalCardsObj);
        expect(result).to.deep.equal(expectedResult);
    });

    it('card Six : 0 winning numbers', () => {
        const input = Cards.Six, totalCardsObj = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 1, copies: 7},
            5: {original: 1, copies: 13}
        };
        const expectedResult = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 1, copies: 7},
            5: {original: 1, copies: 13},
            6: {original: 1, copies: 0}
        };
        const result = getNumberOfWinningCards(input, totalCardsObj);
        expect(result).to.deep.equal(expectedResult);
    });
});

describe('getSumOfCards()', () => {
    it('sums up all scratchcards in data obj', () => {
        const input = {
            1: {original: 1, copies: 0},
            2: {original: 1, copies: 1},
            3: {original: 1, copies: 3},
            4: {original: 1, copies: 7},
            5: {original: 1, copies: 13},
            6: {original: 1, copies: 0}
        };
        const expectedResult = 30;
        const result = getSumOfCards(input);
        expect(result).to.equal(expectedResult);
    });
});