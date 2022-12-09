import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/administradores/'

const CompShowAdministradores = () => {
    const [administradores, setAdministradores] = useState([])
    useEffect(() => {
        getAdministradores()
    }, [])

    const getAdministradores = async () => {
        const res = await axios.get(URI)
        setAdministradores(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar un administrador', {
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
            title: '¿Deseas eliminar el administrador ' + infoAdministrador.usuario + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar administrador',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAdministrador(id)
            }
        })
    }

    const deleteAdministrador = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Administrador eliminado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoAdministrador('')
            setInputNombres('')
            setInputUsuario('')
            getAdministradores()
        })
    }

    const [infoAdministrador, setInfoAdministrador] = useState([])
    const [inputNombres, setInputNombres] = useState('')
    const [inputUsuario, setInputUsuario] = useState('')

    const onRowClick = administrador => {
        setInfoAdministrador(administrador)
        setInputNombres(administrador.personal_escolar.nombre
            + " " + administrador.personal_escolar.primer_ape
            + " " + administrador.personal_escolar.segundo_ape)
        setInputUsuario(administrador.usuario)
    }

    return (
        <div className="admin-content">
            <div className="main-content-structure">
                <div className="main-content">
                    <div className="table-content-admin">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombres del Personal</th>
                                    <th>Usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {administradores.map((administrador) => (
                                    <tr key={administrador.usuario} onClick={() => { onRowClick(administrador) }}>
                                        <td>{administrador.personal_escolar.nombre
                                            + " " + administrador.personal_escolar.primer_ape
                                            + " " + administrador.personal_escolar.segundo_ape}
                                        </td>
                                        <td>{administrador.usuario}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="edit-content-admin">
                        <form>
                            <label>Datos del Administrador</label>
                            <div className="input-text-container">
                                <input value={inputNombres} onChange={(e) => setInputNombres(e)} type="text" placeholder="Nombres del Personal"></input>
                                <input value={inputUsuario} onChange={(e) => setInputUsuario(e)} type="text" placeholder="Usuario"></input>
                            </div>
                            <div className="button-controller-container">
                                <input onClick={() => { confirmarEliminacion(infoAdministrador.usuario) }} type="button" value="Eliminar" className="input-button delete-btn"></input>
                                <Link to={"/admin/personalescolar/agregarAdministrador"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompShowAdministradores