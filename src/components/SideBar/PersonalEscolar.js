import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompShowAdministradores from "../../api/Administradores/ShowAdministradores";
import CompCreateAlumno from "../../api/Alumnos/CreateAlumnos";
import CompEditAlumno from "../../api/Alumnos/EditAlumnos";
import CompShowAlumnos from "../../api/Alumnos/ShowAlumnos";
import CompShowDocentes from "../../api/Docentes/ShowDocentes";
import CompShowPersonal from "../../api/PersonalEscolar/ShowPersonal";
//import CompShowDocentes from "../Alumnos/ShowDocentes";

const CompPersonalEscolar = () => {
    return (
        <div className="admin-content">
            <div className="main-content-structure">
            <div className="admin-toolbar">
                <ul>
                    <li><NavLink to={"/admin/personalescolar/personalescolar"} className={({ isActive }) => isActive ? 'active' : ""}>Personal Escolar</NavLink></li>
                    <li><NavLink to={"/admin/personalescolar/puestos"}>Puestos</NavLink></li>
                    <li><NavLink to={"/admin/personalescolar/administradores"}>Administradores</NavLink></li>
                </ul>
            </div>
                <Routes>
                    <Route path="/personalescolar" element={<CompShowPersonal/>} />
                    <Route path="/agregarpersonal" element={<CompCreateAlumno />}/>
                    <Route path="/editarpersonal/:num_control" element={<CompEditAlumno />}/>
                    <Route path="/puestos" element={<CompShowDocentes/>} />
                    <Route path="/administradores" element={<CompShowAdministradores/>} />
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompPersonalEscolar