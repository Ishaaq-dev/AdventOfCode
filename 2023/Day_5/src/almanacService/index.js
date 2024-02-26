import { performTransformations, getSeedWithLowestProperty } from "./almanacService.js";

export function getTransformations(almanac) {
    const transformationMap = {};
    const seeds = almanac.seeds;
    seeds.forEach(seed => {
        transformationMap[seed] = performTransformations(almanac.maps, seed);
    });
    return transformationMap;
}

export function getLowestLocation(almanac) {
    const allTransformations = getTransformations(almanac);
    const lowestLocation = getSeedWithLowestProperty(allTransformations, 'location');

    return lowestLocation;
}