import axios from "axios";
import { useState } from "react"

const URI = 'http://localhost:8000/auth/'
var authInformation = null;

const Authentication = () => {
    const [user, setUser] = useState('')
    const [id_user, setId] = useState('')

    authInformation = localStorage.getItem('token')

    if (authInformation != null) {
        getAuthentication()
    } else {
        return null
    }

    if (user){
        return user
    } else {
        return null
    }

    async function getAuthentication () {
        const res = await axios.post(URI, {token: authInformation})
        switch (res.status) {
            case 200:
                setUser(res.data.usuario)
                setId(res.data.id_personal)
                break;
    
            case 401:
                console.log('Error: No se pudo autenticar')
                break;
    
            case 404:
                console.log('Error: Usuario no encontrado')
                break;
    
            default:
                console.log('Error inesperado')
                break;
        }
        console.log(res.data)
    }
}

export default Authentication

export const logout = (e)  => {
    console.log('cerrando sesion...')
    localStorage.removeItem('token')
    //Moverlo a la pantalla principal con useNavigate('/')
}