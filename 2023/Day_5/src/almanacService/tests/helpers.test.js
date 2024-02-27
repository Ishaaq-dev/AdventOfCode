import { expect } from "chai";
import { applyTransformation, getValidLine, transform } from "../helpers.js";
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

describe('transform()', () => {
    describe('it returns tranformed value when given a map and a value', () => {
        describe('seed 79', () => {
            it('transforms seed 79 -> soil 81', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.seedToSoil,
                    value: 79
                };
                const expectedResult = 81;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms soil 81 -> fert 81', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.soilToFert,
                    value: 81
                };
                const expectedResult = 81;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms fert 81 -> water 81', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.fertToWater,
                    value: 81
                };
                const expectedResult = 81;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms water 81 -> light 74', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.waterToLight,
                    value: 81
                };
                const expectedResult = 74;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms light 74 -> temp 78', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.lightToTemp,
                    value: 74
                };
                const expectedResult = 78;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms temp 78 -> humidity 78', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.tempToHumidity,
                    value: 78
                };
                const expectedResult = 78;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms humidity 78 -> Location 82', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.humidityToLocation,
                    value: 78
                };
                const expectedResult = 82;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
        });

        describe('seed 14', () => {
            it('transforms seed 14 -> soil 14', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.seedToSoil,
                    value: 14
                };
                const expectedResult = 14;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms soil 14 -> fert 53', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.soilToFert,
                    value: 14
                };
                const expectedResult = 53;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms fert 53 -> water 49', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.fertToWater,
                    value: 53
                };
                const expectedResult = 49;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms water 49 -> light 42', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.waterToLight,
                    value: 49
                };
                const expectedResult = 42;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms light 42 -> temp 42', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.lightToTemp,
                    value: 42
                };
                const expectedResult = 42;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms temp 42 -> humidity 43', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.tempToHumidity,
                    value: 42
                };
                const expectedResult = 43;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms humidity 43 -> Location 43', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.humidityToLocation,
                    value: 43
                };
                const expectedResult = 43;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
        });

        describe('seed 55', () => {
            it('transforms seed 55 -> soil 57', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.seedToSoil,
                    value: 55
                };
                const expectedResult = 57;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms soil 57 -> fert 57', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.soilToFert,
                    value: 57
                };
                const expectedResult = 57;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms fert 57 -> water 53', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.fertToWater,
                    value: 57
                };
                const expectedResult = 53;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms water 53 -> light 46', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.waterToLight,
                    value: 53
                };
                const expectedResult = 46;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms light 46 -> temp 82', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.lightToTemp,
                    value: 46
                };
                const expectedResult = 82;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms temp 82 -> humidity 82', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.tempToHumidity,
                    value: 82
                };
                const expectedResult = 82;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms humidity 82 -> Location 86', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.humidityToLocation,
                    value: 82
                };
                const expectedResult = 86;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
        });

        describe('seed 13', () => {
            it('transforms seed 13 -> soil 13', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.seedToSoil,
                    value: 13
                };
                const expectedResult = 13;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms soil 13 -> fert 52', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.soilToFert,
                    value: 13
                };
                const expectedResult = 52;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms fert 52 -> water 41', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.fertToWater,
                    value: 52
                };
                const expectedResult = 41;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms water 41 -> light 34', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.waterToLight,
                    value: 41
                };
                const expectedResult = 34;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms light 34 -> temp 34', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.lightToTemp,
                    value: 34
                };
                const expectedResult = 34;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms temp 34 -> humidity 35', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.tempToHumidity,
                    value: 34
                };
                const expectedResult = 35;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
            it('transforms humidity 35 -> Location 35', () => {
                const input = {
                    map: TestData.ReadAlmanac.maps.humidityToLocation,
                    value: 35
                };
                const expectedResult = 35;

                const result = transform(input.map, input.value);
                expect(result).to.equal(expectedResult);
            });
        });
    });
});
