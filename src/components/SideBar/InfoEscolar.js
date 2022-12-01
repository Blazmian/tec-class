import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompShowClases from "../../api/Clases/ShowClases";
import CompShowGrupos from "../../api/Grupos/ShowGrupos";
import CompEditGrupos from "../../api/Grupos/EditGrupos";
import CompCreateGrupos from "../../api/Grupos/CreateGrupos";


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
                    <Route path="/editarGrupos/:num_control" element={<CompEditGrupos/>} />
                    <Route path="/agregarGrupos" element={<CompCreateGrupos/>} />
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompInfoEscolar