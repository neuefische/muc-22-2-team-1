import { Button } from "@mui/material";
import {NavLink} from "react-router-dom";

type NavigationBarProps = {
    logout: () => Promise<string>
}
export default function NavigationBar(props: NavigationBarProps){

    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/speaking-hat"}>Speaking Hat</NavLink>
            <NavLink to={"/wizard-gallery"}>Wizard Gallery</NavLink>
            <NavLink to={"/login"} >Login</NavLink>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    )
}