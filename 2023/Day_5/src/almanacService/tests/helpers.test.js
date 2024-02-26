import { expect } from "chai";
import { applyTransformation, getValidLine } from "../helpers.js";
import { TestData } from "../../../tests/testData.js"

describe('getValidLine()', () => {
    describe('returns correct line given:', () => {
        it('is passed seedToSoil & value 79', () => {
            const input = {
                map: TestData.ReadAlmanac.maps.seedToSoil,
                value: 79
            }
            const expectedResult = [52, 50, 48];

            const result = getValidLine(input.map, input.value);
            expect(result).to.deep.equal(expectedResult);
        });

        it('is passed seedToSoil & value 55', () => {
            const input = {
                map: TestData.ReadAlmanac.maps.seedToSoil,
                value: 55
            }
            const expectedResult = [52, 50, 48];

            const result = getValidLine(input.map, input.value);
            expect(result).to.deep.equal(expectedResult);
        });
    });

    describe('returns false given it is passed a value for no valid line exists ', () => {
        it('is passed seedToSoil & value 14', () => {
            const input = {
                map: TestData.ReadAlmanac.maps.seedToSoil,
                value: 14
            }
            const expectedResult = false;

            const result = getValidLine(input.map, input.value);
            expect(result).to.deep.equal(expectedResult);
        });

        it('is passed seedToSoil & value 13', () => {
            const input = {
                map: TestData.ReadAlmanac.maps.seedToSoil,
                value: 13
            }
            const expectedResult = false;

            const result = getValidLine(input.map, input.value);
            expect(result).to.deep.equal(expectedResult);
        });
    })
});

describe('applyTransformation()', () => {
    describe('given a validLine is passed it returns a transformed value', () => {
        it('seedToSoil -> seed = 79', () => {
            const input = {
                validLine: [52, 50, 48],
                value: 79
            };
            const expectedResult = 81;

            const result = applyTransformation(input.validLine, input.value);
            expect(result).to.equal(expectedResult);
        });
    });

    describe('given no validLine is passed it returns the same value', () => {
        it('soilToFert ->  soil = 81', () => {
            const input = {
                validLine: false,
                value: 81
            };
            const expectedResult = 81;

            const result = applyTransformation(input.validLine, input.value);
            expect(result).to.equal(expectedResult);
        });
    })
});
