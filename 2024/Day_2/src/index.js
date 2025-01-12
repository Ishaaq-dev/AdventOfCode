import fs from 'fs'
import { valuateLevels } from './partOne.js';
import { evaluateLevels } from './partTwo.js';
const data = fs.readFileSync('./Day_2/data/input.txt', 'utf-8').split('\n');

function readData() {
    const dataFormat = data.map(line => {
        if (line) {
            return line.split(/\s+/);
        }
    });

    return dataFormat;
}

function partOne(reports) {
    const numOfSafeReports = reports.reduce((acc, levels) => {
        if (levels) {
            const safeReport = valuateLevels(levels);
            return acc + safeReport;
        } else
            return acc;
    }, 0);

    return numOfSafeReports;
}

function partTwo(reports) {
    reports.forEach(levels => {
        if (levels)
            evaluateLevels(levels);
    });
}

console.log(partOne(readData()));

console.log(partTwo(readData()));