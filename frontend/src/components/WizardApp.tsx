import useWizards from "../hooks/useWizards";
import AddWizard from "./AddWizard";
import WizardGallery from "./WizardGallery";


export default function WizardApp() {

    const { wizards, addWizard, removeWizard} = useWizards()


    return(
        <div>
            <h1>Wizards</h1>
            <h2>Die ZaubererDatenbank</h2>
            <AddWizard addWizard={addWizard}/>
            <WizardGallery wizards={wizards} removeWizard={removeWizard}/>
        </div>
    )
}

