import { NavLink, Route, Routes } from "react-router-dom";
import CompShowAdministradores from "../../api/Administrador/Administradores/ShowAdministradores";
import CompShowPersonal from "../../api/Administrador/PersonalEscolar/ShowPersonal";
import CompCreatePersonal from "../../api/Administrador/PersonalEscolar/CreatePersonal";
import CompEditPersonal from "../../api/Administrador/PersonalEscolar/EditPersonal";
import CompCreateAdministrador from "../../api/Administrador/Administradores/CreateAdministradores";

const CompPersonalEscolar = () => {
    return (
        <div className="admin-content">
            <div className="main-content-structure">
            <div className="admin-toolbar">
                <ul>
                    <li><NavLink to={"/admin/personalescolar/personalescolar"} className={({ isActive }) => isActive ? 'active' : ""}>Personal Escolar</NavLink></li>
                    <li><NavLink to={"/admin/personalescolar/administradores"}>Administradores</NavLink></li>
                </ul>
            </div>
                <Routes>
                    <Route path="/personalescolar" element={<CompShowPersonal/>} />
                    <Route path="/editarpersonalescolar/:id" element={<CompEditPersonal/>} />
                    <Route path="/agregarpersonalescolar" element={<CompCreatePersonal/>} />
                    <Route path="/administradores" element={<CompShowAdministradores/>} />
                    <Route path="/agregarAdministrador" element={<CompCreateAdministrador/>} />
                </Routes>
            
            </div>
        </div>
        
    )
}

export default CompPersonalEscolar