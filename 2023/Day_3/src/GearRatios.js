import { getPartNumberFromIndex, getSymbolIndexes, findPartNumbers } from "./helpers.js";

export function getPartNumbersFromEngineSchematic(engineSchematicLine, indexes) {
    const symbolIndexes = indexes ?? getSymbolIndexes(engineSchematicLine);
    const partNumbers = findPartNumbers(engineSchematicLine, symbolIndexes);

    return partNumbers;
}