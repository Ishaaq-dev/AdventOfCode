export function findPartNumbers(engineSchematicLine, symbolIndexes) {
    const partNumbers = [];

    symbolIndexes.forEach(symbolIndex => {
        const before = symbolIndex - 1, after = symbolIndex + 1;
        if (checkValueIsInt(engineSchematicLine[symbolIndex]) && (checkValueIsInt(engineSchematicLine[before]) || checkValueIsInt(engineSchematicLine[after]))){
            const partNumber = getPartNumberFromIndex(engineSchematicLine, symbolIndex);
            if (partNumber) partNumbers.push(partNumber);
        } else if(!checkValueIsInt(engineSchematicLine[symbolIndex])) {
            const leftHandSidePartNumber = getPartNumberFromIndex(engineSchematicLine, before);
            if (leftHandSidePartNumber) partNumbers.push(leftHandSidePartNumber);
            const rightHandSidePartNumber = getPartNumberFromIndex(engineSchematicLine, after);
            if(rightHandSidePartNumber) partNumbers.push(rightHandSidePartNumber);
        } else if(checkValueIsInt(engineSchematicLine[symbolIndex])) {
            const partNumber = getPartNumberFromIndex(engineSchematicLine, symbolIndex);
            if(partNumber) partNumbers.push(partNumber);
        }
    });

    return partNumbers;
}

export function checkValueIsInt(value) {
    const numericRegEx = /[0-9]/;
    if (value.match(numericRegEx))
        return true;
    else
    return false;
}

export function getPartNumberFromIndex(engineSchematicLine, index) {
    let partNumber = '';

    if (!checkValueIsInt(engineSchematicLine[index]))
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
