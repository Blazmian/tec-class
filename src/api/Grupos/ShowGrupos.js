import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/grupos/'

const CompShowGrupos = () => {

    const [grupos, setGrupos] = useState([])
    useEffect(() => {
        getGrupos()
    }, [])

    const getGrupos = async () => {
        const res = await axios.get(URI)
        setGrupos(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar un grupo', {
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
            title: '¿Deseas eliminar el grupo ' + infoGrupo.nombre_grupo + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar grupo',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteGrupo(id)
            }
        })
    }

    const deleteGrupo = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Grupo eliminado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoGrupo('')
            setInputNombre('')
            setInputCarrera('')
            getGrupos()
        })
    }

    const [infoGrupo, setInfoGrupo] = useState([])
    const [inputNombre, setInputNombre] = useState('')
    const [inputCarrera, setInputCarrera] = useState('')

    const onRowClick = grupo => {
        setInfoGrupo(grupo)
        setInputNombre(grupo.nombre_grupo)
        setInputCarrera(grupo.carrera.nombre_carrera)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>ID Grupo</th>
                            <th>Grupo</th>
                            <th>Capacidad</th>
                            <th>Carrera</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grupos.map((grupo) => (
                            <tr key={grupo.id_grupo} onClick={() => { onRowClick(grupo) }}>
                                <td>{grupo.id_grupo}</td>
                                <td>{grupo.nombre_grupo}</td>
                                <td>{grupo.capacidad}</td>
                                <td>{grupo.carrera.nombre_carrera}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos</label>
                    <div className="input-text-container">
                        <input value={inputNombre} onChange={(e) => setInputNombre(e)} type="text" placeholder="Grupo"></input>
                        <input value={inputCarrera} onChange={(e) => setInputCarrera(e)} type="text" placeholder="Carrera"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={() => { confirmarEliminacion(infoGrupo.id_grupo) }} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/informacion_escolar/agregarGrupos/"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowGrupos