import axios from "axios";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Administrador from "./Administrador";

const URI = 'http://localhost:8000/login/'

function FormIS () {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    
    const login = async (e) => {
        e.preventDefault()
        if (user.length > 0 && pass.length > 0) {
            await axios.post(URI, { user, pass })
            //useNavigate('/alumnos')
            //<Administrador />
        } else {
            console.log('Error: debes introducir los datos')
        }
    }

    return (
        <form className='form-login' onSubmit={login}>
            <input value={user} onChange={(e) => { setUser(e.target.value) }} className='login-input' type='text' placeholder='No. Control'></input>
            <input value={pass} onChange={(e) => { setPass(e.target.value) }} className='login-input' type='password' placeholder='NIP'></input>
            <input type='submit' value='Ingresar'></input>
        </form>
    )
}

export default FormIS