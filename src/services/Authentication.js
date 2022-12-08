import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:8000/auth'

const Authentication = () => {
    const [authInformation, setAuthInformation] = useState('')
    const [admin, setAdmin] = useState([])
    const [docente, setDocente] = useState([])
    const navigate = useNavigate('')

    useEffect(() => {
        if(admin !== null) {
            navigate('/admin/usuarios/alumnos')
            return
        }
        if(docente !== null) {
            navigate('/docente')
            return
        }
        getAuthInformation()
    }, [])

    const getAuthInformation = () => {
        const token = localStorage.getItem('token')
        if (token != null) {
            setAuthInformation(token)
            tryAuth()
        } else {
            navigate('/login')
        }
    }

    const tryAuth = async () => {
        console.log('admin')
        const admin = await metodoAuth(URL + 'Admin/')
        console.log(admin.data)
        if (admin.status(200)) {
            setAdmin(admin.data)
        }

        console.log('docente')
        const docente = await metodoAuth(URL + 'Docente/')
        console.log(docente.data)
        if (docente.status(200)) {
            setDocente(docente.admin)
        }
        navigate('/login')
    }

    const metodoAuth = async (url) => {
        return await axios.post(url, { token: authInformation })
    }
}

export default Authentication

export const logout = (e) => {
    localStorage.removeItem('token')
    window.location.href = '/login'
    //Moverlo a la pantalla principal con useNavigate('/')
}