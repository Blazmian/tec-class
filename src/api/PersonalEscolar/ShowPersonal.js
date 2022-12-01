import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/personal_escolar/'

const CompShowPersonal = () => {
    const [personal, setPersonal] = useState([])
    useEffect( () => {
        getPersonal()
    }, [])

    const getPersonal = async () => {
        const res = await axios.get(URI)
        setPersonal(res.data)
    }

    const deletePersonal = async (id) => {
        await axios.delete(URI + id)
        getPersonal()
    }

    const [infoPersonal, setInfoPersonal] = useState([])
    const [inputNombres, setInputNombres] = useState('')
    const [inputCorreo, setInputCorreo] = useState('')

    const onRowClick = persona => {
        setInfoPersonal(persona)
        setInputNombres(persona.nombre + " " + persona.primer_ape + " " + persona.segundo_ape)
        setInputCorreo(persona.correo)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th>ID Personal</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personal.map( (persona) => (
                            <tr key={ persona.id_personal } onClick={() => {onRowClick(persona)}}>
                                <td>{ persona.id_personal }</td>
                                <td>{ persona.primer_ape + " " + persona.segundo_ape + " " + persona.nombre }</td>
                                <td>{ persona.correo }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos del Personal</label>
                    <div className="input-text-container">
                        <input value={inputNombres} onChange={(e) => setInputNombres(e)} type="text" placeholder="Nombres del Personal"></input>
                        <input value={inputCorreo} onChange={(e) => setInputCorreo(e)} type="text" placeholder="Correo"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { deletePersonal(infoPersonal.id_personal) } } type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/personalescolar/editarPersonalescolar/" + infoPersonal.id_personal}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/personalescolar/agregarPersonalescolar/"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowPersonal