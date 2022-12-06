import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { soloLetras, verificarLongitud } from "../../tools/Methods";

const URI = 'http://localhost:8000/puestos/'

const CompCreatePuestos = () => {
    const [puestos, setPuestos] = useState('')

    const store = async (e) => {
        e.preventDefault()

        if (!puestos) {
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

        if (!soloLetras(puestos)) {
            toast.error('El puesto solo debe contener letras', {
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

        if (!verificarLongitud(puestos, 5, 30)) {
            toast.error('El puesto debe tener de 5 a 50 caracteres', {
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

        await axios.post(URI, { puesto: puestos })
        .then(function(response)  {
            toast.success('Puesto agregado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setPuestos('')
        }).catch(function (error) {
            toast.error('No se pudo agregar el puesto', {
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
            <h1>Agregar Puesto</h1>
            <form onSubmit={ store }>
                <div className="info-container">
                    <label>Información Puesto</label>
                    <input value={puestos} onChange={ (e) => setPuestos(e.target.value)} type="text" placeholder="Puesto"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/otros/puestos"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreatePuestos