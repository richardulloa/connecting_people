import React from 'react';
import { useForm, } from 'react-hook-form';
import '../css/Alta.css'
import { Link } from 'react-router-dom';


function Alta() {
    const { register, handleSubmit, formState: { errors }, reset, setFocus, watch } = useForm()

    const validateFechaNacimiento = (value) => {
        const fechaNacimiento = new Date(value);
        const edadMinima = new Date();
        edadMinima.setFullYear(edadMinima.getFullYear() - 18);
        console.log(fechaNacimiento >= edadMinima, edadMinima, fechaNacimiento)
        if (fechaNacimiento <= edadMinima) {
            return true
        }
        return false
    };

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
            <header>
                <div className='cajita'>
                    <Link to={"/"}><img src="../logo512.png" alt="logo"/></Link>
                    <Link to={"/login"} className='inicioSesion'>Inicia sesión</Link>
                </div>
            </header>
            <main className='registro'>
                <form id='altaUsuario' onSubmit={handleSubmit(recogerDatos)}>
                    <h1>Regístrate</h1>
                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='nombre'>Nombre y Apellidos</label>
                        <input id='nombre' autoFocus {...register('nombre', { required: true, maxLength: 30 })} />
                    </div>
                    {
                        errors.nombre?.type === 'required'
                            ? <div className="errores">Este campo es obligatorio</div> : null
                    }

                    {
                        errors.nombre?.type === 'maxLength' &&
                        <div className='errores'>La longitud del nombre no puede superar los 30 carácteres</div>
                    }

                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='email'>Correo electrónico: </label>
                        <input type='email' id='email' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    </div>
                    {
                        errors.email?.type === 'required'
                            ? <div className="errores">Este campo es obligatorio</div>
                            : null
                    }
                    {
                        errors.email?.type === 'pattern' && (
                            <p className='errores'>Ingrese un correo electrónico válido</p>)
                    }
                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='password'>Contraseña:</label>
                        <input type='password' id='password' {...register('password', { required: true, minLength: 6, })} />
                        {
                            errors.password && (
                                <div className='errores'>
                                    {errors.password.type === 'minLength' && 'La contraseña debe tener al menos 6 caracteres'}
                                    {errors.password.type === 'required' && 'Este campo es obligatorio'}
                                </div>)
                        }
                    </div>
                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='confirmPassword'>Confirma tu contraseña:</label>
                        <input type='password' id='confirmPassword' {...register('confirmPassword', { validate: (value) => value === watch('password') })} />
                        {errors.confirmPassword && (
                            <div className='errores'>
                                {errors.confirmPassword.type === 'validate' && 'Las contraseñas no coinciden'}
                            </div>
                        )}
                    </div>

                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='fechaNacimiento'>Fecha de nacimiento:</label>
                        <input type='date' id='fechaNacimiento' {...register('fechaNacimiento', {
                            required: true, validate: validateFechaNacimiento
                        })}
                        />
                        {
                            console.log("MIRA AQUI", errors.fechaNacimiento?.type === 'validate')
                        }
                        {
                            errors.fechaNacimiento?.type === 'required'
                                ? <div className='errores'>Este campo es obligatorio</div>
                                : null
                        }
                        {
                            errors.fechaNacimiento?.type === 'validate'
                                ? <div className='errores'>Debes tener al menos 18 años</div>
                                : null
                        }
                    </div>

                    <div className='pregunta'>
                        <label className="labelPregunta" htmlFor='cp'>Código postal:</label>
                        <input id='cp' {...register('cp', { required: true, maxLength: 5 })} />
                    </div>
                    {errors.cp?.type === 'required'
                        ? <div className="errores">Este campo es obligatorio</div>
                        : null
                    }
                    {errors.cp?.type === 'maxLength' &&
                        <div className='errores'>La longitud del cp es máximo de 5 carácteres</div>
                    }
                    <input type='submit' className='submit1' />
                </form>
            </main>

        </div>
    )
}

export default Alta