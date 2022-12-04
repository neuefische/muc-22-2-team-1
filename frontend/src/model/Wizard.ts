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
    MUGGLE = "MUGGLE",
    HALFBLOOD = "HALFBLOOD",
    SQUIB = "SQUIB"
}

export enum Attribute1 {
    MUTIG = "mutig",
    GERECHT = "gerecht",
    KLUG = "klug",
    EHRGEIZIG = "ehrgeizig"
}

export enum Attribute2 {
    TAPFER = "tapfer",
    TREU = "treu",
    KREATIV = "kreativ",
    SELBSTBEWUSST = "selbstbewusst"
}

export enum Attribute3 {
    ENTSCHLOSSEN = "entschlossen",
    FLEISSIG = "fleißig",
    INTROVERTIERT = "introvertiert",
    REBELLISCH = "rebellisch"
}
