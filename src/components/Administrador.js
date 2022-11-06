import React, { Component } from "react";
import LogoTecnm from "../images/Logo-TecNM.png"
import "../styles/Administrador.css"

export default class Administrador extends Component {
    render(){
        return (
        <div className="main-container">
            <div className="admin-header">
                <img 
                    src={LogoTecnm}
                    className='Logo-Tecnm'
                    alt='Logo de Tecnológico Nacional de México'
                />
                <button>Cerrar Sesión</button>
            </div>
            <div className="admin-toolbar">
                <ul>
                    <li><a href="#">Alumnos</a></li>
                    <li><a href="#">Docentes</a></li>
                    <li><a href="#">Carreras</a></li>
                    <li><a href="#">Personal Escolar</a></li>
                    <li><a href="#">Puestos</a></li>
                    <li><a href="#">Materias</a></li>
                    <li><a href="#">Grupos</a></li>
                    <li><a href="#">Clases</a></li>
                </ul>
            </div>
            <div className="admin-content">
                <div className="table-content-admin">
                    <table>
                        <thead>
                            <tr>
                                <th>No- Control</th>
                                <th>Nombre</th>
                                <th>Semestre</th>
                                <th>Fecha Nacimiento</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19330523</td>
                                <td>Acuña Gil Merali</td>
                                <td>6</td>
                                <td>10/11/2000</td>
                                <td>acuna.gil.merali@abc.com</td>
                                <td>6623042968</td>
                            </tr>
                            <tr>
                                <td>19330530</td>
                                <td>Barboza Escobar Jesús Emanuel</td>
                                <td>6</td>
                                <td>20/05/2000</td>
                                <td>Barboza.Escobar.J@abc.com</td>
                                <td>6624502694</td>
                            </tr>
                            <tr>
                                <td>19330645</td>
                                <td>Gama Diaz Eva</td>
                                <td>6</td>
                                <td>15/09/2000</td>
                                <td>gama.diaz.eva@abc.com</td>
                                <td>6622556148</td>
                            </tr>
                            <tr>
                                <td>19330615</td>
                                <td>Ibarra Estrada David</td>
                                <td>6</td>
                                <td>08/06/2000</td>
                                <td>ibarra_david@abc.com</td>
                                <td>6624489532</td>
                            </tr>
                            <tr>
                                <td>19330620</td>
                                <td>Martinez Fuentes Guillermo</td>
                                <td>6</td>
                                <td>14/01/2001</td>
                                <td>martinez.memo@abc.com</td>
                                <td>6624321547</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                            <tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr><tr>
                                <td>19330650</td>
                                <td>Rascon Ordaz Fajri Demian</td>
                                <td>6</td>
                                <td>11/07/2001</td>
                                <td>demian.rascon@abc.com</td>
                                <td>6621891519</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="edit-content-admin">
                    <form>
                        <label>Datos del Alumno</label>
                        <div className="input-text-container">
                            <input type="text" placeholder="Nombres del Alumno"></input>
                            <input type="text" placeholder="Semestre"></input>
                            <input type="text" placeholder="Fecha de Nacimiento"></input>
                            <input type="text" placeholder="Correo"></input>
                            <input type="text" placeholder="Telefono"></input>
                        </div>
                        <div className="button-controller-container">
                            <input type="button" value="Eliminar" className="input-button delete-btn"></input>
                            <input type="button" value="Editar" className="input-button edit-btn"></input>
                            <input type="button" value="Agregar" className="input-button add-btn"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}