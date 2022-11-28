import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/personal_escolar/'

const CompCreatePersonal = () => {
    const [nombres, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [genero, setGenero] = useState('Masculino')
    const [contrasena, setContrasena] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { 
            nombre: nombres, 
            primer_ape: primer_ape, 
            segundo_ape: segundo_ape, 
            correo: correo, 
            telefono: telefono, 
            genero: genero, 
            contrasena: contrasena, 
            domicilio: domicilio, 
            fecha_nacimiento: fecha_nacimiento
        })
        navigate('/personal')
    }

    const setGender = e => {
        setGenero(e.target.value);
    }

    return (
        <div className="create-container">
            <h1>Agregar Personal</h1>
            <form onSubmit={ store }>
                <div className="personal-info-container">
                    <label>Información Personal</label>
                    <input value={nombres} onChange={ (e) => setNombres(e.target.value)} type="text" placeholder="Nombres"></input>
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
                    <input value={telefono} onChange={ (e) => setTelefono(e.target.value)} type="text" placeholder="Telefono del Personal"></input>
                    <input value={domicilio} onChange={ (e) => setDomicilio(e.target.value)} type="text" placeholder="Domicilio del Personal"></input>
                    <input value={correo} onChange={ (e) => setCorreo(e.target.value)} type="text" placeholder="Correo"></input>
                    <input value={contrasena} onChange={ (e) => setContrasena(e.target.value)} type="password" placeholder="Contraseña"></input>
                    <input type="password" placeholder="Confirmar Contraseña"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/personal"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreatePersonal