import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const URI = 'http://localhost:8000/alumnos/'

const CompShowDocentes = () => {
    const [alumnos, setDocentes] = useState([])
    useEffect( () => {
        getDocentes()
    }, [])

    const getDocentes = async () => {
        const res = await axios.get(URI)
        setDocentes(res.data)
    }

    const deleteDocentes = async (id) => {
        await axios.delete(URI + id)
        getDocentes()
    }

    /*const [infoDocente, setInfoAlumno] = useState([])
    const [inputNombres, setInputNombres] = useState('')
    const [inputCorreo, setInputCorreo] = useState('')*/

    const onRowClick = docente => {
        /*setInfoDocente(alumno)
        setInputNombres(alumno.nombre_alumno + " " + alumno.primer_ape + " " + alumno.segundo_ape)
        setInputCorreo(alumno.correo)*/
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>No- Control</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map( (docente) => (
                            <tr key={ docente.no_control_docente } onClick={() => {onRowClick(docente)}}>
                                <td>{ docente.no_control_docente }</td>
                                <td>{ docente.primer_ape + " " + docente.segundo_ape + " " + docente.nombre_docente }</td>
                                <td>{ docente.correo }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos del Docente</label>                    
                    <div className="input-text-container">
                        <input value={/*inputNombres} onChange={(e) => setInputNombres(e)*/ ""} type="text" placeholder="Nombres del Docente"></input>
                        <input value={/*inputCorreo} onChange={(e) => setInputCorreo(e)*/ ""} type="text" placeholder="Correo"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ /*() => { deleteAlumno(infoAlumno.no_control_alumno) } */ ""} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/usuarios/editarAlumno/" /*+ infoAlumno.no_control_alumno*/}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/usuarios/agregarAlumno"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowDocentes