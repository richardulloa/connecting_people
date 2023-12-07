import React from 'react'
import { useForm, } from 'react-hook-form';
import './css/CrearFamilia.css'
import Navegador from './Navegador';

function CrearFamilia() {
    const { register, handleSubmit, formState: { errors }, reset, setFocus, } = useForm()
    
    const datosFamilia = (datos) => {
        console.table(datos)
        setFocus('nombreFamilia')
        reset()
    }
    return (
        <div>
            < Navegador />
            <main id='crearFamilia'>
                <form id='formularioFamilia' onSubmit={handleSubmit(datosFamilia)}>
                    <div className='preguntaFamilia'>
                        <label htmlFor='nombreFamilia' id='nombreFamilia'>Indica un nombre para tu família</label>
                        <p>Escoje un nombre que ayude a identificar a tu família</p>
                        <input type="text" id='nombreFamilia' autoFocus {...register('nombreFamilia', { required: true, maxLength: 60 })} />
                        {errors.nombreFamilia?.type === 'required' ?
                            <div className='errores'>Debes introducir un nombre para la família</div> : null}
                        {errors.nombreFamilia?.type === 'maxLength' &&
                            <div className='errores'>El nombre de la família no puede superar los 60 carácteres</div>}
                    </div>
                    <br />
                    <div className='preguntaFamilia'>
                        <label htmlFor='descripccion' id='descripccion'>Describe tu família</label>
                        <p>Esto será lo que verá cualquier persona cuando accedan a al información de tu família, Podras actualizarlo más tarde si lo deseas.</p>
                        <textarea id='descripccion' autoFocus {...register('descripccion', { required: true, minLength: 150, maxLength: 1000 })}></textarea>
                        {errors.descripccion?.type === 'required'
                            ? <div className='errores'>La descripción es obligatoria</div>
                            : null}
                        {errors.descripccion?.type === 'maxLength' &&
                            <div className='errores'>La descripcción de tu família no puede superar los 1000 carácteres</div>}
                        {errors.descripccion?.type === 'minLength' &&
                            <div className='errores'>La descripcción de tu família tiene que tener 150 caracteres como minimo.</div>}
                    </div>
                    <div className='preguntaFamilia'>
                        <label></label>
                        <br></br>
                        <input type='submit' className='submit2' />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default CrearFamilia
