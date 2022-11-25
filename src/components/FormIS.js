import axios from "axios";
import React, { useState } from "react";
import logoTecNM from '../images/Logo-TecNM.png';
import logoITH from '../images/ITH.png';
import '../styles/FormIS.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const URI = 'http://localhost:8000/login/'

function FormIS() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault()
        if (user.length > 0 && pass.length > 0) {
            const res = await axios.post(URI, { usuario: user, pass: pass }).then(function(response) {
                toast.success('Sesión iniciada con exito', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                localStorage.setItem('token', response.data.token)     
                navigate('/')
            }).catch(function (error) {
                if (error.toJSON().status == 400 || error.toJSON().status == 404) {
                    toast.error('Usuario o contraseña incorrectos', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }) 
        } else {
            console.log('Error: debes introducir los datos')
            toast.error('Error: Debes introducir los datos', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='App'>
            <img
                src={logoTecNM}
                className='logo-TecNM'
                alt='Logo de Tecnológico Nacional de México'
            />
            <div className='contenedor-login'>
                <div className='toolbar-login'>
                    <div className='toolbar-text'><h1 className='hstrong'>TECNM</h1><h1>HERMOSILLO</h1></div>
                </div>
                <div className='contenedor-logo-ith'>
                    <img
                        src={logoITH}
                        className='logo-ITH'
                        alt='Logo del Instituto Tecnológico de Hermosillo'
                    />
                </div>
                <h1 className='titulo-login'>Inicio de sesión</h1>
                <form className='form-login' onSubmit={login}>
                    <input value={user} onChange={(e) => { setUser(e.target.value) }} className='login-input' type='text' placeholder='No. Control'></input>
                    <input value={pass} onChange={(e) => { setPass(e.target.value) }} className='login-input' type='password' placeholder='NIP'></input>
                    <input type='submit' value='Ingresar'></input>
                </form>
                <a href=''>¿Olvidaste tu contraseña?</a>
            </div>
            <h1 className='nm-institucion'>INSTITUTO TECNOLÓGICO DE HERMOSILLO - 2022</h1>
        </div>

    )
}

export default FormIS