import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const URI = 'http://localhost:8000/alumnos/'

const CompShowAlumnos = () => {
    const [alumnos, setAlumnos] = useState([])
    useEffect( () => {
        getAlumnos()
    }, [])

    const getAlumnos = async () => {
        const res = await axios.get(URI)
        setAlumnos(res.data)
    }

    const deleteAlumno = async (id) => {
        await axios.delete(URI + id)
        getAlumnos()
    }

    const [infoAlumno, setInfoAlumno] = useState([])
    const [inputNombres, setInputNombres] = useState('')
    const [inputCorreo, setInputCorreo] = useState('')

    const onRowClick = alumno => {
        setInfoAlumno(alumno)
        setInputNombres(alumno.nombre_alumno + " " + alumno.primer_ape + " " + alumno.segundo_ape)
        setInputCorreo(alumno.correo)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>No- Control</th>
                            <th>Nombre</th>
                            <th>Semestre</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map( (alumno) => (
                            <tr key={ alumno.no_control_alumno } onClick={() => {onRowClick(alumno)}}>
                                <td>{ alumno.no_control_alumno }</td>
                                <td>{ alumno.primer_ape + " " + alumno.segundo_ape + " " + alumno.nombre_alumno }</td>
                                <td>{ alumno.semestre }</td>
                                <td>{ alumno.correo }</td>
                                <td>{ alumno.telefono }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos del Alumno</label>
                    <div className="input-text-container">
                        <input value={inputNombres} onChange={(e) => setInputNombres(e)} type="text" placeholder="Nombres del Alumno"></input>
                        <input value={inputCorreo} onChange={(e) => setInputCorreo(e)} type="text" placeholder="Correo"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { deleteAlumno(infoAlumno.no_control_alumno) } } type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/usuarios/editarAlumno/" + infoAlumno.no_control_alumno}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/usuarios/agregarAlumno"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowAlumnos