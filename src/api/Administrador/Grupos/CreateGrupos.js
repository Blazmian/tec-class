import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { verificarLongitud } from "../../tools/Methods";

const URI = 'http://localhost:8000/grupos/'
const URIP = 'http://localhost:8000/carreras/'

const CompCreateGrupos = () => {
    const [nombre, setNombre] = useState('')
    const [capacidad, setCapacidad] = useState('')
    const [id_carrera, setIdCarrera] = useState('')
    const [carrera, setCarrera] = useState('')
    const [carreras, setCarreras] = useState([])

    useEffect(() => {
        getCarreras()
    }, [])

    const getCarreras = async () => {
        const res = await axios.get(URIP)
        setCarreras(res.data)
    }

    const store = async (e) => {
        e.preventDefault()

        if (nombre.length * capacidad.length === 0) {
            toast.error('Debes llenar todos los campos', {
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

        if (!verificarLongitud(nombre, 2, 5)) {
            toast.error('El nombre del grupo debe ser entre 2 y 5 caracteres', {
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

        if (!id_carrera) {
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

        await axios.post(URI, { 
            nombre_grupo: nombre, 
            capacidad: capacidad, 
            id_carrera: id_carrera
        }).then(function (response) {
            toast.success('Grupo creado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setNombre('')
            setCapacidad('')
            setCarrera('')
        }).catch(function (error) {
            toast.error('No se pudo crear el grupo', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    const onRowClick = carrera => {
        setIdCarrera(carrera.id_carrera)
        setCarrera(carrera.nombre_carrera)
    }

    return (
        <div className="create-container">
            <h1>Agregar Grupo</h1>
            <form onSubmit={store}>
                <div className="personal-info-container">
                    <label>Información para Grupos</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre del Grupo"></input>
                    <input value={capacidad} onChange={(e) => setCapacidad(e.target.value)} type="text" placeholder="Capacidad"></input>
                    <input value={carrera} onChange={(e) => setCarrera(e.target.value)} type="text" placeholder="Carrera"></input>
                </div>
                <div className="contact-info-container">
                    <label>Carreras para Grupo</label>
                    <div className="table-content-admin">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Carrera</th>
                                    <th>Carrera</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carreras.map((carrera) => (
                                    <tr key={carrera.id_carrera} onClick={() => { onRowClick(carrera) }}>
                                        <td>{carrera.id_carrera}</td>
                                        <td>{carrera.nombre_carrera}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/informacion_escolar/grupos/"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateGrupos