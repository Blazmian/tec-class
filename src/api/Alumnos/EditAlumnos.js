import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/alumnos/'

const CompEditAlumno = () => {

    const { num_control } = useParams()
    const [nombres, setNombres] = useState('')
    const [primer_ape, setPrimerApellido] = useState('')
    const [segundo_ape, setSegundoApellido] = useState('')
    const [fecha_nacimiento, setFechaNac] = useState('')
    const [semestre, setSemestre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [nip, setNip] = useState('')
    const [correo, setCorreo] = useState('')
    const [genero, setGenero] = useState('Masculino')

    const update = async (e) => {
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
        if (edad < 16) {
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

        await axios.put(URI + num_control, {
            no_control_alumno: num_control,
            nombre_alumno: nombres,
            primer_ape: primer_ape,
            segundo_ape: segundo_ape,
            fecha_nacimiento: fecha_nacimiento,
            semestre: semestre,
            telefono: telefono,
            domicilio: domicilio,
            nip: nip,
            correo: correo,
            genero: genero
        }).then(function (response) {
            toast.success('Alumno editado con exito', {
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
            toast.error('No se pudo editar al alumno', {
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

    useEffect(() => {
        getAlumnoById()
    }, [])

    const getAlumnoById = async () => {
        const res = await axios.get(URI + num_control)
        setNombres(res.data.nombre_alumno)
        setPrimerApellido(res.data.primer_ape)
        setSegundoApellido(res.data.segundo_ape)
        setFechaNac(res.data.fecha_nacimiento)
        setSemestre(res.data.semestre)
        setTelefono(res.data.telefono)
        setDomicilio(res.data.domicilio)
        setNip(res.data.nip)
        setCorreo(res.data.correo)
        setGenero(res.data.genero)
    }

    const setGender = e => {
        setGenero(e.target.value);
    }

    return (
        <div className="create-container">
            <h1>Editar Alumno</h1>
            <form onSubmit={update}>
                <div className="personal-info-container">
                    <label>Información Personal</label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)} type="text" placeholder="Nombres del Alumno"></input>
                    <input value={primer_ape} onChange={(e) => setPrimerApellido(e.target.value)} type="text" placeholder="Primer Apellido"></input>
                    <input value={segundo_ape} onChange={(e) => setSegundoApellido(e.target.value)} type="text" placeholder="Segundo Apellido"></input>
                    <input value={fecha_nacimiento} onChange={(e) => setFechaNac(e.target.value)} type="date"></input>
                    <label className="gender-lb">Genero</label>
                    <div className="gender-selection">
                        <label>
                            <input
                                type="radio"
                                value="Masculino"
                                checked={genero == "Masculino" ? true : false}
                                onChange={setGender} />
                            Masculino
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Femenino"
                                checked={genero == "Femenino" ? true : false}
                                onChange={setGender} />
                            Femenino
                        </label>
                    </div>
                </div>
                <div className="contact-info-container">
                    <label>Información de Contacto</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" placeholder="Telefono del Alumno"></input>
                    <input value={domicilio} onChange={(e) => setDomicilio(e.target.value)} type="text" placeholder="Domicilio del Alumno"></input>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text" placeholder="Correo"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/usuarios/alumnos"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditAlumno