import {MenuItem} from "@mui/material";

export type Wizard = {
    id: string,
    name: string,
    gender: Gender,
    attribute1: Attribute1,
    attribute2: Attribute2,
    attribute3: Attribute3
    chosenHouse: string
}

export type NewWizard = {
    avatar:string,
    id: string,
    name: string,
    gender: Gender | string,
    attribute1: Attribute1 | string,
    attribute2: Attribute2 | string,
    attribute3: Attribute3 | string,
    chosenHouse: string

}


export enum Gender {
    WITCHER = "WITCHER",
    WITCH = "WITCH",
    DIVERS = "DIVERS"
}

export enum Attribute1 {
    BRAVE="BRAVE",
    JUST = "JUST",
    CLEVER = "CLEVER",
    AMBITIOUS = "AMBITIOUS"
}

export enum Attribute2 {
    COURAGEOUS = "COURAGEOUS",
    FAITHFUL = "FAITHFUL",
    CREATIVE = "CREATIVE",
    ASSERTIVE = "ASSERTIVE"
}

export enum Attribute3 {
    DETERMINED = "DETERMINED",
    DILIGENT = "DILIGENT",
    INTROVERT = "INTROVERT",
    REBELLIOUS = "REBELLIOUS"
}
