import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/puestos/'

const CompEditPuestos = () => {

    const { id } = useParams()
    const [puestos, setPuestos] = useState('')

    const update = async (e) => {
        e.preventDefault()

        if (!puestos) {
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
            return
        }

        await axios.put(URI + id, {
            puesto: puestos
        }).then(function (response) {
            toast.success('Puesto editado con exito', {
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
            toast.error('No se pudo editar el puesto', {
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
        getPuestoById()
    }, [])

    const getPuestoById = async () => {
        const res = await axios.get(URI + id)
        setPuestos(res.data.puesto)
    }

    return (
        <div className="create-container">
            <h1>Editar Personal</h1>
            <form onSubmit={update}>
                <div className="info-container">
                    <label>Información Puesto</label>
                    <input value={puestos} onChange={(e) => setPuestos(e.target.value)} type="text" placeholder="Nombre del Puesto"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/otros/puestos"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditPuestos