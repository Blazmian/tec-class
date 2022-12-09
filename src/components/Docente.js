import { NavLink, Route, Routes } from 'react-router-dom';
import logoTecNM from '../images/Logo-TecNM.png';
import { logout } from '../services/Authentication';
import CompClasesDocente from '../api/Docente/ShowClasesDocente'
import CompInfoDocente from '../api/Docente/ShowInformationDocente';

export const Docente = () => {
    return (
        <div className="main-container">
            <div className="admin-header">
                <img
                    src={logoTecNM}
                    className='Logo-Tecnm'
                    alt='Logo de Teclógico Nacional de México'
                />
                <button /*Se debe preguntar si se desea cerrar sesion*/ onClick={e => logout()}>Cerrar Sesión</button>
            </div>
            <div className="docente-main-content">
                <div className="docente-toolbar">
                    <ul>
                        <li><NavLink to={"/docente/misClases"} className={({ isActive }) => isActive ? 'active' : ""}>Mis Clases</NavLink></li>
                        
                        <li><NavLink to={"/docente/miInfo"}>Mi Información</NavLink></li>
                    </ul>
                </div>
                <div className="main-content-structure-docente">
                    <Routes>
                        <Route path="/misClases" element={<CompClasesDocente />} />
                        <Route path="/miInfo" element={<CompInfoDocente />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
//<li>Detalles de Mis Clases</li>
export default Docente