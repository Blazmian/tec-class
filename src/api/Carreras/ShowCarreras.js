import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/carreras/'

const CompShowCarreras = () => {
    const [carreras, setCarreras] = useState([])
    useEffect( () => {
        getCarreras()
    }, [])
    const navigate = useNavigate()

    const getCarreras = async () => {
        const res = await axios.get(URI)
        setCarreras(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar una carrera', {
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
            title: '¿Deseas eliminar la carrera ' + infoCarrera.nombre_carrera + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar carrera',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCarrera(id)
            }
        })
    }

    const deleteCarrera = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Carrera eliminada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoCarrera('')
            setInputCarrera('')
            getCarreras()
        })
    }

    const [infoCarrera, setInfoCarrera] = useState([])
    const [inputCarrera, setInputCarrera] = useState('')

    const onRowClick = carrera => {
        setInfoCarrera(carrera)
        setInputCarrera(carrera.nombre_carrera)
    }

    const editarCarrera = () => {
        if (infoCarrera.id_carrera) {
            navigate('/admin/otros/editarCarrera/' + infoCarrera.id_carrera)
        } else {
            toast.error('Debes seleccionar una carrera', {
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
                            <th style={{max_witdh: "30px"}}>ID Carrera</th>
                            <th>Nombre de la Carrera</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carreras.map( (carrera) => (
                            <tr key={ carrera.id_carrera } onClick={() => {onRowClick(carrera)}}>
                                <td>{ carrera.id_carrera }</td>
                                <td>{ carrera.nombre_carrera }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos de la Carrera</label>
                    <div className="input-text-container">
                        <input value={inputCarrera} onChange={(e) => setInputCarrera(e)} type="text" placeholder="Carrera"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { confirmarEliminacion(infoCarrera.id_carrera) } } type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <input onClick={ () => editarCarrera() } type="button" value="Editar" className="input-button edit-btn"></input>
                        <Link to={"/admin/otros/agregarCarrera"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowCarreras