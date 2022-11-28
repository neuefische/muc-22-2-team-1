export type Wizard = {
    id: string,
    name: string,
    gender: Gender,
    attribute1: Attribute1,
    attribute2: Attribute2,
    attribute3: Attribute3
}

export type NewWizard = {
    name: string
}

export enum Gender {
    WITCHER = "WITCHER",
    WITCH = "WITCH",
    MUGGLE = "MUGGLE",
    HALFBLOOD = "HALFBLOOD",
    SQUIB = "SQUIB"

}


export enum Attribute1 {
    HIGHIQ = "highIQ",
    BRAVE = "brave",
    FAITHFUL = "faithful",
    HIGHAMBITION = "highambition"
}

export enum Attribute2 {
    CREATIV = "creativ",
    COURAGE = "courage",
    JUST = "just",
    POWERHUNGRY = "power hungry"
}

export enum Attribute3 {
    INDIVIDUELL = "individuell",
    DETERMINATION = "determination",
    COOPERATIVE = "cooperativ",
    CUNNING = "cunning"
}
