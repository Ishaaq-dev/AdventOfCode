import { performTransformations } from "./almanacService.js";

export function getLocations(almanac) {
    const locationMap = {};
    const seeds = almanac.seeds;
    seeds.forEach(seed => {
        locationMap[seed] = performTransformations(almanac.maps, seed);
    });
    
}