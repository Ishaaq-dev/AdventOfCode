import { Constants } from './constants.js';
const Maps = Constants.Maps, MapTitles = Constants.MapTitles;

export function getData(almanacLine) {
    const numRegex = /\d/g;
    if (!almanacLine)
        return false;

    if(almanacLine.startsWith(Maps.Seeds)) 
        return {seeds: getSeeds(almanacLine)};

    if(numRegex.test(almanacLine)) 
        return getValues(almanacLine);

    if(almanacLine.includes(Maps.SeedToSoil))
        return MapTitles.SeedToSoil;

    if(almanacLine.includes(Maps.SoilToFert))
        return MapTitles.SoilToFert;

    if(almanacLine.includes(Maps.FertToWater))
        return MapTitles.FertToWater;

    if(almanacLine.includes(Maps.WaterToLight))
        return MapTitles.WaterToLight;

    if(almanacLine.includes(Maps.LightToTemp))
        return MapTitles.LightToTemp;

    if(almanacLine.includes(Maps.TempToHumidity))
        return MapTitles.TempToHumidity;

    if(almanacLine.includes(Maps.HumdityToLocation))
        return MapTitles.HumdityToLocation;

    return false;

}

export function getSeeds(almanacLine) {
    const seedSplit = almanacLine.split(':');
    if(seedSplit.length !== 2 || !almanacLine) return false;
    const stringSeeds = seedSplit[1].trim().split(' ');

    const intSeeds = getNumbers(stringSeeds);
    return intSeeds;
}

export function getValues(almanacLine) {
    const valuesSplit = almanacLine.trim().split(' ');
    const values = getNumbers(valuesSplit);
    return values;
}

function getNumbers(stringValues) {
    const values = [];
    stringValues.forEach(stringValue => {
        const value = parseInt(stringValue.trim());
        if(!isNaN(value)) values.push(value);
    });

    return values;
}