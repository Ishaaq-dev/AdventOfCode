import fs from 'fs';
import { readAlmanac } from './almanacReader/index.js';

const data = fs.readFileSync('./data/input.txt', 'utf-8').split('\n');

export function getLowestLocation(data) {
    const almanac = readAlmanac(data);

    console.log('Almanac: ', almanac);
}

getLowestLocation(data);