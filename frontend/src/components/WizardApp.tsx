import {Container, Grid} from "@mui/material";
import useWizards from "../hooks/useWizards";
import AddWizard from "./AddWizard";
import WizardGallery from "./WizardGallery";
import SortingHat from "./SortingHat";
import Houses from "./Houses";

export default function WizardApp() {

    const {wizards, addWizard, removeWizard} = useWizards()

    return (
        <div>
            <h1>Wizards</h1>
            <h2>Die ZaubererDatenbank</h2>
            <AddWizard addWizard={addWizard}/>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                <WizardGallery wizards={wizards} removeWizard={removeWizard}/>
                <SortingHat/>
                    <Houses/>
                </Grid>
            </Container>
        </div>
    )
}

