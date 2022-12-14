import { NavLink, Route, Routes } from "react-router-dom";
import CompShowClases from "../../api/Administrador/Clases/ShowClases";
import CompShowGrupos from "../../api/Administrador/Grupos/ShowGrupos";
import CompCreateGrupos from "../../api/Administrador/Grupos/CreateGrupos";
import CompCreateClase from "../../api/Administrador/Clases/CreateClases";

const CompInfoEscolar = () => {
    return (
        <div className="admin-content">
            <div className="main-content-structure">
            <div className="admin-toolbar">
                <ul>
                    <li><NavLink to={"/admin/informacion_escolar/grupos"} className={({ isActive }) => isActive ? 'active' : ""}>Grupos</NavLink></li>
                    <li><NavLink to={"/admin/informacion_escolar/clases"} >Clases</NavLink></li>
                </ul>
            </div>
                <Routes>
                    <Route path="/grupos" element={<CompShowGrupos/>} />
                    <Route path="/clases" element={<CompShowClases/>} />
                    <Route path="/agregarClases/" element={<CompCreateClase/>} />
                    <Route path="/agregarGrupos" element={<CompCreateGrupos/>} />
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompInfoEscolar