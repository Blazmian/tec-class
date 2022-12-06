import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { soloLetras, verificarLongitud } from "../../tools/Methods";

const URI = 'http://localhost:8000/carreras/'

const CompEditCarrera = () => {

    const {id} = useParams()
    const [carreras, setCarreras] = useState('')
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault()

        if (!carreras) {
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
            return
        }

        if (!soloLetras(carreras)) {
            toast.error('La carrera solo debe contener letras', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

        if (!verificarLongitud(carreras, 5, 30)) {
            toast.error('La carrera debe tener de 5 a 30 caracteres', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }

        await axios.put(URI + id, {
            nombre_carrera: carreras
        }).then(function(response)  {
            toast.success('Carrera editada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).catch(function (error) {
            toast.error('No se pudo editar la carrera', {
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

    useEffect( () => {
        getCarreraById()
    }, [])

    const getCarreraById = async () => {
        const res = await axios.get(URI + id)
        setCarreras(res.data.nombre_carrera)
    }

    return (
        <div className="create-container">
            <h1>Editar Carrera</h1>
            <form onSubmit={ update }>
                <div className="info-container">
                    <input value={carreras} onChange={ (e) => setCarreras(e.target.value)} type="text" placeholder="Nombre de la Materia"></input>
                </div>
                <div className="button-controller">
                <Link to={"/admin/otros/carreras"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditCarrera