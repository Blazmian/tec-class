import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/carreras/'

const CompShowCarreras = () => {
    const [carreras, setCarreras] = useState([])
    useEffect( () => {
        getCarreras()
    }, [])

    const getCarreras = async () => {
        const res = await axios.get(URI)
        setCarreras(res.data)
    }

    const deleteCarrera = async (id) => {
        await axios.delete(URI + id)
        getCarreras()
    }

    const [infoCarrera, setInfoCarrera] = useState([])
    const [inputCarrera, setInputCarrera] = useState('')

    const onRowClick = carrera => {
        setInfoCarrera(carrera)
        setInputCarrera(carrera.nombre_carrera)
    }

    return (
        <div className="admin-content">
            <div className="table-content-admin">
                <table>
                    <thead>
                        <tr>
                            <th style={{max_witdh: "30px"}}>ID Carrera</th>
                            <th>Nombre de la Carrera</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carreras.map( (carrera) => (
                            <tr key={ carrera.id_carrera } onClick={() => {onRowClick(carrera)}}>
                                <td>{ carrera.id_carrera }</td>
                                <td>{ carrera.nombre_carrera }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="edit-content-admin">
                <form>
                    <label>Datos de la Carrera</label>
                    <div className="input-text-container">
                        <input value={inputCarrera} onChange={(e) => setInputCarrera(e)} type="text" placeholder="Carrera"></input>
                    </div>
                    <div className="button-controller-container">
                        <input onClick={ () => { deleteCarrera(infoCarrera.id_carrera) } } type="button" value="Eliminar" className="input-button delete-btn"></input>
                        <Link to={"/admin/otros/editarCarrera/" + infoCarrera.id_carrera}><input type="button" value="Editar" className="input-button edit-btn"></input></Link>
                        <Link to={"/admin/otros/agregarCarrera"}><input type="button" value="Agregar" className="input-button add-btn"></input></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompShowCarreras