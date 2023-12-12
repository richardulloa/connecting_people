import React from 'react'
import { useForm, } from 'react-hook-form';
import '../css/CrearFamilia.css'
import Navegador from '../Navegador';
import { ListItemAvatar } from '@mui/material';



function CrearEvento() {

    const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm()

    const datosEvento = (datos) => {

        const API_EXCURSIONES = 'http://localhost:3000/api/eventos'

        const objetoDatos = {
            nombreEvento: datos.nombreEvento,
            descripcionEvento: datos.descripccion,
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

        setFocus('nombreEvento')
        reset()
    }
    return (
        <div>
            < Navegador />
            <main id='crearEvento'>
                <form id='formularioEvento' onSubmit={handleSubmit(datosEvento)}>
                    <label htmlFor='nombreEvento' id='nombreEvento'>Nombre del evento</label>
                    <input type="text" id='nombreEvento' autoFocus {...register('nombreEvento', { required: true, maxLength: 45 })} />
                    {errors.nombreEvento?.type === 'required' ?
                        <div className='errores'>Debes introducir un nombre para el evento</div> : null}
                    {errors.nombreEvento?.type === 'maxLength' &&
                        <div className='errores'>El nombre del evento no puede superar los 45 carácteres</div>}

                    <div className='cajita3'>
                        <label htmlFor='fecha' id='fecha'>Fecha en la que se celebrará el evento</label>
                        <br></br>
                        <input type='date' id='fechaEvento' min={new Date().toISOString().split('T')[0]} {...register('fechaEvento', { required: true })} />
                        {errors.fechaEvento?.type === 'required' ?
                            <div className='errores'>La fecha para el evento es obligatoria</div> : null}
                    </div>
                    <div className='CalleEvento'>
                        <label htmlFor='calle' id='calle'>Nombre de la calle donde tendrá lugar</label>
                        <br></br>
                        <input type='text' id='calle' {...register('calle', { required: true })} />
                        {errors.calle?.type === 'required' ?
                            <div className='errores'>La dirección donde se realizará el evento obligatoria</div> : null}
                    </div>
                    <div className='preguntaEvento'>
                        <label htmlFor='numeroCalle' id='numeroCalle'>Indica aquí el número de la calle</label>
                        <br></br>
                        <input type='text' id='numeroCalle' {...register('numeroCalle', { required: true, maxLength: 45 })} />
                        {errors.numeroCalle?.type === 'required' ?
                            <div className='errores'>El numero de la callae es obligatorio</div> : null}
                    </div>

                    <div className='preguntaEvento'>
                        <label htmlFor='cp' id='cp'>Código postal</label>
                        <br></br>
                        <input type='text' id='cp' {...register('cp', { required: true, maxLength: 5 })} />
                        {errors.cp?.type === "required" ? (
                            <div className="errores">Este campo es obligatorio</div>
                        ) : null}
                        {errors.cp?.type === "maxLength" && (
                            <div className="errores">
                                La longitud del cp es máximo de 5 carácteres
                            </div>
                        )}
                    </div>
                    <div className='preguntaEvento'>
                        <label htmlFor='descripccion' id='descripccion'>Añade una descripción para el evento</label>
                        <p>Intenta describir lo mejor posible de que tratará el evento y que tipos de actividades se realizaran, con que personas te gustaria encontrarte... Así las personas que lo vean podrán decidir si se adecua a su familia o no.</p>
                        <textarea id='descripccion' {...register('descripccion', { required: true, minLength: 150, maxLength: 1000 })}></textarea>
                        {errors.descripccion?.type === 'required'
                            ? <div className='errores'>La descripción es obligatoria</div>
                            : null}
                        {errors.descripccion?.type === 'maxLength' &&
                            <div className='errores'>La descripcción del evento no puede superar los 1000 carácteres</div>}
                        {errors.descripccion?.type === 'minLength' &&
                            <div className='errores'>La descripcción del evento tiene que tener 150 caracteres como minimo.</div>}
                    </div>
                    <br></br>
                    <div className='preguntaEvento'>
                        <label></label>
                        <input type='submit' className='submit2' />
                    </div>
                </form>


            </main >
        </div >
    )
}

export default CrearEvento
