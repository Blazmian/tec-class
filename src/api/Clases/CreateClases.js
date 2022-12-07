import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css'

const URI = 'http://localhost:8000/clases/'
const URID = 'http://localhost:8000/docentes/'
const URIG = 'http://localhost:8000/grupos/'
const URIM = 'http://localhost:8000/materias/'

const CompCreateClase = () => {
    const [link, setLink] = useState('')
    const [docentes, setDocentes] = useState([])
    const [dropDocentes, setDropDocentes] = useState(false)
    const [grupos, setGrupos] = useState([])
    const [dropGrupos, setDropGrupos] = useState(false)
    const [materias, setMaterias] = useState([])
    const [dropMaterias, setDropMaterias] = useState(false)
    const [id_docente, setIdDocente] = useState('')
    const [docente, setDocente] = useState('')
    const [id_grupo, setIdGrupo] = useState('')
    const [grupo, setGrupo] = useState('')
    const [id_materia, setIdMateria] = useState('')
    const [materia, setMateria] = useState('')

    useEffect(() => {
        getDocentes()
        getGrupos()
        getMaterias()
    }, [])

    const getDocentes = async () => {
        const res = await axios.get(URID)
        setDocentes(res.data)
    }

    const getGrupos = async () => {
        const res = await axios.get(URIG)
        setGrupos(res.data)
    }

    const getMaterias = async () => {
        const res = await axios.get(URIM)
        setMaterias(res.data)
    }

    const abrirCerrarDropdown = (boton) => {
        if (boton === 'docentes') {
            setDropDocentes(!dropDocentes)
        } else if (boton === 'grupos') {
            setDropGrupos(!dropGrupos)
        } else {
            setDropMaterias(!dropMaterias)
        }
    }

    const onRowClickMateria = materia=> {
        setIdMateria(materia.id_asignatura)
        setMateria(materia.nombre_asignatura)
    }

    const onRowClickGrupo = grupo => {
        setIdGrupo(grupo.id_grupo)
        setGrupo(grupo.nombre_grupo)
    }

    const onRowClickDocente = docente => {
        setIdDocente(docente.no_control_docente)
        setDocente(docente.personal_escolar.nombre + " " + docente.personal_escolar.primer_ape + " " + docente.personal_escolar.segundo_ape)
    }

    const store = async (e) => {
        e.preventDefault()

        if (!docente || !materia || !grupo) {
            toast.error('Debes seleccionar todos los parametros', {
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

        if (!link) {
            toast.error('Debes introducir el link', {
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
        
        await axios.post(URI, 
            { 
                no_control_docente : id_docente, 
                id_grupo: id_grupo, 
                id_asignatura: id_materia, 
                enlace: link 
            })
        .then(function(response)  {
            toast.success('Clase agregada con exito', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLink('')
            setDocente('')
            setGrupo('')
            setMateria('')
        }).catch(function (error) {
            toast.error('No se pudo agregar la clase', {
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

    return (
        <div className="create-container">
            <h1>Agregar Clase</h1>
            <form onSubmit={store}>
                <div className="info-container">
                    <input value={link} onChange={(e) => setLink(e.target.value)} type="text" placeholder="Link de la clase"></input>
                    <label>Materia</label>
                    <input value={materia} onChange={(e) => setMateria(e.target.value)} type="text" placeholder="Materia"></input>
                    <label>Grupo</label>
                    <input value={grupo} onChange={(e) => setGrupo(e.target.value)} type="text" placeholder="Grupo"></input>
                    <label>Docente</label>
                    <input value={docente} onChange={(e) => setDocente(e.target.value)} type="text" placeholder="Docente"></input>
                </div>
                <div className="contact-info-container">
                    <label>Materias</label>
                    <Dropdown isOpen={dropMaterias} toggle={abrirCerrarDropdown }>
                        <DropdownToggle caret>
                            Materias
                        </DropdownToggle>
                        <DropdownMenu>
                            {materias.map((materia) => (
                                <DropdownItem key={materia.id_asignatura} onClick={() => { onRowClickMateria(materia) }}>{materia.nombre_asignatura}</DropdownItem>
                            ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <label>Grupos</label>
                    <Dropdown isOpen={dropGrupos} toggle={() => abrirCerrarDropdown('grupos')}>
                        <DropdownToggle caret>
                            Grupos
                        </DropdownToggle>
                        <DropdownMenu>
                            {grupos.map((grupo) => (
                                <DropdownItem key={grupo.id_grupo} onClick={() => { onRowClickGrupo(grupo) }}>{grupo.nombre_grupo}</DropdownItem>
                            ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <label>Docentes</label>
                    <Dropdown isOpen={dropDocentes} toggle={() => abrirCerrarDropdown('docentes')}>
                        <DropdownToggle caret>
                            Docentes
                        </DropdownToggle>
                        <DropdownMenu>
                            {docentes.map((docente) => (
                                <DropdownItem key={docente.no_control_docente} onClick={() => { onRowClickDocente(docente) }}>
                                    {
                                        docente.personal_escolar.nombre + " " +
                                        docente.personal_escolar.primer_ape + " " +
                                        docente.personal_escolar.segundo_ape
                                    }
                                </DropdownItem>
                            ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="button-controller">
                    <Link to={"/admin/informacion_escolar/clases"}><button className="return-btn">⇽ Volver</button></Link>
                    <button className="create-btn" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateClase