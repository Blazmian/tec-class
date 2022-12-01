import { Link, NavLink } from "react-router-dom";

const URI = 'http://localhost:8000/alumnos/'

const CompShowGrupos = () => {

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos</label>
                    <div className="input-text-container">
                        
                    </div>
                    <div className="button-controller-container">
                        <input onClick={/* () => { deleteAlumno(infoAlumno.no_control_alumno) } */""} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/informacion_escolar/editarGrupos/" /*+ infoAlumno.no_control_alumno*/}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/informacion_escolar/agregarGrupos/"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowGrupos