export type Wizard = {
    id:string,
    name:string,
    gender:Gender,
    attribute1:string,
    attribute2:string,
    attribute3:string
}

export enum Gender {
    WITCHER = "WITCHER",
    WITCH = "WITCH",
    MUGGLE = "MUGGLE",
    HALFBLOOD = "HALFBLOOD",
    SQUIB = "SQUIB"

}

