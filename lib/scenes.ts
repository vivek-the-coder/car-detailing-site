export interface Scene {
    id: number;
    start: number;
    end: number;
    tag: string;
    title: string;
    desc: string;
}

export const SCENES: Scene[] = [
    {
        id: 0,
        start: 0,
        end: 62,
        tag: "ORIGIN",
        title: "Where perfection enters the light",
        desc: "Every masterpiece begins with precise positioning"
    },
    {
        id: 1,
        start: 63,
        end: 98,
        tag: "ANALYSIS",
        title: "Every imperfection revealed",
        desc: "Microscopic defects exposed under controlled LED inspection"
    },
    {
        id: 2,
        start: 99,
        end: 151,
        tag: "PROTECTION",
        title: "Engineered defense applied by hand",
        desc: "Paint protection film applied with surgical precision"
    },
    {
        id: 3,
        start: 152,
        end: 212,
        tag: "CERAMIC",
        title: "Molecular-level ceramic bonding",
        desc: "Ultra-hydrophobic shield enhancing gloss and durability"
    },
    {
        id: 4,
        start: 213,
        end: 285,
        tag: "ISOLATION",
        title: "Sealed from the outside world",
        desc: "Controlled curing environment ensures flawless finish"
    },
    {
        id: 5,
        start: 286,
        end: 336,
        tag: "REVEAL",
        title: "Perfection, realized",
        desc: "A finish defined by absolute clarity and depth"
    }
];
