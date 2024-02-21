import { expect } from 'chai';
import { TestData } from '../../../tests/testData.js';
import { getData, getSeeds, getValues } from '../readerService.js';
import { Constants } from '../constants.js';
const Maps = Constants.Maps, MapTitles = Constants.MapTitles;

describe('getData()', () => {
    it('returns false given an empty line', () => {
        const input = '', expectedResult = false;
        const result = getData(input);
        expect(result).to.equal(expectedResult);
    });

    it('returns seed object containing seeds when passed seed string', () => {
        const input = TestData.Seeds, expectedResult = {seeds: [79, 14, 55, 13]};
        const result = getData(input);
        expect(result).to.deep.equal(expectedResult);
    });

    it('returns an int array of values', () => {
        const input = TestData.SeedToSoilMaps[0], expectedResult = [50, 98, 2];
        const result = getData(input);
        expect(result).to.deep.equal(expectedResult);
    });

    it('returns string representing the map', () => {
        const input = Maps.SeedToSoil, expectedResult = MapTitles.SeedToSoil;
        const result = getData(input);
        expect(result).to.equal(expectedResult);
    });
});

describe('getSeeds()', () => {
    it('returns false if data passed is not in correct format', () => {
        const input = '', expectedResult = false;
        const result = getSeeds(input);
        expect(result).to.equal(expectedResult);
    });

    it('returns seeds as an array of ints given correct input is passed', () => {
        const input = TestData.Seeds, expectedResult = [79, 14, 55, 13];
        const result = getSeeds(input);
        expect(result).to.deep.equal(expectedResult);
    });
});

describe('getValues()', () => {
    it('returns an int array of values', () => {
        const input = TestData.SeedToSoilMaps[0], expectedResult = [50, 98, 2];
        const result = getValues(input);
        expect(result).to.deep.equal(expectedResult);
    });
});