import { Maps } from '../src/almanacReader/constants.js';
const Seeds = 'seeds: 79 14 55 13';

const SeedToSoilMaps = [
    '50 98 2',
    '52 50 48'
]

const SoilToFertMaps = [
    '0 15 37',
    '37 52 2',
    '39 0 15'
]

const FertToWaterMaps = [
    '49 53 8',
    '0 11 42',
    '42 0 7',
    '57 7 4'
]

const WaterToLightMaps = [
    '88 18 7',
    '18 25 70'
]

const LightToTempMaps = [
    '45 77 23',
    '81 45 19',
    '68 64 13'
]

const TempToHumidityMaps = [
    '0 69 1',
    '1 0 69'
]

const HumdityToLocationMaps = [
    '60 56 37',
    '56 93 4'
]

const NewLine = '';

const Almanac = [
    Seeds,
    NewLine,
    Maps.SeedToSoil,
    ...SeedToSoilMaps,
    NewLine,
    Maps.SoilToFert,
    ...SoilToFertMaps,
    NewLine,
    Maps.FertToWater,
    ...FertToWaterMaps,
    NewLine,
    Maps.WaterToLight,
    ...WaterToLightMaps,
    NewLine,
    Maps.LightToTemp,
    ...LightToTempMaps,
    NewLine,
    Maps.TempToHumidity,
    ...TempToHumidityMaps,
    NewLine,
    Maps.HumdityToLocation,
    ...HumdityToLocationMaps,
    NewLine,
]

export const TestData = {
    Seeds,
    SeedToSoilMaps,
    SoilToFertMaps,
    FertToWaterMaps,
    WaterToLightMaps,
    LightToTempMaps,
    TempToHumidityMaps,
    HumdityToLocationMaps,
    Almanac
}
