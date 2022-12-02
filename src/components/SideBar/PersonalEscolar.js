import { NavLink, Route, Routes } from "react-router-dom";
import CompShowAdministradores from "../../api/Administradores/ShowAdministradores";
import CompShowPersonal from "../../api/PersonalEscolar/ShowPersonal";
import CompCreatePersonal from "../../api/PersonalEscolar/CreatePersonal";
import CompEditPersonal from "../../api/PersonalEscolar/EditPersonal";
import CompCreateAdministrador from "../../api/Administradores/CreateAdministradores";

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