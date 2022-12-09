import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { soloLetras, verificarLongitud } from "../../../tools/Methods";

const URI = 'http://localhost:8000/carreras/'

const CompCreateCarrera = () => {
    const [carreras, setCarreras] = useState('')

    const store = async (e) => {
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

        await axios.post(URI, { nombre_carrera: carreras })
        .then(function(response)  {
            toast.success('Carerra agregada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCarreras('')
        }).catch(function (error) {
            toast.error('No se pudo agregar la carrera', {
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

    return (
        <div className="create-container">
            <h1>Agregar Carrera</h1>
            <form onSubmit={ store }>
                <div className="info-container">
                    <input value={carreras} onChange={ (e) => setCarreras(e.target.value)} type="text" placeholder="Nombre de la Carrera"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/otros/carreras"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateCarrera