import { expect } from 'chai';
import { getPartNumber, getSymbolIndexes } from '../src/helpers.js';
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
            it('Scenario Ten', () => {
                const input = Scenario.Ten, index = 4, expectedResult = false;
                const result = getPartNumber(input, index);

                expect(result).to.equal(expectedResult);
            });
        });
    });
});

describe('getIndexes()', () => {
    describe('Should return an array of indexes matching symbols', () => {
        describe('Positive Matches', () => {
            it('Scenario Two', () => {
                const input = Scenario.Two, expectedResult = [3];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Four', () => {
                const input = Scenario.Four, expectedResult = [6];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Five', () => {
                const input = Scenario.Five, expectedResult = [3];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Six', () => {
                const input = Scenario.Six, expectedResult = [5];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Nine', () => {
                const input = Scenario.Nine, expectedResult = [3, 5];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
        });
        
        describe('Negative Matches', () => {
            it('Scenario One', () => {
                const input = Scenario.One, expectedResult = [];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Three', () => {
                const input = Scenario.Three, expectedResult = [];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Seven', () => {
                const input = Scenario.Seven, expectedResult = [];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Eight', () => {
                const input = Scenario.Eight, expectedResult = [];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Ten', () => {
                const input = Scenario.Ten, expectedResult = [];
                const result = getSymbolIndexes(input);
    
                expect(result).to.deep.equal(expectedResult);
            });
        });
    });
});