import { TYPES, VALUES } from "../constants.js";

export function transform(map, value) {
    const validLine = getValidLine(map, value);
    const transformedValue = applyTransformation(validLine, value);

    return transformedValue;
}

export function getValidLine(map, value) {
    const validLine = map.find(line => {
        const source = line[VALUES.SOURCE], range = line[VALUES.RANGE];
        if (value >= source && value <= (source + range) - 1)
            return line;
    });

    return validLine ?? false;
}

export function applyTransformation(validLine, value) {
    if(!validLine) return value;

    const source = validLine[VALUES.SOURCE];
    const gap = value - source;
    const transformed = validLine[VALUES.DESTINATION] + gap;

    return transformed;
}

export function createArrayWithProperty(allTransformations, property) {
    if(!TYPES.includes(property)) throw new Error(`Property: ${property} not supported`);

    const seeds = Object.keys(allTransformations);
    const arrayWithProp = seeds.map(seed => {
        return {seed, [property]: allTransformations[seed][property]};
    });
    return arrayWithProp;
}

export function sortArrayOnProperty(arrayWithProp, property, desc = true) {
    if (desc)
        return arrayWithProp.sort((a, b) => a[property] - b[property]);
    else
        return arrayWithProp.sort((a, b) => b[property] - a[property]);
}