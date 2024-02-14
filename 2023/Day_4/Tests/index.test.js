import fs from 'fs';
import { expect } from "chai";
import { getSumOfAllCards, getTotalNumberOfCards } from "../Src/index.js";
import { Cards } from "./testData.js";

describe('getSumOfAllCards()', () => {
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

describe('getTotalNumberOfScratchCards()', () => {
    it('should return 30', () => {
        const input = Cards.All, expectedResult = 30;
        const result = getTotalNumberOfCards(input);
        expect(result).to.equal(expectedResult);
    });
});