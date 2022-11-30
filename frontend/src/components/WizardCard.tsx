import {Wizard} from "../model/Wizard";

type WizardCardProps = {
    wizard:Wizard
    removeWizard: (id: string) => void
}


export default function WizardCard(props:WizardCardProps) {
    function onDeleteClick() {
        props.removeWizard(props.wizard.id)
    }
    return(
        <div>
            wizardId:{props.wizard.id}
            wizardName:{props.wizard.name}
            wizardGender:{props.wizard.gender}
            wizardAttribute1:{props.wizard.attribute1}
            wizardAttribute2:{props.wizard.attribute2}
            wizardAttribute3:{props.wizard.attribute3}
        </div>
    )
}