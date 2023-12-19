import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/Ayuda.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm, } from 'react-hook-form';




function Ayuda() {

   const { register,handleSubmit, formState: { errors } } = useForm()
  
   const form = useRef();
   const navigate = useNavigate()
    const sendEmail = (e) => {
       console.log(form.current)
        emailjs.sendForm('service_tpoxpks', 'template_bj93273', form.current, '9vLicmUKckcuN4W_d')
            .then((result) => {
                form.current.reset();
                console.log(result.text);
                navigate('/ayuda/mensajeenviado');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='body-ayuda'>
            <header className='cabezera-ayuda'>
                <div>
                    <Link to={"/"}><img src="../logo512.png" alt="logo" /></Link>
                    <Link to={"/alta"} className='inicioSesion'>Registrate</Link>
                </div>
            </header>
            <main className='main-ayuda'>
                <h1>¿Necesitas ayuda?</h1>
                <form className='ayuda' ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <label className='Pregunta-ayuda'>Nombre</label>
                    <input className='input-ayuda' id='nombre-ayuda' type="text" name="user_name"  {...register('user_name', { required: true })} />
                    {
                        errors.user_name?.type === 'required'
                            ? <div className="errores">Este campo es obligatorio</div>
                            : null
                    }
                    <label className='Pregunta-ayuda'>Email</label>
                    <input className='input-ayuda' type="email" name="user_email" {...register('user_email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    {
                        errors.user_email?.type === 'required'
                            ? <div className="errores">Este campo es obligatorio</div>
                            : null
                    }
                    <label className='Pregunta-ayuda'>Mensaje</label>
                    <textarea className='mensaje-ayuda' name="message"  id='ayuda-mensaje'  {...register('message', { required: true })}  />
                    {
                       errors.message?.type === 'required'
                       ? <div className="errores">Este campo es obligatorio</div>
                       : null
                        }
                    
                    <input className='enviar-ayuda' type="submit" value="Enviar"  />
                </form>
            </main>
        </div>
    );
};
export default Ayuda