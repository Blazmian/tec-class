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
import CompPersonalEscolar from "./SideBar/PersonalEscolar";
import CompShowPersonal from "../api/PersonalEscolar/ShowPersonal";
import CompUsuarios from "../components/SideBar/Usuarios";
import logoTecNM from '../images/Logo-TecNM.png';
import { logout } from "../services/Authentication";
import "../styles/Administrador.css";
import CompInfoEscolar from "./SideBar/InfoEscolar";

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
                    <button /*Se debe preguntar si se desea cerrar sesion*/ onClick={e => logout()}>Cerrar Sesión</button>
                </div>
                <div className="main-content">
                    <div className="admin-sidebar">
                        <ul>
                            <li><NavLink to={"/admin/usuarios/"} className={({ isActive }) => isActive ? 'active' : ""}>Usuarios</NavLink></li>
                            <li><NavLink to={"/admin/personalescolar"}>Personal Escolar</NavLink></li>
                            <li><NavLink to={"/admin/informacion_escolar"}>Informacion Escolar</NavLink></li>
                            <li><NavLink to={"/admin/otros"}>Otros</NavLink></li>
                        </ul>
                    </div>
                    <div className="main-content-structure">
                        <Routes>
                            <Route path="/usuarios/*" element={ <CompUsuarios/> } />
                            <Route path="/personalescolar/*" element={ <CompPersonalEscolar/> } />
                            <Route path="/informacion_escolar/*" element={ <CompInfoEscolar/> } />
                        </Routes>
                    </div>
                </div>
                <div className="footer">
                    <p>INSTITUTO TECNOLÓGICO DE HERMOSILLO - 2022</p>
                </div>

            </div>
        )
    }
}