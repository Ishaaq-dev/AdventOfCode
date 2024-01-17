import { convertSpeltNumsToNumbers } from "./helpers.js";

export function getCalibrationValue(line) {
    if (!line) throw new Error('Line can not be empty');

    const lowerCaseLine = line.toLowerCase();
    const workCharRegEx = /[a-z0-9]/g
    const validLine = lowerCaseLine.match(workCharRegEx, '');

    const firstValue = parseInt(validLine.slice(0,1)), lastValue = parseInt(validLine.slice(-1));

    if(firstValue && lastValue)
        return parseInt(`${firstValue}${lastValue}`);

    const calibrationValues = convertSpeltNumsToNumbers(validLine);
    
    let validCalibrationValue = '';

    if(calibrationValues.length === 1) {
        validCalibrationValue = `${calibrationValues[0]}${calibrationValues[0]}`;
    } else {
        const firstCalibrationValue = calibrationValues.slice(0,1);
        const lastCalibrationValue = calibrationValues.slice(-1);
        validCalibrationValue = `${firstCalibrationValue}${lastCalibrationValue}`;
    }

    return parseInt(validCalibrationValue);
}