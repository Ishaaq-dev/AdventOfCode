import { OrderOfTransformations, MapTitleToItemName } from "../constants.js";
import { getValidLine, applyTransformation } from "./helpers.js";

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

export function transform(map, value) {
    const validLine = getValidLine(map, value);
    const transformedValue = applyTransformation(validLine, value);

    return transformedValue;
}