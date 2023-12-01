import React from 'react';
import { useForm, } from 'react-hook-form';
import '../css/Alta.css'



function Alta() {
    const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm()
    const validateFechaNacimiento = (value) => {
        const fechaNacimiento = new Date(value);
        const edadMinima = new Date();
        edadMinima.setFullYear(edadMinima.getFullYear() - 18);

        return fechaNacimiento <= edadMinima ||  <div className='errores'>Debe tener almenos 18 años</div>;
    };
    const recogerDatos = (datos) => {
        console.table(datos)
        setFocus('nombre')
        reset()
    }


    return (
        <div>
            <header>
                <div className='cajita'>
                    <a>Inicia sesión</a>
                </div>

            </header>
            <main>
                <form onSubmit={handleSubmit(recogerDatos)}>
                    <h1>Regístrate</h1>
                    <div className='pregunta'>
                        <label htmlFor='nombre'>Nombre</label>
                        <br></br>
                        <input id='nombre' autoFocus {...register('nombre', { required: true, maxLength: 30 })} />
                    </div>
                    {errors.nombre?.type === 'required' ?
                        <div className="errores">Este campo es obligatorio</div> : null}
                    {errors.nombre?.type === 'maxLength' &&
                        <div className='errores'>La longitud del nombre no puede superar los 30 carácteres</div>}
                    <div className='pregunta'>
                        <label htmlFor='apellidos'>Apellidos</label>
                        <br></br>
                        <input id='apellidos'  {...register('apellidos')} />
                    </div>
                    <div className='pregunta'>
                        <label htmlFor='email'>Correo electrónico: </label>
                        <br></br>
                        <input type='email' id='email' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    </div>
                    {errors.email?.type === 'required' ?
                        <div className="errores">Este campo es obligatorio</div>
                        :
                        null
                    }
                    {errors.email?.type === 'pattern' && (
                        <p className='errores'>Ingrese un correo electrónico válido</p>
                    )}
                    <div className='pregunta'>
                        <label htmlFor='usuario'>Usuario</label>
                        <br></br>
                        <input id='usuario' {...register('usuario', { required: true, maxLength: 10, minLength: 6 })} />
                    </div>
                    {errors.usuario?.type === 'required' ?
                        <div className="errores">Este campo es obligatorio</div>
                        :
                        null
                    }
                    {errors.nombre?.type === 'maxLength' &&
                        <div className='errores'>El usuario debe tener entre 6 y 10 carácteres</div>
                    }
                    {errors.nombre?.type === 'minLength' &&
                        <div className='errores'>El usuario debe tener entre 6 y 10 carácteres</div>
                    }
                    <div className='pregunta'>
                        <label htmlFor='password'>Contraseña</label>
                        <br></br>
                        <input id='password' {...register('password', { required: true, minLength: 6, })} />
                        {errors.password && (
                            <div className='errores'>
                                {errors.password.type === 'minLength' && 'La contraseña debe tener al menos 6 caracteres'}
                                {errors.password.type === 'required' && 'Este campo es obligatorio'}
                            </div>
                        )}
                    </div>

                    <div className='pregunta'>
                        <label htmlFor='fechaNacimiento'>Fecha de nacimiento</label>
                        <br></br>
                        <input type='date' id='fechaNacimiento' {...register('fechaNacimiento', {
                            required: true,
                            validate: validateFechaNacimiento,
                        })}
                        />
                        {errors.fechaNacimiento?.type === 'required' ?
                            <div className='errores'>Este campo es obligatorio</div>:null
                    }
                    </div>
                    <div className='pregunta'>
                        <label htmlFor='cp'>Código postal</label>
                        <br />
                        <input id='cp' {...register('cp', { required: true, maxLength: 5 })} />
                    </div>
                    {errors.cp?.type === 'required' ?
                        <div className="errores">Este campo es obligatorio</div>
                        :
                        null
                    }
                    {errors.cp?.type === 'maxLength' &&
                        <div className='errores'>La longitud del cp es máximo de 5 carácteres</div>
                    }
                    <div className='pregunta'>
                        <label></label>
                        <br></br>
                        <input type='submit' className='submit' />
                    </div>
                </form>
            </main>

        </div>
    )
}

export default Alta
