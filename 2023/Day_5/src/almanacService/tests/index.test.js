import { expect } from 'chai';
import { getTransformations } from "../index.js";
import { TestData } from '../../../tests/testData.js';

describe('getTransformations()', () => {
    it('returns transformations for each seed', () => {
        const input = TestData.ReadAlmanac;
        const expectedResult = {
            79: {
                soil: 81,
                fert: 81,
                water: 81,
                light: 74,
                temp: 78,
                humidity: 78,
                location: 82
            },
            14: {
                soil: 14,
                fert: 53,
                water: 49,
                light: 42,
                temp: 42,
                humidity: 43,
                location: 43
            },
            55: {
                soil: 57,
                fert: 57,
                water: 53,
                light: 46,
                temp: 82,
                humidity: 82,
                location: 86
            },
            13: {
                soil: 13,
                fert: 52,
                water: 41,
                light: 34,
                temp: 34,
                humidity: 35,
                location: 35
            }
        };

        const result = getTransformations(input);
        expect(result).to.deep.equal(expectedResult);
    });
});
