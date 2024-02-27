import { OrderOfTransformations, MapTitleToItemName } from "../constants.js";
import { transform, createArrayWithProperty, sortArrayOnProperty } from "./helpers.js";

export function performTransformations(maps, seed) {
    const transformed = {};
    const numOfTransformations = Object.keys(OrderOfTransformations).length;
    let value = seed;
    for (let i=0; i<numOfTransformations; i++) {
        const mapTitle = OrderOfTransformations[i];
        const map = maps[mapTitle];
        const itemName = MapTitleToItemName[mapTitle];
        value = transform(map, value);
        transformed[itemName] = value;
    }
    return transformed;
}

export function getSeedWithLowestProperty(allTransformations, property) {
    const arrayWithProp = createArrayWithProperty(allTransformations, property);
    const sortedArray = sortArrayOnProperty(arrayWithProp, property);

    return sortedArray[0];
}