import {Grid} from "@mui/material";

import './Houses.scss';

type HouseGalleryProps = {
    image: string,
    students: number,
    houseName: string
}

export default function HouseGallery({image, students, houseName}: HouseGalleryProps) {

    return(
        <Grid item xs={12} sm={6} md={3} >
        <div className={`${houseName} HouseGallery`}>
            <img src={image} alt={image} className="HouseCounterFlag"/>
        </div>
        </Grid>
    )
}