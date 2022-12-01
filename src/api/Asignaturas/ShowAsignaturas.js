import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/personal_escolar/'

const CompShowAsignaturas = () => {

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Asignatura</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos del Puesto</label>
                    <div className="input-text-container">
                        <input value={/*inputNombres} onChange={(e) => setInputNombres(e)*/""} type="text" placeholder="Nombres del Personal"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ /*() => { deletePersonal(infoPersonal.id_personal) } */ ""} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/otros/editarasignaturas/"/* + infoPersonal.id_personal*/}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/otros/agregarasignaturas/"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowAsignaturas