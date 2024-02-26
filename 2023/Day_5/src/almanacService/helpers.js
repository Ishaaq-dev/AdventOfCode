import { VALUES } from "../constants.js";

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