import { findPartNumbers } from "./helpers.js";

export function getPartNumbersFromEngineSchematic(engineSchematicLine, indexes) {
    if (!engineSchematicLine) return false;
    const symbolIndexes = indexes ?? getSymbolIndexes(engineSchematicLine);
    const partNumbers = findPartNumbers(engineSchematicLine, symbolIndexes);

    return partNumbers;
}

export function getSymbolIndexes(engineSchematicLine) {
    const symbolRegEx = /[^\d\.\n]/g
    const symbolIndexes = [];
    let match;
    while ((match = symbolRegEx.exec(engineSchematicLine)) !== null) {
        symbolIndexes.push(match.index);
    }
    return symbolIndexes;
}