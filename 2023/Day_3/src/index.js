import fs from 'fs';
import { getAsterixIndexObj, getMultipliedGearRatios, getGearsFromEngineSchematic, getSumOfEngineSchematic, getSymbolIndexes } from './GearRatios.js';

const gearRatioData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getSumOfPartNumbers(data) {
    const partNumberSums = [], gearNumberSums = [];
    for (let i = 0; i < data.length; i++) {
        const limit = i + 1;
        let j;
        if (i - 1 < 0) j = 0;
        else j = i - 1;

        let asterixIndexObj = getAsterixIndexObj(data[i]);

        for (j; j <= limit; j++ ) {
            const intermittenLine = data[j];
            const symbolIndexes = getSymbolIndexes(intermittenLine);
            if (symbolIndexes.length) {
                const partNumbersSum = getSumOfEngineSchematic(data[i], symbolIndexes);
                if (partNumbersSum) partNumberSums.push(partNumbersSum);
            }
            asterixIndexObj = getGearsFromEngineSchematic(intermittenLine, asterixIndexObj);
        }
        const multipliedGearRatios = getMultipliedGearRatios(asterixIndexObj);
        if (multipliedGearRatios > 0)
            gearNumberSums.push(multipliedGearRatios);
    }
    return {
        partNum: partNumberSums.reduce((acc, cur) => acc += cur, 0), 
        gearNum: gearNumberSums.reduce((acc, cur) => acc += cur, 0)
    }
}

console.log('Sum of part numbers', getSumOfPartNumbers(gearRatioData));