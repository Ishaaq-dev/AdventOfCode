import { expect } from "chai";
import { getTotalPointsFromCard } from "../Src/cardService.js";
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
