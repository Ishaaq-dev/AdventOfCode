import { expect } from "chai";
import { getValidLine } from "../helpers.js";
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