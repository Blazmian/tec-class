import React, {Component} from "react";

class FormIS extends Component {
    render(){
        return(
            <form className='form-login'>
                <input type='text' placeholder='No. Control'></input>
                <input type='password' placeholder='NIP'></input>
                <input type='submit' value='Ingresar'></input>
            </form>
        )
    }
}

export default FormIS