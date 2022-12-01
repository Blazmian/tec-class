import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/personal_escolar/'

const CompEditPuestos = () => {

    
    return (
        <div className="create-container">
            <h1>Editar Personal</h1>
            <form onSubmit={ ""/*update */ }>
                <div className="personal-info-container">
                    <label>Información Puesto</label>
                </div>    
                <div className="contact-info-container">
                </div>
                <div className="button-controller">
                <Link to={"/admin/personalescolar/personalescolar"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default CompEditPuestos