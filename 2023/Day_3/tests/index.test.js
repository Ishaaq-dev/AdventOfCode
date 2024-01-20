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
});