import { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import CompPersonalEscolar from "./SideBar/PersonalEscolar";
import CompUsuarios from "../components/SideBar/Usuarios";
import logoTecNM from '../images/Logo-TecNM.png';
import { logout } from "../services/Authentication";
import "../styles/Administrador.css";
import CompInfoEscolar from "./SideBar/InfoEscolar";
import CompOtros from "./SideBar/Otros";

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
                        <div className="logo-ith">
                            <image src="/ITH.png"></image>
                        </div>
                        <Routes>
                            <Route path="/usuarios/*" element={ <CompUsuarios/> } />
                            <Route path="/personalescolar/*" element={ <CompPersonalEscolar/> } />
                            <Route path="/informacion_escolar/*" element={ <CompInfoEscolar/> } />
                            <Route path="/otros/*" element={ <CompOtros/> } />
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