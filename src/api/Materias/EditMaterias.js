import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/materias/'

const CompEditMateria = () => {

    const {id} = useParams()
    const [materias, setMaterias] = useState('')
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre_asignatura: materias
        })
        navigate('/materias')
    }

    useEffect( () => {
        getMateriaById()
    }, [])

    const getMateriaById = async () => {
        const res = await axios.get(URI + id)
        setMaterias(res.data.nombre_asignatura)
    }

    return (
        <div className="create-container">
            <h1>Editar Materia</h1>
            <form onSubmit={ update }>
                <div className="info-container">
                    <input value={materias} onChange={ (e) => setMaterias(e.target.value)} type="text" placeholder="Nombre de la Materia"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/materias"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditMateria