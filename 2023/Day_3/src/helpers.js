export function getSymbolIndexes(engineSchematicLine) {
    const symbolRegEx = /[^\d\.\n]/g
    const symbolIndexes = [];
    let match;
    while ((match = symbolRegEx.exec(engineSchematicLine)) !== null) {
        symbolIndexes.push(match.index);
    }
    return symbolIndexes;
}

export function getPartNumberFromIndex(engineSchematicLine, index) {
    let partNumber = '';

    if (!parseInt(engineSchematicLine[index]))
        return false;

    partNumber = engineSchematicLine[index];
    
    const nonNumericRegEx = /\D/;
    for (let i = index - 1; i >= 0; i--) {
        const value = engineSchematicLine[i];
        if(value.match(nonNumericRegEx)) break;
        partNumber = `${value}${partNumber}`;
    }

    for (let i = index + 1; i < engineSchematicLine.length; i++) {
        const value = engineSchematicLine[i];
        if(value.match(nonNumericRegEx)) break;
        partNumber = `${partNumber}${value}`;
    }

    return parseInt(partNumber) ?? false;
}

export function findPartNumbers(engineSchematicLine, symbolIndexes) {
    const partNumbers = [];

    symbolIndexes.forEach(symbolIndex => {
        const before = symbolIndex - 1, after = symbolIndex + 1;
        if (parseInt(engineSchematicLine[symbolIndex]) && (parseInt(engineSchematicLine[before]) || parseInt(engineSchematicLine[after]))){
            const partNumber = getPartNumberFromIndex(engineSchematicLine, symbolIndex);
            if (partNumber) partNumbers.push(partNumber);
        } else if(!parseInt(engineSchematicLine[symbolIndex])) {
            const leftHandSidePartNumber = getPartNumberFromIndex(engineSchematicLine, before);
            if (leftHandSidePartNumber) partNumbers.push(leftHandSidePartNumber);
            const rightHandSidePartNumber = getPartNumberFromIndex(engineSchematicLine, after);
            if(rightHandSidePartNumber) partNumbers.push(rightHandSidePartNumber);
        } else if(parseInt(engineSchematicLine[symbolIndex])) {
            const partNumber = getPartNumberFromIndex(engineSchematicLine, symbolIndex);
            if(partNumber) partNumbers.push(partNumber);
        }
    });

    return partNumbers;
}