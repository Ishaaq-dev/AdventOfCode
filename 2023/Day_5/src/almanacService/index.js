import { performTransformations } from "./almanacService.js";

export function getTransformations(almanac) {
    const transformationMap = {};
    const seeds = almanac.seeds;
    seeds.forEach(seed => {
        transformationMap[seed] = performTransformations(almanac.maps, seed);
    });
    return transformationMap;
}