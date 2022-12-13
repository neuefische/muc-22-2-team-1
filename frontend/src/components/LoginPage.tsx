import {Button, TextField} from "@mui/material"
import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type LoginPageProps = {
    login: (username: string, password: string) => Promise<string>
}


export default function LoginPage(props: LoginPageProps) {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    function onUsernameChange(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function onLoginSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        props.login(username, password)
            .then(user => {
                navigate("/wizard-students")
            })
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={onLoginSubmit}>
                <TextField placeholder={"Username"} value={username} onChange={onUsernameChange}/>
                <TextField type={"password"} placeholder={"Password"} value={password} onChange={onPasswordChange}/>
                <Button type={"submit"}>Login</Button>
            </form>
        </div>
    )
}