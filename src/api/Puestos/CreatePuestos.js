import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/personal_escolar/'

const CompCreatePuestos = () => {

    return (
        <div className="create-container">
            <h1>Agregar Puesto</h1>
            <form onSubmit={ ""/* store */}>
                <div className="puestos-info-container">
                    <label>Información Puesto</label>
                    <input type="text" placeholder="Nombre"></input>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/personalescolar/puestos"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreatePuestos