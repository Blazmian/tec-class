import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:8000/auth'

const Authentication = () => {
    var authInformation = ''
    const [admin, setAdmin] = useState([])
    const [docente, setDocente] = useState([])
    var modo = useRef('')
    const navigate = useNavigate('')

    useEffect(() => {
        if (admin.length !== 0) {
            navigate('/admin/usuarios/alumnos')
            return
        }
        if (docente.length !== 0) {
            navigate('/docente/misClases')
            return
        }
        getAuthInformation()
    }, [])

    const getAuthInformation = () => {
        const token = localStorage.getItem('token')
        console.log(localStorage.getItem('modo'))
        modo = localStorage.getItem('modo')
        if (token != null) {
            authInformation = token
            tryAuth()
        } else {
            navigate('/login')
        }
    }

    const tryAuth = async () => {
        if (modo === 'admin') {
            const admin = await metodoAuth(URL + 'Admin/')
            console.log('entre')
            if (admin) {
                setAdmin(admin.data)
                navigate('/admin/usuarios/alumnos')
                return
            }
        } else if (modo === 'docente') {
            const docente = await metodoAuth(URL + 'Docente/')
            if (docente) {
                console.log('autentico docente')
                navigate('/docente/misClases')
                setDocente(docente.admin)
            }
        } else {
            navigate('/login')
        }
    }

    const metodoAuth = async (url) => {
        const res = await axios.post(url, { token: authInformation })
        if (res.status === 205) {
            console.log('entro falso')
            return false
        }
        return true
    }
}

export default Authentication

export const logout = (e) => {
    localStorage.removeItem('token')
    window.location.href = '/login'
    //Moverlo a la pantalla principal con useNavigate('/')
}