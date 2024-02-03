import { findPartNumbers } from "./helpers.js";

const SYMBOL_REGEX = {
    ALL_SYMBOLS: /[^\d\.\n]/g,
    ASTERIX: /\*/g
}

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
    const symbolIndexes = getIndexes(engineSchematicLine, SYMBOL_REGEX.ALL_SYMBOLS);
    return symbolIndexes;
}

export function getAsterixIndexes(engineSchematicLine) {
    const symbolIndexes = getIndexes(engineSchematicLine, SYMBOL_REGEX.ASTERIX);
    return symbolIndexes;
}

function getIndexes(engineSchematicLine, regex) {
    if (!engineSchematicLine) return false;
    const symbolIndexes = [];
    let match;
    while ((match = regex.exec(engineSchematicLine)) !== null) {
        symbolIndexes.push(match.index);
    }
    return symbolIndexes;
}