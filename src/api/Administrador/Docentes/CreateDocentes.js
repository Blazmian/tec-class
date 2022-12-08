import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/docentes/'
const URIP = 'http://localhost:8000/personalNotDocente/'

const CompCreateDocente = () => {
    const [nip, setNip] = useState('')
    const [id_personal, setIdPersonal] = useState('')
    const [nombres, setNombres] = useState('')
    const [personal, setPersonal] = useState([])

    useEffect(() => {
        getPersonalNotDocente()
    }, [])

    const getPersonalNotDocente = async () => {
        const res = await axios.get(URIP)
        setPersonal(res.data)
    }

    const store = async (e) => {
        e.preventDefault()

        if (nip.length === 0) {
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

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        await axios.post(URI, { no_control_docente: getRandomInt(10000000, 100000000), nip: nip, id_personal: id_personal }).then(function (response) {
            toast.success('Docente agregado con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setNip('')
            setNombres('')
            getPersonalNotDocente()
        }).catch(function (error) {
            toast.error('No se pudo añadir el docente', {
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
            <h1>Agregar Docente</h1>
            <form onSubmit={store}>
                <div className="personal-info-container">
                    <label>Información para Administrador</label>
                    <input value={nip} onChange={(e) => setNip(e.target.value)} type="password" placeholder="Nip"></input>
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
                    <Link to={"/admin/usuarios/docentes"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit" onChange={(e) => setIdPersonal(e.target.value)}>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateDocente