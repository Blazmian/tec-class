import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/asgnaturas/'

const CompEditAsignaturas = () => {

    const {id} = useParams()
    const [carreras, setCarreras] = useState('')
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre_carrera: carreras
        })
        navigate('/carreras')
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
                    <Link to={"/otros/asignaturas"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditAsignaturas