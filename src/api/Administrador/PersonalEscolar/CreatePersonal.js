import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { soloLetras, validarMail, verificarLongitud } from "../../../tools/Methods";

const URI = 'http://localhost:8000/personal_escolar/'

const CompCreatePersonal = () => {
    const [nombres, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [genero, setGenero] = useState('Masculino')
    const [domicilio, setDomicilio] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')

    const store = async (e) => {
        e.preventDefault()

        if (!(nombres.length * primer_ape.length * segundo_ape.length *
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

        if (!soloLetras(nombres)) {
            toast.error('El nombre solo admite letras', {
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

        if (!verificarLongitud(nombres, 2, 30)) {
            toast.error('El nombre debe ser mayor de 2 y menor a 30 caracteres', {
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

        if (!(soloLetras(primer_ape) && soloLetras(segundo_ape))) {
            toast.error('Los apellidos solo admiten letras', {
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

        if (!(verificarLongitud(primer_ape, 4, 15) && verificarLongitud(segundo_ape, 4, 15))) {
            toast.error('Los apellidos deben ser mayores de 4 y menores a 15 caracteres', {
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

        if (telefono.length !== 10) {
            toast.error('Debes introducir un numero de telefono valido', {
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

        if (!validarMail(correo)) {
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

        await axios.post(URI, { 
            nombre: nombres, 
            primer_ape: primer_ape, 
            segundo_ape: segundo_ape, 
            correo: correo, 
            telefono: telefono, 
            genero: genero, 
            domicilio: domicilio, 
            fecha_nacimiento: fecha_nacimiento
        }).then(function(response)  {
            toast.success('Personal agregado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setNombres('')
            setPrimerApellido('')
            setSegundoApellido('')
            setFechaNac('')
            setTelefono('')
            setDomicilio('')
            setCorreo('')
            setGenero('Masculino')
        }).catch(function (error) {
            toast.error('No se pudo agregar al personal', {
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

    const setGender = e => {
        setGenero(e.target.value);
    }

    return (
        <div className="create-container">
            <h1>Agregar Personal</h1>
            <form onSubmit={ store }>
                <div className="personal-info-container">
                    <label>Informaci??n Personal</label>
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
                    <label>Informaci??n de Contacto</label>
                    <input value={telefono} onChange={ (e) => setTelefono(e.target.value)} type="number" placeholder="Telefono del Personal"></input>
                    <input value={domicilio} onChange={ (e) => setDomicilio(e.target.value)} type="text" placeholder="Domicilio del Personal"></input>
                    <input value={correo} onChange={ (e) => setCorreo(e.target.value)} type="text" placeholder="Correo"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/personalescolar/personalescolar"}><button className="return-btn">??? Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreatePersonal