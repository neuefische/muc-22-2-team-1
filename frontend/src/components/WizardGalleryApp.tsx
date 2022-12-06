import useWizards from "../hooks/useWizards";

import Houses from "./Houses";
import WizardGalleryWithSearch from "./WizardGalleryWithSearch";

import {ReactNode} from "react";
import {Grid} from "@mui/material"; // Grid version 2
function Item(props: { children: ReactNode }) {
    return null;
}

export default function WizardGalleryApp() {

    const {wizards, removeWizard} = useWizards()

    return (
        <div>
            <h1>Wizard Gallery</h1>

            <WizardGalleryWithSearch wizards={wizards} removeWizard={removeWizard}/>

            <Grid container spacing={2}>
                <Grid xs>
                    <Item>xs</Item>
                </Grid>
                <Grid xs={6}>

                    <Item>xs=6</Item>
                </Grid>
                <Grid xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
            <Houses/>

        </div>
    )
}