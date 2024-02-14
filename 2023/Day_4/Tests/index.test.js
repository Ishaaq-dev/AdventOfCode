import fs from 'fs';
import { expect } from "chai";
import { getSumOfAllCards } from "../Src/index.js";
import { Cards } from "./testData.js";

describe('getSumOfAllCards()', () => {
    describe('Part I', () => {
        it('should return 13', () => {
            const input = Cards.All, expectedResult = 13;
            const result = getSumOfAllCards(input);
            expect(result).to.equal(expectedResult);
        });
        it('should return 22193', () => {
            const input = fs.readFileSync('./Data/input.txt', 'utf-8').split('\n'), expectedResult = 22193;
            const result = getSumOfAllCards(input);
            expect(result).to.equal(expectedResult);
        });
    });
});