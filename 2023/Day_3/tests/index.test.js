import fs from 'fs'
import { expect } from "chai";
import { getSumOfPartNumbers } from "../src/index.js";
import { Scenario } from "./testData.js";

describe('getSumOfPartnumbers()', () => {
    it('should return 4361', () => {
        const input = Scenario.full, expectedResult = 4361;
        console.log(input);
        const result = getSumOfPartNumbers(input);
        expect(result).to.equal(expectedResult);
    });
    it('should return 544664', () => {
        const gearRatioData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');
        const input = gearRatioData, expectedResult = 544664;
        console.log(input);
        const result = getSumOfPartNumbers(input);
        expect(result).to.equal(expectedResult);
    });
});