import {Grid} from "@mui/material";
import WizardGalleryApp from "./WizardGallery";

export default function HausesGallery(){
    return (

<Grid container spacing={1}>
    <Grid container item xs={12} spacing={3}>
        <h1>el 1</h1>
    </Grid>
    <Grid container item xs={12} spacing={3}>
        <h1>el 2</h1>
    </Grid>
    <Grid container item xs={12} spacing={3}>
        <h1>el 3</h1>
    </Grid>
</Grid>
    )
}