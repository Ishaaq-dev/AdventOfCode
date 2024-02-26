import { expect } from 'chai';
import { readAlmanac } from '../index.js';
import { TestData } from '../../../tests/testData.js';

describe('readAlmanac()', () => {
    it('should return a data object with all maps for each category', () => {
        const input = TestData.Almanac;
        const expectedResult = TestData.ReadAlmanac;

        const result = readAlmanac(input);
        expect(result).to.deep.equal(expectedResult);
    });
});