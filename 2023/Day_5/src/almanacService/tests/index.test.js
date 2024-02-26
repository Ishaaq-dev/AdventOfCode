import { expect } from 'chai';
import { getTransformations } from "../index.js";
import { TestData } from '../../../tests/testData.js';

describe('getTransformations()', () => {
    it('returns transformations for each seed', () => {
        const input = TestData.ReadAlmanac;
        const expectedResult = TestData.TransformedAlmanac;

        const result = getTransformations(input);
        expect(result).to.deep.equal(expectedResult);
    });
});
