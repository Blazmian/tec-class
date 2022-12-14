import React from 'react';
import FormIS from './components/FormIS'
import '@fontsource/montserrat';
import 'animate.css';
import './styles/App.css';
import Administrador from './components/Administrador';
import Authentication from './services/Authentication';
import Docente from './components/Docente';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/General.css'
import './styles/Docente.css'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authentication />}></Route>
                    <Route path='/admin/*' element={<Administrador />} />
                    <Route path='/docente/*' element={<Docente />} />
                    <Route path='/login' element={<FormIS />} ></Route>
                </Routes>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </BrowserRouter >
            <div className="footer">
                <p>INSTITUTO TECNOLÓGICO DE HERMOSILLO - 2022</p>
            </div>
        </>
    )
}

export default App;