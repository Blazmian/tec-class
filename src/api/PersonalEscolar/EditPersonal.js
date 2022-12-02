import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/personal_escolar/'

const CompEditPersonal = () => {

    const {id} = useParams()
    const [nombre, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')
    const [telefono, setTelefono] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [correo, setCorreo] = useState('')
    const [genero, setGenero] = useState('Masculino')
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault()

        if (!(nombre.length * primer_ape.length * segundo_ape.length *
            telefono.length * domicilio.length * correo.length > 0)) {
            toast.error('Debes llenar todos los campos', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (fecha_nacimiento.length === 0) {
            toast.error('Debes introducir una fecha de nacimiento', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        let diaActual = new Date()
        let fechaNacimiento = new Date(fecha_nacimiento)
        let edad = diaActual.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = diaActual.getMonth() - fechaNacimiento.getMonth()
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diaActual.getDate() < fechaNacimiento.getDate())) {
            edad--
        }
        if (edad < 18) {
            toast.error('Introduzca una fecha de nacimiento valida', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(correo)) {
        } else {
            toast.error('Introduzca un correo valido', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        
        await axios.put(URI + id, {
            nombre: nombre, 
            primer_ape: primer_ape, 
            segundo_ape: segundo_ape, 
            correo: correo, 
            telefono: telefono, 
            genero: genero,
            domicilio: domicilio, 
            fecha_nacimiento: fecha_nacimiento
        }).then(function (response) {
            toast.success('Personal editado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).catch(function (error) {
            toast.error('No se pudo editar el personal', {
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
                    <input value={nombre} onChange={ (e) => setNombres(e.target.value)} type="text" placeholder="Nombre"></input>
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
                </div>
                <div className="button-controller">
                <Link to={"/admin/personalescolar/personalescolar"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditPersonal