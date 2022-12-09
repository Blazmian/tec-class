import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/materias/'

const CompShowMaterias = () => {
    const navigate = useNavigate()
    const [materias, setMaterias] = useState([])
    useEffect( () => {
        getMaterias()
    }, [])

    const getMaterias = async () => {
        const res = await axios.get(URI)
        setMaterias(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar una materia', {
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
            title: '¿Deseas eliminar la materia ' + infoMateria.nombre_asignatura + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar materia',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMateria(id)
            }
        })
    }

    const deleteMateria = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Materia eliminada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoMateria('')
            setInputMateria('')
            getMaterias()
        })
    }

    const [infoMateria, setInfoMateria] = useState([])
    const [inputMateria, setInputMateria] = useState('')

    const onRowClick = materia => {
        setInfoMateria(materia)
        setInputMateria(materia.nombre_asignatura)
    }

    const editarMateria = () => {
        if (infoMateria.id_asignatura) {
            navigate('/admin/otros/editarMateria/' + infoMateria.id_asignatura)
        } else {
            toast.error('Debes seleccionar una materia', {
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
                            <th style={{max_witdh: "30px"}}>ID Materia</th>
                            <th>Nombre de Asignatura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materias.map( (materia) => (
                            <tr key={ materia.id_asignatura } onClick={() => {onRowClick(materia)}}>
                                <td>{ materia.id_asignatura }</td>
                                <td>{ materia.nombre_asignatura }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos de la Materia</label>
                    <div className="input-text-container">
                        <input value={inputMateria} onChange={(e) => setInputMateria(e)} type="text" placeholder="Materia"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { confirmarEliminacion(infoMateria.id_asignatura) } } type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <input onClick={ () => { editarMateria() } } type="button" value="Editar" className="input-button edit-btn"></input>
                        <Link to={"/admin/otros/agregarMateria"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowMaterias