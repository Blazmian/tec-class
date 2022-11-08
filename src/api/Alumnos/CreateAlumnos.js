import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/alumnos/'

const CompCreateAlumno = () => {
    const [num_control, setNumControl] = useState('')
    const [nombres, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')
    const [semestre, setSemestre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [nip, setNip] = useState('')
    const [correo, setCorreo] = useState('')
    const [genero, setGenero] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { no_control_alumno: num_control, nombre_alumno: nombres, primer_ape: primer_ape, 
            segundo_ape: segundo_ape, fecha_nacimiento: fecha_nacimiento, semestre: semestre, 
            telefono: telefono, domicilio: domicilio, nip: nip, correo: correo, genero: genero })
        navigate('/')
    }

    return (
        <div>
            <h1>Agregar Alumno</h1>
            <form onSubmit={store}>

            </form>
        </div>
    )
}

export default CompCreateAlumno