import {MenuItem} from "@mui/material";

export type Wizard = {
    id: string,
    name: string,
    gender: Gender,
    attribute1: Attribute1,
    attribute2: Attribute2,
    attribute3: Attribute3
}

export type NewWizard = {
    name: string,
    gender: Gender | string,
    attribute1: Attribute1 | string,
    attribute2: Attribute2 | string,
    attribute3: Attribute3 | string,
}

export enum Gender {
    WITCHER = "Zauberer",
    WITCH = "Hexe",
    DIVERS = "Divers"
}

export enum Attribute1 {
    BRAVE = "mutig",
    JUST = "gerecht",
    CLEVER = "klug",
    AMBITIOUS = "ehrgeizig"
}

export enum Attribute2 {
    COURAGEOUS = "tapfer",
    FAITHFUL = "treu",
    CREATIVE = "kreativ",
    ASSERTIVE = "selbstbewusst"
}

export enum Attribute3 {
    DETERMINED = "entschlossen",
    DILIGENT = "fleißig",
    INTROVERT = "introvertiert",
    REBELLIOUS = "rebellisch"
}
