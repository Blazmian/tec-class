import React from 'react';
//import './App.css';
/*import logoTecNM from './images/Logo-TecNM.png';
import logoITH from './images/ITH.png';
import FormIS from './components/FormIS.js';*/
import Administrador from './components/Administrador';

function App() {
return (
    /*<div className='App'>
        <img
            src={logoTecNM}
            className='logo-TecNM'
            alt='Logo de Tecnológico Nacional de México'
        />
        <div className='contenedor-login'>
            <div className='toolbar-login'>
                <div className='toolbar-text'><h1 className='hstrong'>TECNM</h1><h1>HERMOSILLO</h1></div>
            </div>
            <div className='contenedor-logo-ith'>
                <img
                    src={logoITH}
                    className='logo-ITH'
                    alt='Logo del Instituto Tecnológico de Hermosillo'
                />
            </div>
            <h1 className='titulo-login'>Inicio de sesión</h1>
            <FormIS />
            <a href=''>¿Olvidaste tu contraseña?</a>
        </div>
        <h1 className='nm-institucion'>INSTITUTO TECNOLÓGICO DE HERMOSILLO - 2022</h1>
    </div>*/
    <Administrador />
  );
}

export default App;
