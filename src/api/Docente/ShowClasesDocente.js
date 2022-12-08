import axios from "axios"
import { useEffect, useState } from "react"

const URL = 'http://localhost:8000/clases/'

const CompClasesDocente = () => {
    const [clases, setClases] = useState([])

    useEffect(() => {
        getClases()
    }, [])

    const getClases = async () => {
        const res = await axios.get(URL + '61231584')
        setClases(res.data)
    }

    return (
        <div className="main-container-docente">
            <table className="clases-container">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Grupo</th>
                        <th>Carrera</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clases.map((clase) => (
                        <tr key={clase.id_clase}>
                            <td>{clase.materia.nombre_asignatura}</td>
                            <td>{clase.grupo.nombre_grupo}</td>
                            <td>{clase.grupo.carrera.nombre_carrera}</td>
                            <td><button onClick={() => window.open(clase.enlace)}>Unirse</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CompClasesDocente