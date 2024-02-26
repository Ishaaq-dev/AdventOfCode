import fs from 'fs';
import { readAlmanac } from './almanacReader/index.js';
import { getLowestLocation } from './almanacService/index.js';

const data = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getSeedWithLowestLocation(data) {
    const almanac = readAlmanac(data);
    const lowestLocation = getLowestLocation(almanac);


    console.log('almanac: ', almanac);
    console.log('lowestLocation: ', lowestLocation);
}

getSeedWithLowestLocation(data);