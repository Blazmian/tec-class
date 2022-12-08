import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const URI = 'http://localhost:8000/puestos/'

const CompShowPuestos = () => {
    const [puestos, setPuestos] = useState([])
    useEffect(() => {
        getPuestos()
    }, [])
    const navigate = useNavigate()

    const getPuestos = async () => {
        const res = await axios.get(URI)
        setPuestos(res.data)
    }

    const confirmarEliminacion = (id) => {
        if (!id) {
            toast.error('Debes seleccionar un puesto', {
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
            title: '¿Deseas eliminar el puesto ' + infoPuesto.puesto + '?',
            text: "Esto no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar puesto',
            confirmButtonColor: '#f53333',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deletePuesto(id)
            }
        })
    }

    const deletePuesto = async (id) => {
        await axios.delete(URI + id).then(function (response) {
            toast.success('Puesto eliminado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setInfoPuesto('')
            setInputPuesto('')
            getPuestos()
        })
    }

    const [infoPuesto, setInfoPuesto] = useState([])
    const [inputPuesto, setInputPuesto] = useState('')

    const onRowClick = puesto => {
        setInfoPuesto(puesto)
        setInputPuesto(puesto.puesto)
    }

    const editarPuesto = () => {
        if (infoPuesto.id_puesto) {
            navigate('/admin/otros/editarPuesto/' + infoPuesto.id_puesto)
        } else {
            toast.error('Debes seleccionar un puesto', {
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
                            <th>ID</th>
                            <th>Puesto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {puestos.map((puesto) => (
                            <tr key={puesto.id_puesto} onClick={() => { onRowClick(puesto) }}>
                                <td>{puesto.id_puesto}</td>
                                <td>{puesto.puesto}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos del Puesto</label>
                    <div className="input-text-container">
                        <input value={inputPuesto} onChange={(e) => setInputPuesto(e)} type="text" placeholder="Puesto"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={() => { confirmarEliminacion(infoPuesto.id_puesto) }} type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <input onClick={() => editarPuesto()} type="button" value="Editar" className="input-button edit-btn"></input>
                        <Link to={"/admin/otros/agregarPuestos/"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowPuestos