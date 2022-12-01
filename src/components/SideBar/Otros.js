/*
ASIGNATURAS
CARRERAS
PUESTOS
 */
import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompShowAsignaturas from "../../api/Asignaturas/ShowAsignaturas";
import CompCreateAsignaturas from "../../api/Asignaturas/CreateAsignaturas";
import CompEditPuestos from "../../api/Puestos/EditPuestos";
import CompShowPuestos from "../../api/Puestos/ShowPuestos";
import CompCreatePuestos from "../../api/Puestos/CreatePuestos";
import CompEditAsignaturas from "../../api/Asignaturas/EditAsignaturas";
import CompShowCarreras from "../../api/Carreras/ShowCarreras";
import CompCreateCarrera from "../../api/Carreras/CreateCarreras";
import CompEditCarrera from "../../api/Carreras/EditCarreras";

const CompOtros = () => {
    return (
        <div className="admin-content">
            <div className="main-content-structure">
            <div className="admin-toolbar">
                <ul>
                    <li><NavLink to={"/admin/otros/asignaturas"} className={({ isActive }) => isActive ? 'active' : ""}>Asignaturas</NavLink></li>
                    <li><NavLink to={"/admin/otros/carreras"} >Carreras</NavLink></li>
                    <li><NavLink to={"/admin/otros/puestos"} >Puestos</NavLink></li>
                </ul>
            </div>
                <Routes>
                    <Route path="/asignaturas" element={<CompShowAsignaturas/>} />
                    <Route path="/agregarasignaturas" element={<CompCreateAsignaturas/>} />
                    <Route path="/editarasignaturas/:num_control" element={<CompEditAsignaturas/>} />
                    <Route path="/puestos" element={<CompShowPuestos/>} />
                    <Route path="/editarpuestos/:num_control" element={<CompCreatePuestos/>} />
                    <Route path="/agregarpuestos" element={<CompCreatePuestos/>} />
                    <Route path="/carreras" element={<CompShowCarreras/>} />
                    <Route path="/editarCarrera/:num_control" element={<CompEditCarrera/>} />
                    <Route path="/agregarCarrera" element={<CompCreateCarrera/>} /> 
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompOtros