import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/carreras/'

const CompCreateCarrera = () => {
    const [carreras, setCarreras] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre_carrera: carreras })
        navigate('/carreras')
    }

    return (
        <div className="create-container">
            <h1>Agregar Carrera</h1>
            <form onSubmit={ store }>
                <div className="info-container">
                    <input value={carreras} onChange={ (e) => setCarreras(e.target.value)} type="text" placeholder="Nombre de la Carrera"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/carreras"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateCarrera