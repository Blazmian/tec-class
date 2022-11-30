import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompCreateAlumno from "../../api/Alumnos/CreateAlumnos";
import CompEditAlumno from "../../api/Alumnos/EditAlumnos";
import CompShowClases from "../../api/Clases/ShowClases";
import CompShowDocentes from "../../api/Docentes/ShowDocentes";
import CompShowGrupos from "../../api/Grupos/ShowGrupos";


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
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompInfoEscolar