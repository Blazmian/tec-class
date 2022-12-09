import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/grupos/'

const CompEditGrupos = () => {

    
    return (
        <div className="create-container">
            <h1>Editar Grupo</h1>
            <form onSubmit={ ""/*update */ }>
                <div className="personal-info-container">
                    <label>Información Grupo</label>
                </div>    
                <div className="contact-info-container">
                </div>
                <div className="button-controller">
                <Link to={"/admin/informacion_escolar/infoescolar"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditGrupos