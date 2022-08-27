import React from 'react'
import { useState } from 'react';

export default function Semaforo() {

    const [semaforo, setSemaforo] = useState(["Verde", "Amarelo", "Vermelho"]);
    const [ind, setInd] = useState(0)

    const increment = () => {
        if(ind == 0) {
            setInd(ind + 1)
            document.getElementById('smDiv').style.backgroundColor="yellow"
        } else if(ind == 1) {
            setInd(ind + 1)
            document.getElementById('smDiv').style.backgroundColor="red"
        } else if(ind == 2) {
            setInd(ind - 2)
            document.getElementById('smDiv').style.backgroundColor="green"
        }
    }

    return(
        <div style={{backgroundColor:'green'}} id="smDiv">
            <h2 id='sm'>{semaforo[ind]}</h2>
            <input type="button" value="Mudar" onClick={() => increment()} />
        </div>
    );
}