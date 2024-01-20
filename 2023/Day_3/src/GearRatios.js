import { findPartNumbers } from "./helpers.js";

export function getPartNumbersFromEngineSchematic(engineSchematicLine, indexes) {
    if (!engineSchematicLine) return false;
    const symbolIndexes = indexes ?? getSymbolIndexes(engineSchematicLine);
    const partNumbers = findPartNumbers(engineSchematicLine, symbolIndexes);

    return partNumbers;
}

export function getSumOfEngineSchematic(engineSchematicLine, indexes) {
    const partNumbers = getPartNumbersFromEngineSchematic(engineSchematicLine, indexes);
    if (!partNumbers) return false;

    const sum = partNumbers.reduce((acc, curr) => acc += curr, 0);
    return sum;
}

export function getSymbolIndexes(engineSchematicLine) {
    if (!engineSchematicLine) return false;
    const symbolRegEx = /[^\d\.\n]/g
    const symbolIndexes = [];
    let match;
    while ((match = symbolRegEx.exec(engineSchematicLine)) !== null) {
        symbolIndexes.push(match.index);
    }
    return symbolIndexes;
} 