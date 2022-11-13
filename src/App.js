import React from 'react';
import FormIS from './components/FormIS'
import '@fontsource/montserrat';
import 'animate.css';
import Administrador from './components/Administrador';
import Authentication from './services/Authentication';

// Se dee de registrar los datos del cliente
/**
 * Se debe de calcular el consumo energetico
 * s debe calcular el consumo total
 * se debe de poder registra el pago
 * se debe obtener reporte al cliente por su consumo
 * reporte de los cliente que tuvieron un mayor consumo
 */

function App() {
    const res = Authentication();
    if (res != null) {
        return <Administrador/>
    } else {
        return <FormIS />
    }
}

export default App;
