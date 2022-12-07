import {Button, Grid} from "@mui/material";
import sortingHat from '../assets/sorting_hat.jpeg';
import './SortingHat.scss';
import {Attribute1, Attribute2, Attribute3} from "../model/Wizard";
import {useEffect, useState} from "react";

interface House {
    name: string;
    score: number
}

export default function SortingHat() {
    const [housesScore, setHousesScore] = useState<Array<House>>([{name: 'Gryffindor', score: 0}, {
        name: 'Ravenclaw',
        score: 0
    }, {name: 'Hufflepuff', score: 0}, {name: 'Slytherin', score: 0}]);
    let text;
    useEffect(() => {
        givingScore(Attribute1.BRAVE);
        givingScore(Attribute2.FAITHFUL);
        givingScore(Attribute3.REBELIOUS);
    }, []);

    const givingScore = (attribute: string) => {

        if (attribute === Attribute1.BRAVE || attribute === Attribute2.COURAGES || attribute === Attribute3.DETERMINED) {
            setHousesScore(prevState => {
                const newState = prevState.map(house => {
                    if (house.name === 'Gryffindor') {
                        return {...house, score: house.score + 1};
                    }
                    return house;
                });

                newState.sort((a: House, b: House) => b.score - a.score);
                return newState;
            });
        }

        if (attribute === Attribute1.JUST || attribute === Attribute2.FAITHFUL || attribute === Attribute3.DILIGENT) {
            setHousesScore(prevState => {
                const newState = prevState.map(house => {
                    if (house.name === 'Hufflepuff') {
                        return {...house, score: house.score + 1};
                    }
                    return house;
                });
                newState.sort((a: House, b: House) => b.score - a.score);

                return newState;
            });
        }

        if (attribute === Attribute1.CLEVER || attribute === Attribute2.CREATIV || attribute === Attribute3.INTROVERT) {
            setHousesScore(prevState => {
                const newState = prevState.map(house => {
                    if (house.name === 'Ravenclaw') {
                        return {...house, score: house.score + 1};
                    }
                    return house;
                });
                newState.sort((a: House, b: House) => b.score - a.score);

                return newState;
            });
        }

        if (attribute === Attribute1.AMBITIOUS || attribute === Attribute2.ASSERTIV || attribute === Attribute3.REBELIOUS) {
            setHousesScore(prevState => {
                const newState = prevState.map(house => {
                    if (house.name === 'Slytherin') {
                        return {...house, score: house.score + 1};
                    }
                    return house;
                });
                newState.sort((a: House, b: House) => b.score - a.score);

                return newState;
            });
        }
    }

    if (housesScore[0].score > housesScore[1].score) {
        text = <p className="SpeakingHat">Das ist klar, du bist ein {housesScore[0].name}!</p>;
    } else {
        text = <p className="SpeakingHat">Das ist Schwierig, du kannst dich entscheiden: <Button> {housesScore[0].name}</Button>
            <Button> {housesScore[1].name}</Button><Button> {housesScore[2].name}</Button></p>;
    }

    return (

        <Grid item xs={12} sm={3}>
            <img src={sortingHat} alt="the sorting hat" className="Hat"/>
            {text}
        </Grid>
    )
}
