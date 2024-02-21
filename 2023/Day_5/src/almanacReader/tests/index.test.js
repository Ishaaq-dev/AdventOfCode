import { expect } from 'chai';
import { readAlmanac } from '../index.js';
import { TestData } from '../../../tests/testData.js';

describe('readAlmanac()', () => {
    it('should return a data object with all maps for each category', () => {
        const input = TestData.Almanac;
        const expectedResult = {
            seeds: [79, 14, 55, 13],
            seedToSoil: [
                [50, 98, 2],
                [52, 50, 48]
            ],
            soilToFert: [
                [0, 15, 37],
                [37, 52, 2],
                [39, 0, 15]
            ],
            fertToWater: [
                [49, 53, 8],
                [0, 11, 42],
                [42, 0, 7],
                [57, 7, 4]    
            ],
            waterToLight: [
                [88, 18, 7],
                [18, 25, 70]
            ],
            lightToTemp: [
                [45, 77, 23],
                [81, 45, 19],
                [68, 64, 13]
            ],
            tempToHumidity: [
                [0, 69, 1],
                [1, 0, 69]
            ],
            humidityToLocation: [
                [60, 56, 37],
                [56, 93, 4]
            ]
        };

        const result = readAlmanac(input);
        expect(result).to.deep.equal(expectedResult);
    });
});