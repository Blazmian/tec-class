import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompCreateAlumno from "../../api/Administrador/Alumnos/CreateAlumnos";
import CompEditAlumno from "../../api/Administrador/Alumnos/EditAlumnos";
import CompShowAlumnos from "../../api/Administrador/Alumnos/ShowAlumnos";
import CompCreateDocente from "../../api/Administrador/Docentes/CreateDocentes";
import CompShowDocentes from "../../api/Administrador/Docentes/ShowDocentes";

const CompUsuarios = () => {
    return (
        <div className="admin-content">
            <div className="main-content-structure">
            <div className="admin-toolbar">
                <ul>
                    <li><NavLink to={"/admin/usuarios/alumnos"} className={({ isActive }) => isActive ? 'active' : ""}>Alumnos</NavLink></li>
                    <li><NavLink to={"/admin/usuarios/docentes"} className={({ isActive }) => isActive ? 'active' : ""}>Docentes</NavLink></li>
                </ul>
            </div>
                <Routes>
                    <Route path="/alumnos" element={<CompShowAlumnos/>} />
                    <Route path="/agregarAlumno" element={<CompCreateAlumno />}/>
                    <Route path="/editarAlumno/:num_control" element={<CompEditAlumno />}/>
                    <Route path="/docentes" element={<CompShowDocentes/>} />
                    <Route path="/agregarDocente" element={<CompCreateDocente />}/>
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompUsuarios