import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/grupos/'

const CompCreateGrupos = () => {

    return (
        <div className="create-container">
            <h1>Agregar Grupo</h1>
            <form onSubmit={ /*store*/"" }>
                <div className="personal-info-container">

                </div>
                <div className="button-controller">
                    <Link to={"/admin/informacion_escolar/grupos"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateGrupos