import fs from 'fs';
import { getCalibrationValue } from './CalibrationValue.js';

const calibrationData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getCalibrationValueSum() {
    const calibrationValueSum = calibrationData.reduce((accumulator, calibrationLine) => {
        const calibrationValue = getCalibrationValue(calibrationLine);
        return accumulator + calibrationValue;
    }, 0);
    return calibrationValueSum
}

console.log('Sum of calibrationValues: ', getCalibrationValueSum());