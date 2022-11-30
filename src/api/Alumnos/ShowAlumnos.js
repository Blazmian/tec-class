import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/alumnos/'

const CompShowAlumnos = () => {
    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
        getAlumnos()
    }, [])
    const navigate = useNavigate()

    const getAlumnos = async () => {
        const res = await axios.get(URI)
        setAlumnos(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar un alumno', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        Swal.fire({
            title: '¿Deseas eliminar el alumno ' + infoAlumno.nombre_alumno + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar alumno',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAlumno(id)
            }
        })
    }

    const deleteAlumno = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Alumno eliminado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoAlumno('')
            setInputNombres('')
            setInputCorreo('')
            getAlumnos()
        })
    }

    const [infoAlumno, setInfoAlumno] = useState([])
    const [inputNombres, setInputNombres] = useState('')
    const [inputCorreo, setInputCorreo] = useState('')

    const onRowClick = alumno => {
        setInfoAlumno(alumno)
        setInputNombres(alumno.nombre_alumno + " " + alumno.primer_ape + " " + alumno.segundo_ape)
        setInputCorreo(alumno.correo)
    }

    const editarAlumno = () => {
        if (infoAlumno.no_control_alumno) {
            navigate('/admin/usuarios/editarAlumno/' + infoAlumno.no_control_alumno)
        } else {
            toast.error('Debes seleccionar un alumno', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
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
                        <input onClick={() => { confirmarEliminacion(infoAlumno.no_control_alumno) }} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <input type="button" value="Editar" className="input-button edit-btn" onClick={() => editarAlumno()}></input>
                        <Link to={"/admin/usuarios/agregarAlumno"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowAlumnos