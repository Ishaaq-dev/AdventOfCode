import fs from 'fs';
import { readAlmanac } from './almanacReader/index.js';
import { getTransformations } from './almanacService/index.js';

const data = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getLowestLocation(data) {
    const almanac = readAlmanac(data);
    const allTransformations = getTransformations(almanac);

    console.log('Almanac: ', almanac);
    console.log('allTransformations: ', allTransformations);
}

getLowestLocation(data);