export const Maps = {
    Seeds: 'seeds:',
    SeedToSoil: 'seed-to-soil map:',
    SoilToFert: 'soil-to-fertilizer map:',
    FertToWater: 'fertilizer-to-water map:',
    WaterToLight: 'water-to-light map:',
    LightToTemp: 'light-to-temperature map:',
    TempToHumidity: 'temperature-to-humidity map:',
    HumidityToLocation: 'humidity-to-location map:'
}

export const MapTitles = {
    SeedToSoil: 'seedToSoil',
    SoilToFert: 'soilToFert',
    FertToWater: 'fertToWater',
    WaterToLight: 'waterToLight',
    LightToTemp: 'lightToTemp',
    TempToHumidity: 'tempToHumidity',
    HumidityToLocation: 'humidityToLocation'
}

export const OrderOfTransformations = {
    0: MapTitles.SeedToSoil,
    1: MapTitles.SoilToFert,
    2: MapTitles.FertToWater,
    3: MapTitles.WaterToLight,
    4: MapTitles.LightToTemp,
    5: MapTitles.TempToHumidity,
    6: MapTitles.HumidityToLocation
}

export const VALUES = {
    DESTINATION: 0,
    SOURCE: 1,
    RANGE: 2
}