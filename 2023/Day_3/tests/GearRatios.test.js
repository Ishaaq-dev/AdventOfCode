import { expect } from 'chai';
import { Scenario } from './testData.js';
import { getPartNumbersFromEngineSchematic } from '../src/GearRatios.js';
import { getSymbolIndexes } from '../src/GearRatios.js';

describe('getPartNumbersFromEngineSchematic()', () => {
    describe('Given a line from the engine schematic, it returns the part numbers', () => {
        it('Scenario One', () => {
            const input = Scenario.One, indexes = [3], expectedResult = [467];
            const result = getPartNumbersFromEngineSchematic(input, indexes);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Two', () => {
            const input = Scenario.One, expectedResult = [];
            const result = getPartNumbersFromEngineSchematic(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Three', () => {
            const input = Scenario.Three, indexes = [3,6], expectedResult = [35, 633];
            const result = getPartNumbersFromEngineSchematic(input, indexes);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Four', () => {
            const input = Scenario.Four, expectedResult = [];
            const result = getPartNumbersFromEngineSchematic(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Five', () => {
            const input = Scenario.Five, expectedResult = [617];
            const result = getPartNumbersFromEngineSchematic(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Six', () => {
            const input = Scenario.Six, expectedResult = [];
            const result = getPartNumbersFromEngineSchematic(input);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Seven', () => {
            const input = Scenario.Seven, indexes = [5], expectedResult = [592];
            const result = getPartNumbersFromEngineSchematic(input, indexes);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Eight', () => {
            const input = Scenario.Eight, indexes = [3,5], expectedResult = [755];
            const result = getPartNumbersFromEngineSchematic(input, indexes);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Nine', () => {
            const input = Scenario.Nine, indexes = [2,7], expectedResult = [];
            const result = getPartNumbersFromEngineSchematic(input, indexes);
            expect(result).to.deep.equal(expectedResult);
        });
        it('Scenario Ten', () => {
            const input = Scenario.Ten, indexes = [3,5], expectedResult = [664,598];
            const result = getPartNumbersFromEngineSchematic(input, indexes);
            expect(result).to.deep.equal(expectedResult);
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
