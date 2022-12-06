import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { verificarLongitud } from "../../tools/Methods";

const URI = 'http://localhost:8000/administradores/'
const URIP = 'http://localhost:8000/personalNotAdmin/'

const CompCreateAdministrador = () => {
    const [usuario, setUsuario] = useState('')
    const [pass, setPass] = useState('')
    const [id_personal, setIdPersonal] = useState('')
    const [nombres, setNombres] = useState('')
    const [personal, setPersonal] = useState([])

    useEffect(() => {
        getPersonalNotAdmin()
    }, [])

    const getPersonalNotAdmin = async () => {
        const res = await axios.get(URIP)
        setPersonal(res.data)
    }

    const store = async (e) => {
        e.preventDefault()

        if (usuario.length * pass.length === 0) {
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

        if (!verificarLongitud(usuario, 4, 10)) {
            toast.error('El usuario debe ser entre 4 y 10 caracteres', {
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

        if (!id_personal) {
            toast.error('Debes seleccionar un personal', {
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

        await axios.post(URI, { usuario, pass, id_personal }).then(function (response) {
            toast.success('Administrador agregado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setUsuario('')
            setPass('')
            setNombres('')
            getPersonalNotAdmin()
        }).catch(function (error) {
            toast.error('No se pudo añadir el administrador', {
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

    const onRowClick = persona => {
        setIdPersonal(persona.id_personal)
        setNombres(persona.nombre + " " + persona.primer_ape + " " + persona.segundo_ape)
    }

    return (
        <div className="create-container">
            <h1>Agregar Administrador</h1>
            <form onSubmit={store}>
                <div className="personal-info-container">
                    <label>Información para Administrador</label>
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Usuario"></input>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Contraseña"></input>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)} type="text" placeholder="Nombre del Personal"></input>
                </div>
                <div className="contact-info-container">
                    <label>Personal para Administrador</label>
                    <div className="table-content-admin">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombres del Personal</th>
                                    <th>Genero</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personal.map((persona) => (
                                    <tr key={persona.id_personal} onClick={() => { onRowClick(persona) }}>
                                        <td>{persona.id_personal}</td>
                                        <td>{persona.nombre
                                            + " " + persona.primer_ape
                                            + " " + persona.segundo_ape}
                                        </td>
                                        <td>{persona.genero}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/personalescolar/administradores"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit" onChange={(e) => setIdPersonal(e.target.value)}>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateAdministrador