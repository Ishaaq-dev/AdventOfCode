import fs from 'fs';
import { getSumOfEngineSchematic, getSymbolIndexes } from './GearRatios.js';

const gearRatioData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getSumOfPartNumbers(data) {
    const partNumberSums = [];
    for (let i = 0; i < data.length; i++) {
        const limit = i + 1;
        let j;
        if (i - 1 < 0) j = 0;
        else j = i - 1;

        for (j; j <= limit; j++ ) {
            const value = data[j];
            const symbolIndexes = getSymbolIndexes(value);
            if (!symbolIndexes.length) continue;
            const partNumbersSum = getSumOfEngineSchematic(data[i], symbolIndexes);
            if (partNumbersSum) partNumberSums.push(partNumbersSum);
        }
    }
    return partNumberSums.reduce((acc, cur) => acc += cur, 0);
}

console.log('Sum of part numbers', getSumOfPartNumbers(gearRatioData));