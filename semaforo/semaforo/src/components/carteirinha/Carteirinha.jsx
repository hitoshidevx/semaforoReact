import React, { useState } from 'react'
import amelie from '../../images/amelie.jpg'
import agatha from '../../images/agatha.jpg'
import suzy from '../../images/suzyy.jpg'
import dying from '../../images/dyinggirl.jpg'

export default function Carteirinha() {

    const[nome, setNome] = useState('nothing at nome')
    const[rm, setRm] = useState('nothing at rm')
    const[curso, setCurso] = useState('nothing at curso')
    const[turma, setTurma] = useState('nothing at turma')

    return(
        <>
            <h1>Carteirinha</h1>
            <section>
                <img src={amelie} alt="Amelie Poulain" />
                <h2>Gabriel Hitoshi</h2>
                <h2>RM93442</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDSR</h2>
            </section>

            <section>   
                <img src={agatha} alt="Agatha from Grand Hotel Budapest" />
                <h2>Gabriel Hitoshi</h2>
                <h2>RM93442</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDSR</h2>
            </section>

            <section>
                <img src={suzy} alt="Suzy from Moonrise Kingdom" />
                <h2>Gabriel Hitoshi</h2>
                <h2>RM93442</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDSR</h2>
            </section>
                
            <section>
                <img src={dying} alt="The Dying Girl" />
                <input type="text" onChange={(e) => setNome(e.target.value)} />
                <label>Nome</label>
                <h2>{nome}</h2>
                <input type="text" onChange={(e) => setRm(e.target.value)} />
                <label>RM</label>
                <h2>{rm}</h2>
                <input type="text" onChange={(e) => setCurso(e.target.value)} />
                <label>Curso</label>
                <h2>{curso}</h2>
                <input type="text" onChange={(e) => setTurma(e.target.value)} />
                <label>Turma</label>
                <h2>{turma}</h2>
            </section>
        </>
    )
}