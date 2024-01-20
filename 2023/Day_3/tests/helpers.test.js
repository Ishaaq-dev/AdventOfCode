import { expect } from 'chai';
import { getPartNumber } from '../src/helpers.js';
import { Scenario } from './testData.js';

describe('getPartNumber()', () => {
    describe('Should return part number of a given index', () => {
        describe('Positive Match', () => {
            it('Scenario One', () => {
                const input = Scenario.One, index = 2, expectedResult = 467;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Three', () => {
                const input = Scenario.Three, index = 7, expectedResult = 633;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Five', () => {
                const input = Scenario.Five, index = 1, expectedResult = 617;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Six', () => {
                const input = Scenario.Six, index = 7, expectedResult = 58;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Seven', () => {
                const input = Scenario.Seven, index = 2, expectedResult = 592;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
        });
        describe('Negative Match', () => {
            it('Scenario Two', () => {
                const input = Scenario.Two, index = 5, expectedResult = false;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
        });
    });
});