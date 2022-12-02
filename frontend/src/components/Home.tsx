import background from "../assets/backroung.jpeg"
import WizardApp from "./WizardApp";
import {Link, Route} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <p>Description</p>
            <p>You can create new wizards in our Wizard app and the new created wizard will be add
                to one of four wizard houses after selecting process </p>
            <img src={background}/>
            <Link to={"/speaking-hat"}>
                <button> Create your own wizard jupiii!!!</button>
            </Link>

        </div>
    )
}