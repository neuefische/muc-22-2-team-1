import {Grid} from "@mui/material";
import gryffindor from '../assets/gryffindor.png';
import slytherin from '../assets/slytherin.png';
import ravenclaw from '../assets/ravenclaw.png';
import hufflepuff from '../assets/hufflepuff.png';
import './Houses.scss';

export default function Houses() {

    return(
        <Grid item xs={12} sm={3} >
            <img src={gryffindor} alt="Gryffindor" className="HouseFlag"/>
            <img src={slytherin} alt="Slytherin" className="HouseFlag"/>
            <img src={ravenclaw} alt="Ravenclaw" className="HouseFlag"/>
            <img src={hufflepuff} alt="Hufflepuff" className="HouseFlag"/>
        </Grid>
    )
}
