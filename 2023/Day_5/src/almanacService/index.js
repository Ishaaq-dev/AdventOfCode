import { performTransformations } from "./almanacService.js";

export function getTransformations(almanac) {
    const locationMap = {};
    const seeds = almanac.seeds;
    seeds.forEach(seed => {
        locationMap[seed] = performTransformations(almanac.maps, seed);
    });
    return locationMap;
}