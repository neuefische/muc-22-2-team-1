import useWizards from "../hooks/useWizards";
import WizardGalleryWithSearch from "./WizardGalleryWithSearch";

import {ReactNode} from "react";
import HouseGallery from "./HouseGallery";
import gryffindor from "../assets/gryffindor-wappe.png";
import ravenclaw from "../assets/ravenclaw-wappe.png";
import hufflepuff from "../assets/hufflepuff-wappe.png";
import slytherin from "../assets/slytherin-wappe.png";
import {Grid} from "@mui/material"; // Grid version 2

export default function WizardGalleryApp() {

    const {wizards, removeWizard} = useWizards()

    return (
        <div>
            <h1>Wizard Gallery</h1>

            <WizardGalleryWithSearch wizards={wizards} removeWizard={removeWizard}/>

            <div className="Houses">
                <Grid container spacing={0}>
                <HouseGallery image={gryffindor} houseName="gryffindor" students={2}></HouseGallery>
                <HouseGallery image={ravenclaw}  houseName="ravenclaw"  students={1}></HouseGallery>
                <HouseGallery image={hufflepuff} houseName="hufflepuff" students={3}></HouseGallery>
                <HouseGallery image={slytherin}  houseName="slytherin"  students={4}></HouseGallery>
                </Grid>
                </div>

        </div>
    )
}
