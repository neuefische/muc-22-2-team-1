import {Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {Attribute1, Attribute2, Attribute3, Gender, NewWizard} from "../model/Wizard";

type AddWizardProps = {
    addWizard: (newWizard: NewWizard) => Promise<any>
}

export default function AddWizard(props: AddWizardProps) {

    const [name, setName] = useState<string>("")
    const [gender, setGender] = useState<Gender | string>('')
    const [attribute1, setAttribute1] = useState<Attribute1 | string>('');
    const [attribute2, setAttribute2] = useState<Attribute2 | string>('')
    const [attribute3, setAttribute3] = useState<Attribute3 | string>('')

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
                setGender("")
                setAttribute1("")
                setAttribute2("")
                setAttribute3("")
            })
    }

    return (

        <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
               AVATAR
            </Grid>

            <Grid item xs={12}  sm={7}>
                <TextField margin="normal" value={name} size="small" label="Name" fullWidth variant="outlined"
                           onChange={onNameChange}/>


                <TextField
                    margin="normal"
                    select
                    fullWidth
                    id="Gender"
                    value={gender}
                    label="Gender"
                    size="small"
                    onChange={handleGender}
                >
                    <MenuItem value={Gender.WITCH}>{Gender.WITCH}</MenuItem>
                    <MenuItem value={Gender.WITCHER}>{Gender.WITCHER}</MenuItem>
                </TextField>

                <TextField
                    margin="normal"
                    select
                    size="small"
                    value={attribute1}
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
                    size="small"
                    value={attribute2}
                    select
                    fullWidth
                    label="attribute 2"
                    onChange={handleChange2}
                >
                    <MenuItem value={Attribute2.TAPFER}>{Attribute2.TAPFER}</MenuItem>
                    <MenuItem value={Attribute2.TREU}>{Attribute2.TREU}</MenuItem>
                    <MenuItem value={Attribute2.KREATIV}>{Attribute2.KREATIV}</MenuItem>
                    <MenuItem value={Attribute2.SELBSTBEWUSST}>{Attribute2.SELBSTBEWUSST}</MenuItem>
                </TextField>

                <TextField
                    margin="normal"
                    size="small"
                    select
                    value={attribute3}
                    fullWidth
                    label="attribute 3"
                    onChange={handleChange3}
                >
                    <MenuItem value={Attribute3.ENTSCHLOSSEN}>{Attribute3.ENTSCHLOSSEN}</MenuItem>
                    <MenuItem value={Attribute3.FLEISSIG}>{Attribute3.FLEISSIG}</MenuItem>
                    <MenuItem value={Attribute3.INTROVERTIERT}>{Attribute3.INTROVERTIERT}</MenuItem>
                    <MenuItem value={Attribute3.REBELLISCH}>{Attribute3.REBELLISCH}</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12}  sm={12}>
                <Button onClick={onSaveClick} variant="contained">Save</Button>
            </Grid>
        </Grid>
        </Container>
    )

}