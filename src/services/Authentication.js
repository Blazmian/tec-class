import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/auth/'
var authInformation = null;

const Authentication = () => {
    const [user, setUser] = useState('')
    const [id_user, setId] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        getAuthentication()
    }, [])

    authInformation = localStorage.getItem('token')

    const getAuthentication = async () => {
        if (authInformation != null) {
            const res = await axios.post(URI, { token: authInformation }).then(function (response) {
                setUser(response.data.usuario)
                setId(response.data.id_personal)
                navigate('/admin/usuarios/alumnos')
            }).catch(function (error) {
                toast.error('No se pudo autenticar', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/login')
            })
        } else {
            navigate('/login')
        }
    }
}

export default Authentication

export const logout = (e) => {
    localStorage.removeItem('token')
    window.location.href = '/login'
    //Moverlo a la pantalla principal con useNavigate('/')
}