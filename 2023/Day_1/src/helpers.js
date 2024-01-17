import { NUMBERS, MAP_STRING_TO_MAPS } from "./constants.js";

export function convertSpeltNumsToNumbers(calibrationValues) {
    const values = [];

    for (let i = 0; i < calibrationValues.length; i++) {
        const value = calibrationValues[i];
        const options = NUMBERS[value];
        if(options) {
            console.log(`${i} :: ${value} :: Checking for: ${options}`);
            const lengthOfOption = getLargestOptionLength(options);
            let stringNumber = value;
            for (let j = i+1; j<i+lengthOfOption; j++) {
                const nextValue = calibrationValues[j];
                if (verifyValueWithOptions(i, j, nextValue, options)) {
                    stringNumber += nextValue;
                    console.log(`   stringNum: ${stringNumber}`);
                    if (MAP_STRING_TO_MAPS[stringNumber]) {
                        values.push(MAP_STRING_TO_MAPS[stringNumber]);
                        break;
                    }
                } else {
                    if (parseInt(nextValue)){
                        console.log(`   Next Value: ${nextValue} is a number, jumping iteration to this index`);
                        i = j - 1;
                        break;
                    }
                    else
                        console.log(`   Next Value: ${nextValue} does not match the next letter in either option: ${options}`);
                    break;
                }
            }
        } else {
            const intValue = parseInt(value);
            if (intValue)
                values.push(intValue);
            else 
                console.log(`No Options for the letter: ${value}`);
        }
    }

    console.log(`calibrationValues: ${values}`);
    return values.toString().replace(/\,/g, '');
}

export function getLargestOptionLength(options) {
    let largestOptionLength = 0;
    options.forEach(option => {
        if(option.length > largestOptionLength)
            largestOptionLength = option.length;
    });

    return parseInt(largestOptionLength);
}

export function verifyValueWithOptions(i, j, value, options) {
    const positionOfLetter = j - i;
    let valueMatch = false;
    options.forEach(option => {
        if(option[positionOfLetter] === value)
            valueMatch = true;
    });

    return valueMatch
}