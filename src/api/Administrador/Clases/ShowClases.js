import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/clases/'

const CompShowClases = () => {

    const [clases, setClases] = useState([])
    useEffect(() => {
        getClases()
    }, [])

    const getClases = async () => {
        const res = await axios.get(URI)
        setClases(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar una clase', {
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
            title: '¿Deseas eliminar la clase?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar clase',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteClase(id)
            }
        })
    }

    const deleteClase = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Clase eliminada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoClase('')
            setInputMateria('')
            setInputGrupo('')
            setInputDocente('')
            getClases()
        })
    }

    const [infoClase, setInfoClase] = useState([])
    const [inputMateria, setInputMateria] = useState('')
    const [inputGrupo, setInputGrupo] = useState('')
    const [inputDocente, setInputDocente] = useState('')

    const onRowClick = clase => {
        setInfoClase(clase)
        setInputMateria(clase.materia.nombre_asignatura)
        setInputGrupo(clase.grupo.nombre_grupo)
        setInputDocente(clase.docente.personal_escolar.nombre
            + " " + clase.docente.personal_escolar.primer_ape
            + " " + clase.docente.personal_escolar.segundo_ape)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>ID Clase</th>
                            <th>Materia</th>
                            <th>Grupo</th>
                            <th>Docente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clases.map((clase) => (
                            <tr key={clase.id_clase} onClick={() => { onRowClick(clase) }}>
                                <td>{clase.id_clase}</td>
                                <td>{clase.materia.nombre_asignatura}</td>
                                <td>{clase.grupo.nombre_grupo}</td>
                                <td>{clase.docente.personal_escolar.nombre
                                    + " " + clase.docente.personal_escolar.primer_ape
                                    + " " + clase.docente.personal_escolar.segundo_ape}</td>
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
                        <input value={inputMateria} onChange={(e) => setInputMateria(e)} type="text" placeholder="Materia"></input>
                        <input value={inputGrupo} onChange={(e) => setInputGrupo(e)} type="text" placeholder="Grupo"></input>
                        <input value={inputDocente} onChange={(e) => setInputDocente(e)} type="text" placeholder="Docente"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={() => { confirmarEliminacion(infoClase.id_clase) }} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/informacion_escolar/agregarClases/"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowClases