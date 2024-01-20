export function getPartNumber(engineSchematicLine, index) {
    let partNumber = '';

    if (!parseInt(engineSchematicLine[index])) {
        console.warn(`Supplied Index: ${index} does not match a number`);
        return false;
    }
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