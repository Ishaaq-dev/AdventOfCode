import { findPartNumber, findPartNumbers } from "./helpers.js";

const SYMBOL_REGEX = {
    ALL_SYMBOLS: /[^\d\.\n]/g,
    ALL_BUT_ASTERIX: /[^\d\.\n\*]/g,
    ASTERIX: /\*/g
}

export function getPartNumbersFromEngineSchematic(engineSchematicLine, indexes) {
    if (!engineSchematicLine) return false;
    const symbolIndexes = indexes ?? getSymbolIndexes(engineSchematicLine);
    const partNumbers = findPartNumbers(engineSchematicLine, symbolIndexes);

    return partNumbers;
}

export function getMultipliedGearRatios(asterixIndexObj) {
    let result = 0;
    const indexes = Object.keys(asterixIndexObj);
    indexes.forEach(index => {
        const gearNums = asterixIndexObj[index];
        if(gearNums.length === 2) {
            result += gearNums[0] * gearNums[1];
        }
    });
    return result;
}

export function getGearsFromEngineSchematic(engineSchematicLine, asterixIndexObj) {
    const indexes = Object.keys(asterixIndexObj);
    indexes.forEach(index => {
        const partNums = findPartNumber(engineSchematicLine, index);
        asterixIndexObj[index] = asterixIndexObj[index].concat(partNums);
    });
    return asterixIndexObj;
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
    const asterixIndexes = getIndexes(engineSchematicLine, SYMBOL_REGEX.ASTERIX);
    return asterixIndexes;
}

export function getAsterixIndexObj(engineSchematicLine) {
    const asterixIndexObject = {};
    const asterixIndexes = getAsterixIndexes(engineSchematicLine);
    asterixIndexes.forEach(asterixIndex => {
        asterixIndexObject[asterixIndex] = [];
    });
    return asterixIndexObject;
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