import { expect } from "chai";
import { getSeedWithLowestProperty, performTransformations } from "../almanacService.js";
import { TestData } from "../../../tests/testData.js"

describe('performTransformation()', () => {
    describe('returns an object containing all correct transformations for each item', () => {
        it('seed 79', () => {
            const input = {
                maps: TestData.ReadAlmanac.maps,
                seed: 79
            }

            const expectedResult = {
                soil: 81,
                fert: 81,
                water: 81,
                light: 74,
                temp: 78,
                humidity: 78,
                location: 82
            }

            const result = performTransformations(input.maps, input.seed);
            expect(result).to.deep.equal(expectedResult);
        });

        it('seed 14', () => {
            const input = {
                maps: TestData.ReadAlmanac.maps,
                seed: 14
            }

            const expectedResult = {
                soil: 14,
                fert: 53,
                water: 49,
                light: 42,
                temp: 42,
                humidity: 43,
                location: 43
            }

            const result = performTransformations(input.maps, input.seed);
            expect(result).to.deep.equal(expectedResult);
        });

        it('seed 55', () => {
            const input = {
                maps: TestData.ReadAlmanac.maps,
                seed: 55
            }

            const expectedResult = {
                soil: 57,
                fert: 57,
                water: 53,
                light: 46,
                temp: 82,
                humidity: 82,
                location: 86
            }

            const result = performTransformations(input.maps, input.seed);
            expect(result).to.deep.equal(expectedResult);
        });

        it('seed 13', () => {
            const input = {
                maps: TestData.ReadAlmanac.maps,
                seed: 13
            }

            const expectedResult = {
                soil: 13,
                fert: 52,
                water: 41,
                light: 34,
                temp: 34,
                humidity: 35,
                location: 35
            }

            const result = performTransformations(input.maps, input.seed);
            expect(result).to.deep.equal(expectedResult);
        });
    });
});

describe('getSeedWithLowestProperty()', () => {
    it('Location: should return 35', () => {
        const input = {
            transformedAlmanac: TestData.TransformedAlmanac,
            property: 'location'
        }
        const expectedResult = 35;
        const result = getSeedWithLowestProperty(input.transformedAlmanac, input.property);
        expect(result.location).to.equal(expectedResult);
    })
})