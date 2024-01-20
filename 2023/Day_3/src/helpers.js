export function getSymbolIndexes(engineSchematicLine) {
    const symbolRegEx = /[^\d\.\n]/g
    const symbolIndexes = [];
    let match;
    while ((match = symbolRegEx.exec(engineSchematicLine)) !== null) {
        symbolIndexes.push(match.index);
    }
    return symbolIndexes;
}

export function getPartNumber(engineSchematicLine, index) {
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

    return parseInt(partNumber);
}
