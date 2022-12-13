import {NewWizard} from "../model/Wizard";
import {useEffect, useState} from "react";
import axios from "axios";

export default function useWizards(){

    const [wizards, setWizards] = useState<NewWizard[]>([])

    useEffect( ()=> {
        getWizards()
    }, [])

    function getWizards(){
        axios.get("/wizard-students")
            .then(response =>{
                setWizards(response.data)
            })
            .catch(console.error)
    }

    function addWizard(newWizard: NewWizard) {

        return axios.post("/wizard-students", newWizard)

            .then(response => response.data)
            .then((savedWizard) => setWizards(prevState => [...prevState,savedWizard]))
            .catch(console.error)
    }

    function removeWizard(id:string){
        axios.delete(`/wizard-students/${id}`)
            .then(()=> {
                setWizards(prevState => {
                    const listWithoutDeletetWizards= prevState.filter((wizard) => wizard.id !== id)
                    return listWithoutDeletetWizards
                })
            })
    }





    return{wizards, removeWizard, addWizard}
}
