import {NewWizard, Wizard} from "../model/Wizard";
import {ChangeEvent, useState} from "react";
import WizardCard from "./WizardCard";
import {Grid, TextField} from "@mui/material";

type WizardGalleryProps = {
    wizards: NewWizard []
    removeWizard: (id: string) => void,
}

export default function WizardGallery(props: WizardGalleryProps) {

    // const [searchText, setSearchText] = useState<string>("")

    // const filteredWizards: Wizard[] = props.wizards.filter(wizard => wizard.name.toLowerCase().includes(searchText.toLowerCase()))

   /* function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }*/

    return (


        <Grid item xs={12} sm={6}>
           {/* <TextField margin="normal" value={searchText} size="small" label="Search" fullWidth variant="outlined"
                       onChange={onSearchChange}/>*/}

            {props.wizards.map(wizard => <WizardCard wizard={wizard} key={wizard.id}
                                                                 removeWizard={props.removeWizard } />)}
        </Grid>

    )
}