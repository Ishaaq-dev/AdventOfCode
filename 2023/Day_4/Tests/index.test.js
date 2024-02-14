import { expect } from "chai";
import { getSumOfAllCards } from "../Src/index.js";
import { Cards } from "./TestData.js";

describe('getSumOfAllCards()', () => {
    describe('Part I', () => {
        it('should return 13', () => {
            const input = Cards.All, expectedResult = 13;
            const result = getSumOfAllCards(input);
            expect(result).to.equal(expectedResult);
        });
    });
});