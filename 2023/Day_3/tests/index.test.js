import fs from 'fs'
import { expect } from "chai";
import { getSumOfPartNumbers } from "../src/index.js";
import { Scenario } from "./testData.js";

describe('getSumOfPartnumbers()', () => {
    it('should return 4361', () => {
        const input = Scenario.full, expectedResult = 4361;
        const result = getSumOfPartNumbers(input);
        expect(result).to.equal(expectedResult);
    });
    it('should return 940', () => {
        const input = Scenario.J, expectedResult = 940;
        const result = getSumOfPartNumbers(input);

        expect(result).to.equal(expectedResult);
    });
    it('should return 544664', () => {
        const gearRatioData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');
        const input = gearRatioData, expectedResult = 544664;
        const result = getSumOfPartNumbers(input);
        expect(expectedResult - result).to.equal(0);
        expect(result).to.equal(expectedResult);
    });
    it('Part II - should return 467835', () => {
        const input = Scenario.full, expectedResult = 467835;
        const result = getSumOfPartNumbers(input);
        expect(result).to.equal(expectedResult); 
    });
});