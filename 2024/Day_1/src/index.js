import fs from 'fs'
import { getSimilarityScore, quantityOfNums } from './part2.js';
const data = fs.readFileSync('./Day_1/data/input.txt', 'utf-8').split('\n');

function readData() {
    const list1 = [], list2 = [];

    data.forEach((line) => {
        if (line) {
            const lineData = line.split(/\s+/);
            list1.push(parseInt(lineData[0]));
            list2.push(parseInt(lineData[1]));
        }
    });

    list1.sort((a,b) => a-b);
    list2.sort((a,b) => a-b);

    return {
        list1, list2
    }
}

function partOne(sortedData) {
    const { list1, list2 } = sortedData;
    let totalDistance = 0;

    if (list1.length != list2.length) {
        throw new Error(`length of both sorted arrays are not equal`);
    }

    for (let i=0; i<list1.length; i++) {
        let distance = list1[i] - list2[i];
        if (distance < 0) distance = distance * -1;
        totalDistance += distance;
    }

    return totalDistance;
}

function partTwo(sortedData) {
    const { list1, list2 } = sortedData;
    const quantityMap = quantityOfNums(list2);
    const similarityScore = getSimilarityScore(list1, quantityMap);
    return similarityScore;
}

const sortedData = readData();

console.log(`Part One: ${partOne(sortedData)}`);

console.log(`Part Two: ${partTwo(sortedData)}`);