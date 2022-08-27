import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Carro from './components/carros/Carro';
import Carteirinha from './components/carteirinha/Carteirinha';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Semaforo from './components/semaforo/Semaforo';

export default function App() {

    return(
        <>
        <Menu />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/semaforo' element={<Semaforo />}/>
            <Route path='/carteirinha' element={<Carteirinha />} />
            <Route path='/carros' element={<Carro />} />
        </Routes>
        <Footer />
        </>
    );
}