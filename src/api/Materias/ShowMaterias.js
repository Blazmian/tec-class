import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/materias/'

const CompShowMaterias = () => {
    const [materias, setMaterias] = useState([])
    useEffect( () => {
        getMaterias()
    }, [])

    const getMaterias = async () => {
        const res = await axios.get(URI)
        setMaterias(res.data)
    }

    const deleteMateria = async (id) => {
        await axios.delete(URI + id)
        getMaterias()
    }

    const [infoMateria, setInfoMateria] = useState([])
    const [inputMateria, setInputMateria] = useState('')

    const onRowClick = materia => {
        setInfoMateria(materia)
        setInputMateria(materia.nombre_asignatura)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th style={{max_witdh: "30px"}}>ID Materia</th>
                            <th>Nombre de Asignatura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materias.map( (materia) => (
                            <tr key={ materia.id_asignatura } onClick={() => {onRowClick(materia)}}>
                                <td>{ materia.id_asignatura }</td>
                                <td>{ materia.nombre_asignatura }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos de la Materia</label>
                    <div className="input-text-container">
                        <input value={inputMateria} onChange={(e) => setInputMateria(e)} type="text" placeholder="Materia"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { deleteMateria(infoMateria.id_asignatura) } } type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/editarMateria/" + infoMateria.id_asignatura}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/agregarMateria"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowMaterias