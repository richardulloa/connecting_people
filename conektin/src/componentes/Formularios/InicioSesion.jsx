import React from 'react';
import { useForm, } from 'react-hook-form';
import '../css/InicioSesion.css'
import { Link } from 'react-router-dom';


function InicioSesion() {
    
    const { register, handleSubmit, formState: { errors }, reset} = useForm()

    const recogerDatos = (datos) => {

        const API_EXCURSIONES = 'http://localhost:3000/api/usuarios'

        const objetoDatos = {
            nombreUsuario: datos.nombre,
            email: datos.email,
            password: datos.password,
            cp: datos.cp,
            fechaNacimiento: datos.fechaNacimiento
        }

        const parametros = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetoDatos),
            mode: 'cors'
        }

        const peticion = fetch(API_EXCURSIONES, parametros)
        peticion
            .then((resp) => resp.json())
            .then((mesage) => {
                if (mesage.error) {
                    alert("ALGO SALIO MAL")
                } else {
                    alert("ALTA COMPLETADA")
                }
            })
            .catch((error) => alert(error))
        reset()
    }

    return (
        <div>
            <header className='cabezeraInicio'>
                <div>
                    <Link to={"/"}><img src="../logo512.png" alt="logo"/></Link>
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
                        <input type='password' id='password' {...register('password', { required: true, minLength: 6, })} />
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
