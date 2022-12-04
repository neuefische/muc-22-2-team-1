import {Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {Attribute1, Attribute2, Attribute3, Gender, NewWizard} from "../model/Wizard";

type AddWizardProps = {
    addWizard: (newWizard: NewWizard) => Promise<any>
}

export default function AddWizard(props: AddWizardProps) {

    const [name, setName] = useState<string>("")
    const [gender, setGender] = useState<Gender | undefined>(undefined)
    const [attribute1, setAttribute1] = useState<Attribute1| undefined>(undefined)
    const [attribute2, setAttribute2] = useState<Attribute2| undefined>(undefined)
    const [attribute3, setAttribute3] = useState<Attribute3| undefined>(undefined)

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value as Gender);
    };

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttribute1(event.target.value as Attribute1);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttribute2(event.target.value as Attribute2);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAttribute3(event.target.value as Attribute3);
    };

    function onSaveClick() {
        props.addWizard({
            name: name,
            gender: gender,
            attribute1: attribute1,
            attribute2: attribute2,
            attribute3: attribute3
        })
            .then(() => {
                setName("")

                setGender(undefined)

                setAttribute1(undefined)

                setAttribute2(undefined)

                setAttribute3(undefined)
            })
    }

    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={5}>
                    "Avatar"
                </Grid>

                <Grid item xs={7}>
                    <TextField margin="normal" label="Name" fullWidth variant="outlined" onChange={onNameChange}/>


                    <TextField
                        margin="normal"
                        select
                        fullWidth
                        id="Gender"
                        label="Gender"
                        onChange={handleGender}
                    >
                        <MenuItem value={Gender.WITCH}>{Gender.WITCH}</MenuItem>
                        <MenuItem value={Gender.WITCHER}>{Gender.WITCHER}</MenuItem>
                    </TextField>

                    <TextField
                        margin="normal"
                        select

                        fullWidth
                        label="Attribute 1"
                        onChange={handleChange1}
                    >
                        <MenuItem value={Attribute1.MUTIG}>{Attribute1.MUTIG}</MenuItem>
                        <MenuItem value={Attribute1.GERECHT}>{Attribute1.GERECHT}</MenuItem>
                        <MenuItem value={Attribute1.KLUG}>{Attribute1.KLUG}</MenuItem>
                        <MenuItem value={Attribute1.EHRGEIZIG}>{Attribute1.EHRGEIZIG}</MenuItem>
                    </TextField>

                    <TextField
                        margin="normal"
                        select
                        fullWidth
                        label="attribute 2"
                        onChange={handleChange2}
                    >
                        <MenuItem value={1}>tapfer</MenuItem>
                        <MenuItem value={2}>treu</MenuItem>
                        <MenuItem value={3}>kreativ</MenuItem>
                        <MenuItem value={4}>selbstbewusst</MenuItem>
                    </TextField>

                    <TextField
                        margin="normal"
                        select
                        fullWidth
                        label="attribute 3"
                        onChange={handleChange3}
                    >
                        <MenuItem value={1}>entschlossen</MenuItem>
                        <MenuItem value={2}>fleißig</MenuItem>
                        <MenuItem value={3}>introvertiert</MenuItem>
                        <MenuItem value={4}>rebellisch</MenuItem>
                    </TextField>
                </Grid>
            </Grid>

            <Button onClick={onSaveClick} variant="contained">Save</Button>
        </div>
    )

}