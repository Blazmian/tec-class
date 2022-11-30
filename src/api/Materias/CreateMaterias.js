import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/materias/'

const CompCreateMateria = () => {
    const [materias, setMaterias] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre_asignatura: materias })
        .then(function(response)  {
            toast.success('Materia agregada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setMaterias('')
        }).catch(function (error) {
            toast.error('No se pudo agregar la materia', {
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
            <h1>Agregar Materia</h1>
            <form onSubmit={ store }>
                <div className="info-container">
                    <input value={materias} onChange={ (e) => setMaterias(e.target.value)} type="text" placeholder="Nombre de la Materia"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/materias"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateMateria