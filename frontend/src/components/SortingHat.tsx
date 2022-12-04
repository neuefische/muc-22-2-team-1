import {Grid} from "@mui/material";
import sortingHat from '../assets/sorting_hat.jpeg';
import './SortingHat.scss';

export default function SortingHat() {

    return(

            <Grid item xs={12} sm={3} >
                <img src={sortingHat} alt="the sorting hat" className="Hat"/>
                <p className="SpeakingHat">...lass mich denken...</p>
            </Grid>
    )
}
