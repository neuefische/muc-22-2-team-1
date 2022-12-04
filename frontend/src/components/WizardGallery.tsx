import {Wizard} from "../model/Wizard";
import {ChangeEvent, useState} from "react";
import WizardCard from "./WizardCard";

type WizardGalleryProps = {
    wizards : Wizard []
    removeWizard: (id: string) => void
}

export default function WizardGallery(props: WizardGalleryProps) {

    const [searchText, setSearchText] = useState<string>("")

    const filteredWizards: Wizard[] = props.wizards.filter(wizard=>wizard.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }
    return (
        <div>
            <input placeholder={"Search"} value={searchText} onChange={onSearchChange}/>
            <section>
                {filteredWizards.reverse().map(wizard => <WizardCard wizard={wizard} key={wizard.id}
                    removeWizard = {props.removeWizard}/>)}
            </section>
        </div>
    )
}