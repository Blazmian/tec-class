import { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCreateAlumno from "../api/Alumnos/CreateAlumnos";
import CompEditAlumno from "../api/Alumnos/EditAlumnos";
import CompShowAlumnos from "../api/Alumnos/ShowAlumnos";
import logoTecNM from '../images/Logo-TecNM.png';
import "../styles/Administrador.css";

export default class Administrador extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="admin-header">
                    <img
                        src={logoTecNM}
                        className='Logo-Tecnm'
                        alt='Logo de Tecnológico Nacional de México'
                    />
                    <button>Cerrar Sesión</button>
                </div>
                <div className="admin-toolbar">
                    <ul>
                        <li><a href="/alumnos">Alumnos</a></li>
                        <li><a href="/docentes">Docentes</a></li>
                        <li><a href="#">Carreras</a></li>
                        <li><a href="#">Personal Escolar</a></li>
                        <li><a href="#">Puestos</a></li>
                        <li><a href="#">Materias</a></li>
                        <li><a href="#">Grupos</a></li>
                        <li><a href="#">Clases</a></li>
                    </ul>
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/alumnos" element={<CompShowAlumnos />} />
                        <Route path="/agregarAlumno" element={<CompCreateAlumno/>}></Route>
                        <Route path="/editarAlumno/:num_control" element={<CompEditAlumno/>}></Route>
                    </Routes>
                </BrowserRouter>
                <div className="footer">
                    <p>INSTITUTO TECNOLÓGICO DE HERMOSILLO - 2022</p>
                </div>
            </div>
        )
    }
}