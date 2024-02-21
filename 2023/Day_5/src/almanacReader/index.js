import { getData } from "./readerService.js";
import { Constants } from "./constants.js";
const MapTitles = Constants.MapTitles;

export function readAlmanac(textFile) {
    const almanac = {};
    let mapTitle = '';
    for (let i = 0; i<textFile.length; i++) {
        const data = getData(textFile[i]);
        if (Object.values(MapTitles).includes(data)) {
            mapTitle = data;
            almanac[mapTitle] = [];
        }
        else if (data.seeds)
            almanac.seeds = data.seeds;
        else if (Array.isArray(data))
            almanac[mapTitle].push(data);
    }

    return almanac;
}