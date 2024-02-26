import { expect } from 'chai';
import { getLocations } from "../index.js";
import { TestData } from '../../../tests/testData.js';

describe('getLocations()', () => {
    it('returns locations for each seed', () => {
        const input = TestData.ReadAlmanac;
        //destination value : seed number
        const expectedResult = {
            35: 13,
            86: 55,
            43: 14,
            82: 79
        };

        const result = getLocations(input);
        expect(result).to.deep.equal(expectedResult);
    });
});
