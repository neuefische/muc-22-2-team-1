import {ChangeEvent, useState} from "react";
import {NewWizard} from "../model/Wizard";

type AddWizardProps = {
    addWizard: (newWizard: NewWizard) => Promise<any>
}

export default function AddWizard(props: AddWizardProps) {

    const [name, setName] = useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onSaveClick() {
        props.addWizard({name: name})
            .then(() => {
                setName("")
            })
    }

    return (
        <div>
            <input placeholder={"Name"} value={name} onChange={onNameChange}/>
            <button onClick={onSaveClick}>Save</button>
        </div>
    )

}