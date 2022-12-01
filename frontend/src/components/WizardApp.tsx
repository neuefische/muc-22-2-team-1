import useWizards from "../hooks/useWizards";
import AddWizard from "./AddWizard";
import WizardGallery from "./WizardGallery";
import WizardCard from "./WizardCard";
import {Attribute1, Attribute2, Attribute3, Gender, Wizard} from "../model/Wizard";

export default function WizardApp() {

    const { wizards, addWizard, removeWizard} = useWizards()

    const wizard:Wizard = {
        name: 'Balthazar Rawadani',
        id: '123',
        gender: Gender.MUGGLE,
        attribute1: Attribute1.HIGHAMBITION,
        attribute2: Attribute2.COURAGE,
        attribute3: Attribute3.COOPERATIVE
    }

    return(
        <div>
            <h1>Wizards</h1>
            <h2>Die ZaubererDatenbank</h2>
            <AddWizard addWizard={addWizard}/>
            <WizardGallery wizards={wizards} removeWizard={removeWizard}/>

            <WizardCard wizard={wizard} removeWizard={removeWizard} house="gryffindor"></WizardCard>
            <WizardCard wizard={wizard} removeWizard={removeWizard} house="slytherin"></WizardCard>
            <WizardCard wizard={wizard} removeWizard={removeWizard} house="hufflepuff"></WizardCard>
            <WizardCard wizard={wizard} removeWizard={removeWizard} house="ravenclaw"></WizardCard>
        </div>
    )
}