import fs from 'fs';
import { getPartNumbersFromEngineSchematic } from './GearRatios.js';

const gearRatioData = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

function getSumOfPartNumbers() {

    for (let i = 0; i < gearRatioData.length; i++) {
        let j = i;
        const partsNumber = getPartNumbersFromEngineSchematic(gearRatioData[i]);
        console.log('Parts Number: ', partsNumber);
    }
}

getSumOfPartNumbers();