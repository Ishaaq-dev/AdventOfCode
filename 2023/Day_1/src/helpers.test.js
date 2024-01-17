import { expect } from "chai";
import { NUMBERS } from "./constants.js";
import { convertSpeltNumsToNumbers, getLargestOptionLength, verifyValueWithOptions } from "./helpers.js";

describe('convertSpeltNumsToNumbers()', () => {
    describe('returns all numbers whether string or numeric', () => {
        it('three3ninefive -> 3395', () => {
            const inputData = 'three3ninefive', expectedValue = '3395';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('twosevennnine6467 -> 2796467', () => {
            const inputData = 'twosevennnine6467', expectedValue = '2796467';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('bfjtdslkdbthree4jvvonezqdthreesrghnnbsix -> 34136', () => {
            const inputData = 'bfjtdslkdbthree4jvvonezqdthreesrghnnbsix', expectedValue = '34136';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('s5sevenxrdfr4mhpstgbjcfqckronesix -> 57416', () => {
            const inputData = 's5sevenxrdfr4mhpstgbjcfqckronesix', expectedValue = '57416';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('gsdsr2seven51 -> 2751', () => {
            const inputData = 'gsdsr2seven51', expectedValue = '2751';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('414dzfxfkqkf9onefourmdxh -> 414914', () => {
            const inputData = '414dzfxfkqkf9onefourmdxh', expectedValue = '414914';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('799 -> 799', () => {
            const inputData = '799', expectedValue = '799';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
        it('vtgdx5 -> 5', () => {
            const inputData = 'vtgdx5', expectedValue = '5';

            const response = convertSpeltNumsToNumbers(inputData);
            expect(response).to.equal(expectedValue);
        });
    });
});
describe('getLargestOptionLength()', () => {
    describe('should return the largest length of an option', () => {
        it('o -> 3', () => {
            const expectedValue = 3, option = 'o';

            const response = getLargestOptionLength(NUMBERS[option]);
            expect(response).to.equal(expectedValue);
        });
        it('t -> 5', () => {
            const expectedValue = 5, option = 't';

            const response = getLargestOptionLength(NUMBERS[option]);
            expect(response).to.equal(expectedValue);
        });
        it('f -> 4', () => {
            const expectedValue = 4, option = 'f';

            const response = getLargestOptionLength(NUMBERS[option]);
            expect(response).to.equal(expectedValue);
        });
        it('s -> 5', () => {
            const expectedValue = 5, option = 's';

            const response = getLargestOptionLength(NUMBERS[option]);
            expect(response).to.equal(expectedValue);
        });
        it('e -> 5', () => {
            const expectedValue = 5, option = 'e';

            const response = getLargestOptionLength(NUMBERS[option]);
            expect(response).to.equal(expectedValue);
        });
        it('n -> 4', () => {
            const expectedValue = 4, option = 'n';

            const response = getLargestOptionLength(NUMBERS[option]);
            expect(response).to.equal(expectedValue);
        });
    });
});
describe('verifyValueWithOptions()', () => {
    describe('should return a boolean if the letter in question matches an option', () => {
        describe('three3ninefive', () => {
            describe('positive matches', () => {
                it('i = 0 | j = 3 | value = e | options for t', () => {
                    const i = 0, j = 3, value = 'e', expectedValue = true;
                    const result = verifyValueWithOptions(i, j, value, NUMBERS.t);
                    expect(result).to.equal(expectedValue);
                });
                it('i = 0 | j = 1 | value = h | options for t', () => {
                    const i = 0, j = 1, value = 'h', expectedValue = true;
                    const result = verifyValueWithOptions(i, j, value, NUMBERS.t);
                    expect(result).to.equal(expectedValue);
                });
            });

            describe('negative matches', () => {
                it('i = 0 | j = 2 | value = h | options for t', () => {
                    const i = 0, j = 2, value = 'h', expectedValue = false;
                    const result = verifyValueWithOptions(i, j, value, NUMBERS.t);
                    expect(result).to.equal(expectedValue);
                });
            });
        });
    });
});