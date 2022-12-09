import axios from "axios"
import { useEffect, useState } from "react"

const URL = 'http://localhost:8000/clases/infoDocente/'

const CompInfoDocente = () => {
    const [clases, setClases] = useState([])
    const [numControl, setNumControl] = useState('')
    const [nombre, setNombre] = useState('')
    const [numMaterias, setNumMaterias] = useState(0)
    const [correo, setCorreo] = useState('')

    useEffect(() => {
        getClases()
    }, [])

    const getClases = async () => {
        const res = await axios.get(URL + '61231584')
        console.log(res.data)
        setClases(res.data)
        setNumControl(res.data[0].docente.no_control_docente)
        setNombre(res.data[0].docente.personal_escolar.nombre + " " +
            res.data[0].docente.personal_escolar.primer_ape + " " +
            res.data[0].docente.personal_escolar.segundo_ape)
        setNumMaterias(res.data.length)
        setCorreo(res.data[0].docente.personal_escolar.correo)
    }

    return (
        <div className="main-container-docente">
            <div className="info-container">
                <div className="info-docente">
                    <span className="s-gray"><label className="lb-bold">No. Control</label><label className="doc-value">{numControl}</label></span>
                    <span><label className="lb-bold">Nombre</label><label className="doc-value">{nombre}</label></span>
                    <span className="s-gray"><label className="lb-bold">No. Materias que imparte</label><label className="doc-value">{numMaterias}</label></span>
                    <span><label className="lb-bold">Correo</label><label className="doc-value">{correo}</label></span>
                </div>
            </div>
        </div>
    )
}

export default CompInfoDocente