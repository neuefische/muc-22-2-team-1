import {NewWizard, Wizard} from "../model/Wizard";
import {ChangeEvent, useState} from "react";
import {Grid, TextField} from "@mui/material";
import WizardCard from "./WizardCard";

type WizardGalleryWithSearchProps = {
    wizards: NewWizard []
    removeWizard: (id: string) => void
}

export default function WizardGalleryWithSearch(props: WizardGalleryWithSearchProps) {

    const [searchText, setSearchText] = useState<string>("")

    const filteredWizards: NewWizard[] = props.wizards.filter(wizard => wizard.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    return (


        <Grid item xs={12} sm={6}>
            <TextField margin="normal" value={searchText} size="small" label="Search" fullWidth variant="outlined"
                       onChange={onSearchChange}/>

            {filteredWizards.reverse().map(wizard => <WizardCard wizard={wizard} key={wizard.id}
                                                                 removeWizard={props.removeWizard}/>)}
        </Grid>

    )
}