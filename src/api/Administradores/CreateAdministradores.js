import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/administradores/'
const URIP = 'http://localhost:8000/personalNotAdmin/'

const CompCreateAdministrador = () => {
    const [usuario, setUsuario] = useState('')
    const [pass, setPass] = useState('')
    const [id_personal, setIdPersonal] = useState('')
    const [nombres, setNombres] = useState('')
    const [personal, setPersonal] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        getPersonalNotAdmin()
    }, [])

    const getPersonalNotAdmin = async () => {
        try {
            const res = await axios.get(URIP)
            setPersonal(res.data)
            console.log(personal)
        } catch(error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }

    /*const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { usuario, pass, id_personal })
        navigate('/administradores')
    }*/

    const onRowClick = persona => {
        setIdPersonal(persona.id_personal)
        setNombres(persona.nombre + " " + persona.primer_ape + " " + persona.segundo_ape)
    }

    return (
        <div className="create-container">
            <h1>Agregar Administrador</h1>
            <form /*onSubmit={store}*/>
                <div className="personal-info-container">
                    <label>Información para Administrador</label>
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Usuario"></input>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Contraseña"></input>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)} type="text" placeholder="Nombre del Personal"></input>
                </div>
                <div className="contact-info-container">
                    <label>Personal para Administrador</label>
                    <table className="table-add-information">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombres del Personal</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Genero</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/administradores"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit" onChange={(e) => setIdPersonal(e.target.value)}>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateAdministrador