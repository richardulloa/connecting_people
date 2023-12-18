import React, { useContext } from 'react'
import { useForm, } from 'react-hook-form';
import './css/CrearEvento.css'
import Navegador from '../Navegador';
import Contexto from '../../context/Contexto'
import { useNavigate } from 'react-router';

function CrearFamilia() {
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm()

    const {usuario} = useContext(Contexto)

    const datosFamilia = (datos) => {

        const API_EXCURSIONES = 'http://localhost:3300/api/familias'

        const objetoDatos = {
            nombreFamilia: datos.nombreFamilia,
            descripcionFamilia: datos.descripcionFamilia,
            idusuario: usuario.idusuario
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
                    console.log(mesage)
                    navigate(`/familia/${mesage.idfamilia}`)
                }
            })
            .catch((error) => alert(error))

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
                        <label htmlFor='descripcionFamilia' id='descripcionFamilia'>Describe tu família</label>
                        <p>Esto será lo que verá cualquier persona cuando accedan a al información de tu família, Podras actualizarlo más tarde si lo deseas.</p>
                        <textarea id='descripcionFamilia' {...register('descripcionFamilia', { required: true, minLength: 50, maxLength: 1000 })}></textarea>
                        {errors.descripcionFamilia?.type === 'required'
                            ? <div className='errores'>La descripción es obligatoria</div>
                            : null}
                        {errors.descripcionFamilia?.type === 'maxLength' &&
                            <div className='errores'>La descripcción de tu família no puede superar los 1000 carácteres</div>}
                        {errors.descripcionFamilia?.type === 'minLength' &&
                            <div className='errores'>La descripcción de tu família tiene que tener 50 caracteres como minimo.</div>}
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
