import { Maps } from '../src/constants.js';

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
    Maps.HumidityToLocation,
    ...HumdityToLocationMaps,
    NewLine,
];

const ReadAlmanac = {
    seeds: [79, 14, 55, 13],
    maps: {
        seedToSoil: [
            [50, 98, 2],
            [52, 50, 48]
        ],
        soilToFert: [
            [0, 15, 37],
            [37, 52, 2],
            [39, 0, 15]
        ],
        fertToWater: [
            [49, 53, 8],
            [0, 11, 42],
            [42, 0, 7],
            [57, 7, 4]    
        ],
        waterToLight: [
            [88, 18, 7],
            [18, 25, 70]
        ],
        lightToTemp: [
            [45, 77, 23],
            [81, 45, 19],
            [68, 64, 13]
        ],
        tempToHumidity: [
            [0, 69, 1],
            [1, 0, 69]
        ],
        humidityToLocation: [
            [60, 56, 37],
            [56, 93, 4]
        ]
    }
}

const TransformedAlmanac = {
    79: {
        soil: 81,
        fert: 81,
        water: 81,
        light: 74,
        temp: 78,
        humidity: 78,
        location: 82
    },
    14: {
        soil: 14,
        fert: 53,
        water: 49,
        light: 42,
        temp: 42,
        humidity: 43,
        location: 43
    },
    55: {
        soil: 57,
        fert: 57,
        water: 53,
        light: 46,
        temp: 82,
        humidity: 82,
        location: 86
    },
    13: {
        soil: 13,
        fert: 52,
        water: 41,
        light: 34,
        temp: 34,
        humidity: 35,
        location: 35
    }
}

export const TestData = {
    Seeds,
    SeedToSoilMaps,
    SoilToFertMaps,
    FertToWaterMaps,
    WaterToLightMaps,
    LightToTempMaps,
    TempToHumidityMaps,
    HumdityToLocationMaps,
    Almanac,
    ReadAlmanac,
    TransformedAlmanac
}
