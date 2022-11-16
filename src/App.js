import React, { Component } from 'react';
import FormIS from './components/FormIS'
import '@fontsource/montserrat';
import 'animate.css';
import Administrador from './components/Administrador';
import Authentication from './services/Authentication';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Se dee de registrar los datos del cliente
/**
 * Se debe de calcular el consumo energetico
 * s debe calcular el consumo total
 * se debe de poder registra el pago
 * se debe obtener reporte al cliente por su consumo
 * reporte de los cliente que tuvieron un mayor consumo
 */

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authentication />}></Route>
                    <Route path='/admin/*' element={<Administrador />} />
                    <Route path='/login' element={<FormIS />} ></Route>
                </Routes>
            </BrowserRouter >
        )
    }
}

export default App;
