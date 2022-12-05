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
                    <MenuItem value={Gender.DIVERS}>{Gender.DIVERS}</MenuItem>
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
                    <MenuItem value={Attribute1.BRAVE}>{Attribute1.BRAVE}</MenuItem>
                    <MenuItem value={Attribute1.JUST}>{Attribute1.JUST}</MenuItem>
                    <MenuItem value={Attribute1.CLEVER}>{Attribute1.CLEVER}</MenuItem>
                    <MenuItem value={Attribute1.AMBITIOUS}>{Attribute1.AMBITIOUS}</MenuItem>
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
                    <MenuItem value={Attribute2.COURAGES}>{Attribute2.COURAGES}</MenuItem>
                    <MenuItem value={Attribute2.FAITHFUL}>{Attribute2.FAITHFUL}</MenuItem>
                    <MenuItem value={Attribute2.CREATIV}>{Attribute2.CREATIV}</MenuItem>
                    <MenuItem value={Attribute2.ASSERTIV}>{Attribute2.ASSERTIV}</MenuItem>
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
                    <MenuItem value={Attribute3.DETERMINED}>{Attribute3.DETERMINED}</MenuItem>
                    <MenuItem value={Attribute3.DILIGENT}>{Attribute3.DILIGENT}</MenuItem>
                    <MenuItem value={Attribute3.INTROVERT}>{Attribute3.INTROVERT}</MenuItem>
                    <MenuItem value={Attribute3.REBELIOUS}>{Attribute3.REBELIOUS}</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12}  sm={12}>
                <Button onClick={onSaveClick} variant="contained">Save</Button>
            </Grid>
        </Grid>
        </Container>
    )

}