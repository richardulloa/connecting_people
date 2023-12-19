import React, { useContext } from 'react';
import { useForm, } from 'react-hook-form';
import './css/InicioSesion.css'
import { Link } from 'react-router-dom';
import Contexto from '../../context/Contexto';
import { useNavigate } from 'react-router-dom';


function InicioSesion() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { setUsuario } = useContext(Contexto)

    const recogerDatos = (datos) => {

        const API_LOGIN = 'http://localhost:3300/api/login'

        const parametros = {
            method: 'GET',
            headers: {
                usuario: datos.email,
                password: datos.password
            },
            mode: 'cors'
        }

        const peticion = fetch(API_LOGIN, parametros)
        peticion
            .then((resp) => resp.json())
            .then((mesage) => {
                if (mesage.error) {
                    alert("ALGO SALIO MAL")
                } else {
                    setUsuario(mesage)
                    sessionStorage.setItem('usuario', JSON.stringify(mesage))
                    navigate("/main")
                }
            })
            .catch((error) => alert(error))
    }

    return (
        <div className='body-inicio'>
            <header className='cabezeraInicio'>
                <div>
                    <Link to={"/"}><img className="logo-navegador" src="../logo512.png" alt="logo" /></Link>
                    <Link to={"/alta"} className='inicioSesion'>Registrate</Link>
                </div>
            </header>
            <main className='mainInicioSesion'>
                <form className='formularioInicio' onSubmit={handleSubmit(recogerDatos)}>
                    <h1>Inicio Sesión</h1>

                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='email'>Correo electrónico: </label>
                        <input type='email' id='email' autoFocus {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    </div>
                    {
                        errors.email?.type === 'required'
                            ? <div className="errores">Este campo es obligatorio</div>
                            : null
                    }
                    {
                        errors.email?.type === 'pattern' &&
                        (<p className='errores'>Ingrese un correo electrónico válido</p>)
                    }
                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='password'>Contraseña:</label>
                        <input type='password' id='password' {...register('password', { required: true })} />
                        {
                            errors.password && (
                                <div className='errores'>
                                    {errors.password.type === 'required' && 'Este campo es obligatorio'}
                                </div>)
                        }
                    </div>

                    <input type='submit' className='submit3' />
                </form>
            </main>

        </div>
    )
}

export default InicioSesion
