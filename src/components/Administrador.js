import { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import CompCreateAdministrador from "../api/Administradores/CreateAdministradores";
import CompShowAdministradores from "../api/Administradores/ShowAdministradores";
import CompCreateAlumno from "../api/Alumnos/CreateAlumnos";
import CompEditAlumno from "../api/Alumnos/EditAlumnos";
import CompShowAlumnos from "../api/Alumnos/ShowAlumnos";
import CompCreateCarrera from "../api/Carreras/CreateCarreras";
import CompEditCarrera from "../api/Carreras/EditCarreras";
import CompShowCarreras from "../api/Carreras/ShowCarreras";
import CompCreateMateria from "../api/Materias/CreateMaterias";
import CompEditMateria from "../api/Materias/EditMaterias";
import CompShowMaterias from "../api/Materias/ShowMaterias";
import CompCreatePersonal from "../api/PersonalEscolar/CreatePersonal";
import CompEditPersonal from "../api/PersonalEscolar/EditPersonal";
import CompShowPersonal from "../api/PersonalEscolar/ShowPersonal";
import logoTecNM from '../images/Logo-TecNM.png';
import { logout } from "../services/Authentication";
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
                        <button /*Se debe preguntar si se desea cerrar sesion*/ onClick={ e => logout()}>Cerrar Sesión</button>
                    </div>
                    <div className="admin-toolbar">
                        <ul>
                            <li><NavLink to={"/admin/alumnos"} className={({ isActive }) => isActive ? 'active' : ""}>Alumnos</NavLink></li>
                            <li><NavLink to={"/admin/docentes"}>Docentes</NavLink></li>
                            <li><NavLink to={"/admin/carreras"}>Carreras</NavLink></li>
                            <li><NavLink to={"/admin/personal"}>Personal Escolar</NavLink></li>
                            <li><NavLink to={"/admin/materias"}>Materias</NavLink></li>
                            <li><NavLink to={"/admin/grupos"}>Grupos</NavLink></li>
                            <li><NavLink to={"/admin/clases"}>Clases</NavLink></li>
                            <li><NavLink to={"/admin/administradores"}>Administrador</NavLink></li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path="/alumnos" element={<CompShowAlumnos />} />
                        <Route path="/agregarAlumno" element={<CompCreateAlumno />}></Route>
                        <Route path="/editarAlumno/:num_control" element={<CompEditAlumno />}></Route>

                        <Route path="/materias" element={<CompShowMaterias />}></Route>
                        <Route path="/agregarMateria" element={<CompCreateMateria />}></Route>
                        <Route path="/editarMateria/:id" element={<CompEditMateria />}></Route>

                        <Route path="/carreras" element={<CompShowCarreras />}></Route>
                        <Route path="/agregarCarrera" element={<CompCreateCarrera />}></Route>
                        <Route path="/editarCarrera/:id" element={<CompEditCarrera />}></Route>

                        <Route path="/personal" element={<CompShowPersonal />}></Route>
                        <Route path="/agregarPersonal" element={<CompCreatePersonal />}></Route>
                        <Route path="/editarPersonal/:id" element={<CompEditPersonal />}></Route>

                        <Route path="/administradores" element={<CompShowAdministradores />}></Route>
                        <Route path="/agregarAdministrador" element={<CompCreateAdministrador />}></Route>
                    </Routes>
                <div className="footer">
                    <p>INSTITUTO TECNOLÓGICO DE HERMOSILLO - 2022</p>
                </div>
            </div>
        )
    }
}