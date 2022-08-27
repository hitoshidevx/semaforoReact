import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

    return(

        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/semaforo">Semáforo</Link></li>
                    <li><Link to="/carteirinha">Carteirinha</Link></li>
                    <li><Link to="/carros">Carros</Link></li>
                </ul>
            </nav>
        </header>

    )
}