import { OrderOfTransformations, VALUES } from "../constants.js";
import { getValidLine } from "./helpers.js";

export function performTransformations(maps, seed) {
    const transformed = {};
    const numOfTransformations = Object.keys(OrderOfTransformations).length;
    for (let i=0; i<numOfTransformations; i++) {
        const mapTitle = OrderOfTransformations[i];
        const map = almanac[mapTitle];

        
    }
}

export function transform(map, value) {
    const validLine = getValidLine(map, value);
    const transformedValue = applyTransformation(validLine, value);
}