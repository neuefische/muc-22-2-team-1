import {NewWizard, Wizard} from "../model/Wizard";
import './WizardCard.scss';
import front from '../assets/front-card.png'
import back from '../assets/back-card.png'
import {useState} from "react";
import {Button} from "@mui/material";
import {red} from "@mui/material/colors";


type WizardCardProps = {
    wizard: NewWizard,
    house?: string,
    removeWizard: (id: string) => void
}


export default function WizardCard(props: WizardCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    function onDeleteClick() {
        props.removeWizard(props.wizard.id)
    }

    function onFlipCard() {
        setIsFlipped(prev => !prev);
    }

    console.log(props.wizard);

    return (
        <div className="box">
            <div className={`card ${props.house} ${isFlipped && 'card-flipped'}`}>
                <div className="card-inner">
                    <div className="card-front">
                        <div className="wizardImage">

                            <svg version="1.1"
                                 className="wizardImageBackground"
                                 viewBox="0 0 512.01 512.01">
                                <g>
                                    <path d="M507.804,200.28L262.471,12.866c-3.84-2.923-9.131-2.923-12.949,0L4.188,200.28c-3.605,2.773-5.077,7.531-3.648,11.84
			l93.717,281.92c1.451,4.373,5.525,7.296,10.133,7.296h303.253c4.587,0,8.683-2.944,10.133-7.296l93.717-281.92
			C512.882,207.789,511.41,203.053,507.804,200.28z"/>
                                </g>
                            </svg>


                            <img className="wizardAvatar"
                                 src={props.wizard.avatar}
                                 alt="wizard image"
                            />
                            <img className="wizardCardShowoff" src={front} alt=""/>

                            <h2 className="wizardName">{props.wizard.name}</h2>

                        </div>

                    </div>
                    <div className="card-back">

                        <div className="wizardImage">
                            <img className="wizardCardShowoff" src={back} alt=""/>
                            <h2 className="wizardName">{props.wizard.name}</h2>
                            <p className="wizardGender"> {props.wizard.gender}</p>

                            <ul className="wizardAttributes">
                                <li>{props.wizard.attribute1}</li>
                                <li>{props.wizard.attribute2}</li>
                                <li>{props.wizard.attribute3}</li>
                                <li>{props.wizard.chosenHouse}</li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <p>{props.wizard.avatar}</p>
            <Button onClick={onDeleteClick}>Delete</Button>
            <Button onClick={onFlipCard}>Flip</Button>

        </div>
    )
}