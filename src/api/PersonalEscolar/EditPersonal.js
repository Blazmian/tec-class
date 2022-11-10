import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/personal_escolar/'

const CompEditPersonal = () => {

    const {id} = useParams()
    const [nombres, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')
    const [telefono, setTelefono] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [correo, setCorreo] = useState('')
    const [genero, setGenero] = useState('Masculino')
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
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

    useEffect( () => {
        getPersonalById()
    }, [])

    const getPersonalById = async () => {
        const res = await axios.get(URI + id)
        setNombres(res.data.nombre)
        setPrimerApellido(res.data.primer_ape)
        setSegundoApellido(res.data.segundo_ape)
        setFechaNac(res.data.fecha_nacimiento)
        setTelefono(res.data.telefono)
        setDomicilio(res.data.domicilio)
        setContrasena(res.data.contrasena)
        setCorreo(res.data.correo)
        setGenero(res.data.genero)
    }

    const setGender = e => {
        setGenero(e.target.value);
    }

    return (
        <div className="create-container">
            <h1>Editar Personal</h1>
            <form onSubmit={ update }>
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
                    <input value={contrasena} onChange={ (e) => setContrasena(e.target.value)} type="password" placeholder="Contraseña"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/personal"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditPersonal