export const pool = [
    {
        id: "shallow-shores",
        name: "Shallow Shores",
        fishChance: .75,
        junkChance: .25,
        specialChance: 0,
    },

    {
        id: "shrapnel-river",
        name: "Shrapnel River",
        fishChance: .80,
        junkChance: .20,
        specialChance: 0,
    },

    {
        id: "trench-of-despair",
        name: "Trench of Despair",
        fishChance: .70,
        junkChance: .28,
        specialChance: .02,
    },

    {
        id: "lemvor-pier",
        name: "Lemvor Pier",
        fishChance: .70,
        junkChance: .29,
        specialChance: .01,   
    },

    {
        id: "open-waters",
        name: "Open Waters",
        fishChance: .69,
        junkChance: .29,
        specialChance: .02,   
    },

    {
        id: "barren-ocean",
        name: "Barren Ocean",
        fishChance: .90,
        junkChance: .10,
        specialChance: 0,   
    },

    {
        id: "barbarian-fishing",
        name: "Barbarian Fishing",
        fishChance: .95,
        junkChance: .05,
        specialChance: 0,   
    },

    {
        id: "secret-area",
        name: "Secret Area",
        fishChance: .95,
        junkChance: 0,
        specialChance: .05,   
    },
]

export const fish = [
    {
        id: "raw-shrimp",
        name: "Raw Shrimp",
        poolId: "shallow-shores",
        levelRequired: 1,
        xp: 5,
        baseMinInterval: 4.0,
        baseMaxInterval: 8.0,
        sellPrice: 1
    },

    {
        id: "raw-lobster",
        name: "Raw Lobster",
        poolId: "shallow-shores",
        levelRequired: 40,
        xp: 50,
        baseMinInterval: 4.0,
        baseMaxInterval: 11.0,
        sellPrice: 65
    },

    {
        id: "raw-crab",
        name: "Raw Crab",
        poolId: "shallow-shores",
        levelRequired: 60,
        xp: 120,
        baseMinInterval: 5.0,
        baseMaxInterval: 12.0,
        sellPrice: 135
    },

    {
        id: "raw-sardine",
        name: "Raw Sardine",
        poolId: "shrapnel-river",
        levelRequired: 5,
        xp: 10,
        baseMinInterval: 4.0,
        baseMaxInterval: 8.0,
        sellPrice: 3
    },

    {
        id: "raw-herring",
        name: "Raw Herring",
        poolId: "shrapnel-river",
        levelRequired: 10,
        xp: 15,
        baseMinInterval: 4.0,
        baseMaxInterval: 8.0,
        sellPrice: 8
    },

    {
        id: "raw-carp",
        name: "Raw Carp",
        poolId: "shrapnel-river",
        levelRequired: 65,
        xp: 130,
        baseMinInterval: 6.0,
        baseMaxInterval: 15.0,
        sellPrice: 190
    },

    {
        id: "raw-blowfish",
        name: "Raw Blowfish",
        poolId: "trench-of-despair",
        levelRequired: 8,
        xp: 12,
        baseMinInterval: 3.0,
        baseMaxInterval: 8.0,
        sellPrice: 5
    },

    {
        id: "raw-poison-fish",
        name: "Raw Poison Fish",
        poolId: "trench-of-despair",
        levelRequired: 30,
        xp: 25,
        baseMinInterval: 3.0,
        baseMaxInterval: 10.0,
        sellPrice: 40
    },

    {
        id: "raw-anglerfish",
        name: "Raw Angerfish",
        poolId: "trench-of-despair",
        levelRequired: 50,
        xp: 100,
        baseMinInterval: 5.0,
        baseMaxInterval: 12.0,
        sellPrice: 50
    },

    {
        id: "raw-cave-fish",
        name: "Raw Cave Fish",
        poolId: "trench-of-despair",
        levelRequired: 75,
        xp: 300,
        baseMinInterval: 8.0,
        baseMaxInterval: 15.0,
        sellPrice: 215
    },

    {
        id: "raw-trout",
        name: "Raw Trout",
        poolId: "lemvor-pier",
        levelRequired: 20,
        xp: 20,
        baseMinInterval: 4.0,
        baseMaxInterval: 10.0,
        sellPrice: 16
    },

    {
        id: "raw-salmon",
        name: "Raw Salmon",
        poolId: "lemvor-pier",
        levelRequired: 35,
        xp: 40,
        baseMinInterval: 4.0,
        baseMaxInterval: 10.0,
        sellPrice: 35
    },

    {
        id: "raw-fanfish",
        name: "Raw Fanfish",
        poolId: "lemvor-pier",
        levelRequired: 55,
        xp: 120,
        baseMinInterval: 4.0,
        baseMaxInterval: 10.0,
        sellPrice: 120
    },

    {
        id: "raw-swordfish",
        name: "Raw Swordfish",
        poolId: "open-waters",
        levelRequired: 50,
        xp: 80,
        baseMinInterval: 5.0,
        baseMaxInterval: 12.0,
        sellPrice: 80
    },

    {
        id: "raw-manta-ray",
        name: "Raw Manta Ray",
        poolId: "open-waters",
        levelRequired: 85,
        xp: 495,
        baseMinInterval: 9.0,
        baseMaxInterval: 25.0,
        sellPrice: 650
    },

    {
        id: "raw-shark",
        name: "Raw Shark",
        poolId: "barren-ocean",
        levelRequired: 70,
        xp: 150,
        baseMinInterval: 7.0,
        baseMaxInterval: 15.0,
        sellPrice: 270
    },

    {
        id: "raw-whale",
        name: "Raw Whale",
        poolId: "barren-ocean",
        levelRequired: 95,
        xp: 575,
        baseMinInterval: 10.0,
        baseMaxInterval: 25.0,
        sellPrice: 750
    },

    {
        id: "leaping-trout",
        name: "Leaping Trout",
        poolId: "barbarian-fishing",
        levelRequired: 20,
        xp: 20,
        baseMinInterval: 3.0,
        baseMaxInterval: 10.0,
        sellPrice: 10
    },

    {
        id: "leaping-salmon",
        name: "Leaping Salmon",
        poolId: "barbarian-fishing",
        levelRequired: 35,
        xp: 40,
        baseMinInterval: 3.0,
        baseMaxInterval: 12.0,
        sellPrice: 20
    },

    {
        id: "leaping-broad-fish",
        name: "Leaping Broad Fish",
        poolId: "barbarian-fishing",
        levelRequired: 70,
        xp: 100,
        baseMinInterval: 4.0,
        baseMaxInterval: 12.0,
        sellPrice: 50
    },

    {
        id: "raw-seahorse",
        name: "Raw Seahorse",
        poolId: "secret-area",
        levelRequired: 15,
        xp: 25,
        baseMinInterval: 3.0,
        baseMaxInterval: 10.0,
        sellPrice: 40
    },

    {
        id: "raw-skeleton-fish",
        name: "Raw Skeleton Fish",
        poolId: "secret-area",
        levelRequired: 45,
        xp: 100,
        baseMinInterval: 7.0,
        baseMaxInterval: 15.0,
        sellPrice: 175
    },

    {
        id: "raw-magic-fish",
        name: "Raw Magic Fish",
        poolId: "secret-area",
        levelRequired: 80,
        xp: 325,
        baseMinInterval: 12.0,
        baseMaxInterval: 30.0,
        sellPrice: 960
    }
]