import {NavLink} from "react-router-dom";

export default function NavigationBar(){

    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/speaking-hat"}>Speaking Hat</NavLink>
            <NavLink to={"/wizard-gallery"}>Wizard Gallery</NavLink>
        </div>
    )
}