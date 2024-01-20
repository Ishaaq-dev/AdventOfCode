import { expect } from 'chai';
import { findPartNumbers, getPartNumberFromIndex, getSymbolIndexes } from '../src/helpers.js';
import { Scenario } from './testData.js';

describe('getPartNumberFromIndex()', () => {
    describe('Should return part number of a given index', () => {
        describe('Positive Match', () => {
            it('Scenario One', () => {
                const input = Scenario.One, index = 2, expectedResult = 467;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Three', () => {
                const input = Scenario.Three, index = 7, expectedResult = 633;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Five', () => {
                const input = Scenario.Five, index = 1, expectedResult = 617;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Six', () => {
                const input = Scenario.Six, index = 7, expectedResult = 58;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Seven', () => {
                const input = Scenario.Seven, index = 2, expectedResult = 592;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
        });
        describe('Negative Match', () => {
            it('Scenario Two', () => {
                const input = Scenario.Two, index = 5, expectedResult = false;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
            it('Scenario Ten', () => {
                const input = Scenario.Ten, index = 4, expectedResult = false;
                const result = getPartNumberFromIndex(input, index);

                expect(result).to.equal(expectedResult);
            });
        });
    });
});

describe('getSymbolIndexes()', () => {
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

describe('findPartNumbers()', () => {
    describe('should return all part numbers in a string', () => {
        describe('Postive Matches', () => {
            it('Scenario One', () => {
                const input = Scenario.One, symbolIndexes = [3], expectedResult = [467];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Three', () => {
                const input = Scenario.Three, symbolIndexes = [3, 6], expectedResult = [35, 633];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Five', () => {
                const input = Scenario.Five, symbolIndexes = [3], expectedResult = [617];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Seven', () => {
                const input = Scenario.Seven, symbolIndexes = [5], expectedResult = [592];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Eight', () => {
                const input = Scenario.Eight, symbolIndexes = [5], expectedResult = [755];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Ten', () => {
                const input = Scenario.Ten, symbolIndexes = [3,5], expectedResult = [664,598];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });

            describe('Extreme Conditions', () => {
                it('Scenario Ten - symbol match is above and between two part numbers', () => {
                    const input = Scenario.Ten, symbolIndexes = [4], expectedResult = [664, 598];
                    const result = findPartNumbers(input, symbolIndexes);
                    expect(result).to.deep.equal(expectedResult);
                });
                it('Scenario Ten - symbol match is between two part numbers', () => {
                    const input = '.664&598..', symbolIndexes = [4], expectedResult = [664, 598];
                    const result = findPartNumbers(input, symbolIndexes);
                    expect(result).to.deep.equal(expectedResult);
                });
                it('Scenario Ten - symbol match is above long part number', () => {
                    const input = '.6645598..', symbolIndexes = [4], expectedResult = [6645598];
                    const result = findPartNumbers(input, symbolIndexes);
                    expect(result).to.deep.equal(expectedResult);
                });
            });
        });

        describe('Negative Matches', () => {
            it('Scenario Two', () => {
                const input = Scenario.Two, symbolIndexes = [3], expectedResult = [];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Four', () => {
                const input = Scenario.Four, symbolIndexes = [6], expectedResult = [];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Six', () => {
                const input = Scenario.Six, symbolIndexes = [5], expectedResult = [];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
            it('Scenario Nine', () => {
                const input = Scenario.Nine, symbolIndexes = [3,5], expectedResult = [];
                const result = findPartNumbers(input, symbolIndexes);
                expect(result).to.deep.equal(expectedResult);
            });
        });
    });
});