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
                navigate('/admin')
            }).catch(function (error) {
                navigate('/login')
            })
            switch (res.status) {
                case 200:
                    setUser(res.data.usuario)
                    setId(res.data.id_personal)
                    break;

                case 401:
                    console.log('Error: No se pudo autenticar')
                    toast.error('Error: No se pudo autenticar')
                    break;

                case 404:
                    console.log('Error: Usuario no encontrado')
                    toast.error('Error: Usuario no encontrado')
                    break;

                default:
                    console.log('Error inesperado')
                    toast.error('Error inesperado')
                    setUser(null)
                    break;
            }
            if (res.status == 200) {
                navigate('/admin')
            } else {
                navigate('/login')
            }
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