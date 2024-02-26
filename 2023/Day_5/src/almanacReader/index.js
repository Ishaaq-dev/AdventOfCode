import { getData } from "./readerService.js";
import { MapTitles } from "../constants.js";

export function readAlmanac(textFile) {
    const almanac = {maps:{}};
    let mapTitle = '';
    for (let i = 0; i<textFile.length; i++) {
        const data = getData(textFile[i]);
        if (Object.values(MapTitles).includes(data)) {
            mapTitle = data;
            almanac.maps[mapTitle] = [];
        }
        else if (data.seeds)
            almanac.seeds = data.seeds;
        else if (Array.isArray(data))
            almanac.maps[mapTitle].push(data);
    }

    return almanac;
}