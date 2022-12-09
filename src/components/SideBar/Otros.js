import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompEditPuestos from "../../api/Administrador/Puestos/EditPuestos";
import CompShowPuestos from "../../api/Administrador/Puestos/ShowPuestos";
import CompCreatePuestos from "../../api/Administrador/Puestos/CreatePuestos";
import CompShowCarreras from "../../api/Administrador/Carreras/ShowCarreras";
import CompCreateCarrera from "../../api/Administrador/Carreras/CreateCarreras";
import CompEditCarrera from "../../api/Administrador/Carreras/EditCarreras";
import CompShowMaterias from "../../api/Administrador/Materias/ShowMaterias";
import CompCreateMateria from "../../api/Administrador/Materias/CreateMaterias";
import CompEditMateria from "../../api/Administrador/Materias/EditMaterias";

const CompOtros = () => {
    return (
        <div className="admin-content">
            <div className="main-content-structure">
            <div className="admin-toolbar">
                <ul>
                    <li><NavLink to={"/admin/otros/materias"} className={({ isActive }) => isActive ? 'active' : ""}>Asignaturas</NavLink></li>
                    <li><NavLink to={"/admin/otros/carreras"} >Carreras</NavLink></li>
                    <li><NavLink to={"/admin/otros/puestos"} >Puestos</NavLink></li>
                </ul>
            </div>
                <Routes>
                    <Route path="/materias" element={<CompShowMaterias/>} />
                    <Route path="/agregarMateria" element={<CompCreateMateria/>} />
                    <Route path="/editarMateria/:id" element={<CompEditMateria/>} />
                    <Route path="/puestos" element={<CompShowPuestos/>} />
                    <Route path="/editarPuesto/:id" element={<CompEditPuestos/>} />
                    <Route path="/agregarPuestos" element={<CompCreatePuestos/>} />
                    <Route path="/carreras" element={<CompShowCarreras/>} />
                    <Route path="/editarCarrera/:id" element={<CompEditCarrera/>} />
                    <Route path="/agregarCarrera" element={<CompCreateCarrera/>} /> 
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompOtros