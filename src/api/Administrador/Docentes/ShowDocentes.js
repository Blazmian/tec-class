import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/docentes/'

const CompShowDocentes = () => {
    const [alumnos, setDocentes] = useState([])
    useEffect( () => {
        getDocentes()
    }, [])

    const getDocentes = async () => {
        const res = await axios.get(URI)
        setDocentes(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar un docente', {
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
            title: '¿Deseas eliminar el docente ' + infoDocente.personal_escolar.nombre + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar docente',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteDocente(id)
            }
        })
    }

    const deleteDocente = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Docente eliminado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoDocente('')
            setInputNombres('')
            setInputCorreo('')
            getDocentes()
        })
    }

    const [infoDocente, setInfoDocente] = useState([])
    const [inputNombres, setInputNombres] = useState('')
    const [inputCorreo, setInputCorreo] = useState('')

    const onRowClick = docente => {
        setInfoDocente(docente)
        setInputNombres(docente.personal_escolar.nombre + " " + docente.personal_escolar.primer_ape + " " + docente.personal_escolar.segundo_ape)
        setInputCorreo(docente.personal_escolar.correo)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>No - Control</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map( (docente) => (
                            <tr key={ docente.no_control_docente } onClick={() => {onRowClick(docente)}}>
                                <td>{ docente.no_control_docente }</td>
                                <td>{ docente.personal_escolar.nombre + " " + docente.personal_escolar.primer_ape + " " + docente.personal_escolar.segundo_ape }</td>
                                <td>{ docente.personal_escolar.correo }</td>
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
                        <input value={ inputNombres } onChange={ (e) => setInputNombres(e) } type="text" placeholder="Nombres del Docente"></input>
                        <input value={ inputCorreo } onChange={ (e) => setInputCorreo(e) } type="text" placeholder="Correo"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { confirmarEliminacion(infoDocente.no_control_docente) }} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/usuarios/agregarDocente"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowDocentes