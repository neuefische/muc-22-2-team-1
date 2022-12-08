import {Wizard} from "../model/Wizard";
import './WizardCard.scss';
import front from '../assets/front-card.png'
import back from '../assets/back-card.png'
import {useState} from "react";
import {Button} from "@mui/material";


type WizardCardProps = {
    wizard: Wizard,
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
                                 src="data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjgwIDI4MCIgZmlsbD0ibm9uZSI+PG1ldGFkYXRhPjxyZGY6UkRGPjxjYzpXb3JrPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz48ZGM6dGl0bGU+QXZhdGFhYXJzPC9kYzp0aXRsZT48ZGM6Y3JlYXRvcj48Y2M6QWdlbnQ+PGRjOnRpdGxlPlBhYmxvIFN0YW5sZXk8L2RjOnRpdGxlPjwvY2M6QWdlbnQ+PC9kYzpjcmVhdG9yPjxkYzpzb3VyY2U+aHR0cHM6Ly9hdmF0YWFhcnMuY29tLzwvZGM6c291cmNlPjxjYzpsaWNlbnNlIHJkZjpyZXNvdXJjZT0iaHR0cHM6Ly9hdmF0YWFhcnMuY29tLyIvPjxkYzpjb250cmlidXRvcj48Y2M6QWdlbnQ+PGRjOnRpdGxlPkZsb3JpYW4gS8O2cm5lcjwvZGM6dGl0bGU+PC9jYzpBZ2VudD48L2RjOmNvbnRyaWJ1dG9yPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48bWFzayBpZD0iYXZhdGFyc1JhZGl1c01hc2siPjxyZWN0IHdpZHRoPSIyODAiIGhlaWdodD0iMjgwIiByeD0iMCIgcnk9IjAiIHg9IjAiIHk9IjAiIGZpbGw9IiNmZmYiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhdmF0YXJzUmFkaXVzTWFzaykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCAzNikiPjxwYXRoIGQ9Ik0xMDAgMEM2OS4wNzIgMCA0NCAyNS4wNzIgNDQgNTZ2Ni4xNjZjLTUuNjc1Ljk1Mi0xMCA1Ljg4OC0xMCAxMS44MzR2MTRjMCA2LjA1MiA0LjQ4IDExLjA1OCAxMC4zMDUgMTEuODgxIDIuMDY3IDE5LjgwNiAxNC40NTggMzYuNTQxIDMxLjY5NSA0NC43M1YxNjNoLTRjLTM5Ljc2NCAwLTcyIDMyLjIzNi03MiA3MnY5aDIwMHYtOWMwLTM5Ljc2NC0zMi4yMzYtNzItNzItNzJoLTR2LTE4LjM4OWMxNy4yMzctOC4xODkgMjkuNjI4LTI0LjkyNCAzMS42OTUtNDQuNzNDMTYxLjUyIDk5LjA1OCAxNjYgOTQuMDUyIDE2NiA4OFY3NGMwLTUuOTQ2LTQuMzI1LTEwLjg4Mi0xMC0xMS44MzRWNTZjMC0zMC45MjgtMjUuMDcyLTU2LTU2LTU2eiIgZmlsbD0iI0ZGREJCNCIvPjxwYXRoIGQ9Ik03NiAxNDQuNjExdjhBNTUuNzkgNTUuNzkgMCAwMDEwMCAxNThhNTUuNzg5IDU1Ljc4OSAwIDAwMjQtNS4zODl2LThBNTUuNzg5IDU1Ljc4OSAwIDAxMTAwIDE1MGE1NS43OSA1NS43OSAwIDAxLTI0LTUuMzg5eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LCAxNzApIj48cGF0aCBkPSJNMTA4IDE0LjY5NEM5Mi40ODQgMTguMzggODAuODk1IDI1LjUyOSA3Ny4yMjggMzQuMTQyIDUwLjcyIDQ0Ljc2NSAzMiA3MC42OTYgMzIgMTAxdjloMjAwdi05LjAwMWMwLTMwLjMwMy0xOC43MjEtNTYuMjM0LTQ1LjIyOC02Ni44NTgtMy42NjctOC42MTMtMTUuMjU2LTE1Ljc2MS0zMC43NzItMTkuNDQ3VjMyYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNHMtMjQtMTAuNzQ1LTI0LTI0VjE0LjY5NHoiIGZpbGw9IiNGRkZGQjEiLz48cGF0aCBkPSJNMTAyIDYzLjMzN2E2Ny4xMSA2Ny4xMSAwIDAxLTctMi44MTdWMTEwaDdWNjMuMzM3em02MCAwYTY3LjAzOSA2Ny4wMzkgMCAwMDctMi44MTdWOTguNWEzLjUgMy41IDAgMTEtNyAwVjYzLjMzN3oiIGZpbGw9IiNGNEY0RjQiLz48cGF0aCBkPSJNMTg3LjYyIDM0LjQ4OGE3MS43ODggNzEuNzg4IDAgMDExMC44MzIgNS42MjhDMTk3LjEwNyA1NS42MTUgMTY3Ljg3IDY4IDEzMiA2OGMzMC45MjggMCA1Ni0xMy40MzEgNTYtMzAgMC0xLjE4OC0uMTI5LTIuMzYtLjM4LTMuNTEyem0tMTExLjI0IDBBMTYuNDc3IDE2LjQ3NyAwIDAwNzYgMzhjMCAxNi41NjkgMjUuMDcyIDMwIDU2IDMwLTM1Ljg3IDAtNjUuMTA3LTEyLjM4NS02Ni40NTItMjcuODg0YTcxLjc4MyA3MS43ODMgMCAwMTEwLjgzMi01LjYyOHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjE2Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2LCAxMzQpIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5IDE1LjYwOUMzMC40MSAyNS4yMyA0MS4wNjIgMzMgNTQgMzNjMTIuOTY4IDAgMjMuNjQ2LTcuODE3IDI1LTE4LjI2LjEwMS0uNC0uMjI1LTEuNzQtMi4xNzQtMS43NEgzMS4xNzRjLTEuNzkgMC0yLjMwNCAxLjI0LTIuMTc0IDIuNjA5eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNyIvPjxwYXRoIGQ9Ik03MCAxM0gzOWE1IDUgMCAwMDUgNWgyMWE1IDUgMCAwMDUtNXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNDMgMjMuNWwuMDAxLjA2Ny0uMDAxLjA2M3Y4Ljg3QzQzIDM4Ljg1MSA0OC4xNDkgNDQgNTQuNSA0NFM2NiAzOC44NTEgNjYgMzIuNXYtOC44N2wtLjAwMS0uMDYzTDY2IDIzLjVjMC0xLjkzMy0yLjkxLTMuNS02LjUtMy41LTIuMDEgMC0zLjgwOC40OTEtNSAxLjI2NC0xLjE5Mi0uNzczLTIuOTktMS4yNjQtNS0xLjI2NC0zLjU5IDAtNi41IDEuNTY3LTYuNSAzLjV6IiBmaWxsPSIjRkY0RjZEIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMiwgMTIyKSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YzAgNC40MTggNS4zNzMgOCAxMiA4czEyLTMuNTgyIDEyLTgiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjE2Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0LCA5MCkiPjxjaXJjbGUgY3g9IjgyIiBjeT0iMjIiIHI9IjEyIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iODIiIGN5PSIyMiIgcj0iNiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTYgMjUuNDQ3QzE4LjAwNyAyMS42NDggMjIuMTY0IDE5IDI2Ljk5OCAxOWM0LjgxNiAwIDguOTYxIDIuNjMgMTAuODE3IDYuNDA3LjU1MiAxLjEyMi0uMjMzIDIuMDQtMS4wMjQgMS4zNi0yLjQ1MS0yLjEwNy01LjkzMi0zLjQyMy05Ljc5My0zLjQyMy0zLjc0IDAtNy4xMjQgMS4yMzUtOS41NiAzLjIyOC0uODkxLjcyOC0xLjgxOC0uMDE0LTEuMjc4LTEuMTI1eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NCwgODIpIj48cGF0aCBkPSJNMTUuOTc2IDE3LjEyOEMxNy40NyA3LjYwNSAzMC4wNTkgMS4xMDggMzkuMTY0IDUuM2EyIDIgMCAxMDEuNjcyLTMuNjMzYy0xMS40ODctNS4yOS0yNi45IDIuNjY0LTI4LjgxMiAxNC44NGEyIDIgMCAwMDMuOTUyLjYyem04MC4wNDggMEM5NC41MyA3LjYwNSA4MS45NDIgMS4xMDggNzIuODM3IDUuM2EyIDIgMCAxMS0xLjY3My0zLjYzM2MxMS40ODctNS4yOSAyNi45IDIuNjY0IDI4LjgxMiAxNC44NGEyIDIgMCAwMS0zLjk1Mi42MnoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjYiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNywgMCkiPjxwYXRoIGQ9Ik0xODguMzE4IDEzOC43NjNDMjI3Ljg5NSAxMjkuMjU3IDI1NSAxMDkuODcxIDI1NSA4Ny41YzAtMjMuNTA1LTI5LjkyNC00My43MTYtNzIuNzk2LTUyLjYzMmwtLjMxNC0xLjQzMkMxNzcuODY3IDE1LjA4IDE2MS42MDkgMiAxNDIuODE4IDJoLTE4LjYzNkMxMDUuMzkxIDIgODkuMTMzIDE1LjA4IDg1LjExIDMzLjQzNmwtLjI2NyAxLjIxN0M0MS40MTIgNDMuNDU2IDExIDYzLjgwNCAxMSA4Ny41YzAgMjIuMzcxIDI3LjEwNSA0MS43NTcgNjYuNjgyIDUxLjI2M2E1Ni4xMjQgNTYuMTI0IDAgMDEtLjQ3My0zLjg5NkM3MS40MyAxMzQuMDAyIDY3IDEyOS4wMTkgNjcgMTIzdi0xM2MwLTUuOTQ2IDQuMzI1LTEwLjg4MiAxMC0xMS44MzRWOTJhNTUuODA4IDU1LjgwOCAwIDAxNC43MS0yMi41MTRjOC42MDMtMTUuNjgzIDkyLjcyNS0xNi40ODYgMTAyLjY1Mi4xNjNBNTUuODIxIDU1LjgyMSAwIDAxMTg5IDkydjYuMTY2YzUuNjc1Ljk1MiAxMCA1Ljg4OCAxMCAxMS44MzR2MTNjMCA2LjAxOS00LjQzMSAxMS4wMDItMTAuMjA5IDExLjg2N2E1Ni4wNjMgNTYuMDYzIDAgMDEtLjQ3MyAzLjg5NnoiIGZpbGw9IiNCMUUyRkYiLz48cGF0aCBkPSJNMTg5IDkyLjc0M2MzLjg0Ny0zLjI1NSA2LTYuODk3IDYtMTAuNzQzIDAtNi4wNzktNS4zOC0xMS42NS0xNC4zMjUtMTUuOTg0IDEuNjQ2IDEuMTAyIDIuOSAyLjMxMyAzLjY4NyAzLjYzM0E1NS44MjEgNTUuODIxIDAgMDExODkgOTJ2Ljc0M3ptLTMxLjczNy0zMy43NTZDMTQ5LjgxMSA1Ny43MDcgMTQxLjYxMSA1NyAxMzMgNTdjLTguOTgxIDAtMTcuNTE2Ljc3LTI1LjIyMSAyLjE1NSAxNS4xNjUtMi4yMDUgMzQuMTE1LTIuMzAzIDQ5LjQ4NC0uMTY4em0tNzIuNTc3IDcuMzQ0Qzc2LjEyNCA3MC42MTggNzEgNzYuMDY4IDcxIDgyYzAgMy44NDYgMi4xNTMgNy40ODggNiAxMC43NDNWOTJhNTUuODA4IDU1LjgwOCAwIDAxNC43MS0yMi41MTRjLjYyLTEuMTMgMS42My0yLjE4MSAyLjk3Ni0zLjE1NXoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjUiLz48L2c+PC9nPjwvc3ZnPg=="
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
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <Button onClick={onDeleteClick}>Delete</Button>
            <Button onClick={onFlipCard}>Flip</Button>
            <Button >onClick={}</Button>
        </div>
    )
}