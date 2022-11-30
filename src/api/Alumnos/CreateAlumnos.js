import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Alerts from "../../components/Alerts";

const URI = 'http://localhost:8000/alumnos/'

const CompCreateAlumno = () => {
    const [num_control, setNumControl] = useState('')
    const [nombres, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')
    const [telefono, setTelefono] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [nip, setNip] = useState('')
    const [correo, setCorreo] = useState('')
    const [genero, setGenero] = useState('Masculino')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { no_control_alumno: getRandomInt(10000000, 100000000), nombre_alumno: nombres, primer_ape: primer_ape, 
            segundo_ape: segundo_ape, fecha_nacimiento: fecha_nacimiento, semestre: 1, 
            telefono: telefono, domicilio: domicilio, nip: getRandomInt(1000, 10000), correo: correo, genero: genero }) 
    }

    const setGender = e => {
        setGenero(e.target.value);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className="create-container">
            <h1>Agregar Alumno</h1>
            <form onSubmit={ store }>
                <div className="personal-info-container">
                    <label>Información Personal</label>
                    <input value={nombres} onChange={ (e) => setNombres(e.target.value)} type="text" placeholder="Nombres del Alumno"></input>
                    <input value={primer_ape} onChange={ (e) => setPrimerApellido(e.target.value)} type="text" placeholder="Primer Apellido"></input>
                    <input value={segundo_ape} onChange={ (e) => setSegundoApellido(e.target.value)} type="text" placeholder="Segundo Apellido"></input>
                    <input value={fecha_nacimiento} onChange={ (e) => setFechaNac(e.target.value)} type="date"></input>
                    <label className="gender-lb">Genero</label>
                    <div className="gender-selection">
                        <label>
                            <input 
                                type="radio" 
                                value="Masculino" 
                                checked={genero == "Masculino" ? true : false}
                                onChange={setGender}/>
                            Masculino
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Femenino"
                                checked={genero == "Femenino" ? true : false}
                                onChange={setGender}/>
                            Femenino
                        </label>
                    </div>
                </div>
                <div className="contact-info-container">
                    <label>Información de Contacto</label>
                    <input value={telefono} onChange={ (e) => setTelefono(e.target.value)} type="text" placeholder="Telefono del Alumno"></input>
                    <input value={domicilio} onChange={ (e) => setDomicilio(e.target.value)} type="text" placeholder="Domicilio del Alumno"></input>
                    <input value={correo} onChange={ (e) => setCorreo(e.target.value)} type="text" placeholder="Correo"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/usuarios/alumnos"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateAlumno