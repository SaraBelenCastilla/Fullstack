import React from 'react'

function NuevaConsulta() {
//defino la variable de entorno
    const {VITE_LINK_API_CONSULTA}=import.meta.env

    //pongo todos los elementos del formulario con metodo POST a express utilizando la variable de entorno
    return (
        <>
      <div className='nuevaConsulta'>
           <form className='formulario__consulta' action={VITE_LINK_API_CONSULTA} method="POST" >
              <h2 className='nuevaConsulta__h2'>Nueva Consulta</h2>
              <div className='input-box'>
               <input className='input' type="text" placeholder='Usuario'required  name="Usuario" id="usuario" value ={localStorage.getItem("Usuario")} readOnly /> 
              
              </div>
              <div className='input-box'>
               <input className='input' type="text" placeholder='Nombre'required  name="Nombre" id="nom"  /> 
              
              </div>
              <div className='input-box'>
              <textarea className='textarea' name="Motivo" id="motiv" cols="49" rows="3" placeholder='Motivo de la Consulta'></textarea>
              </div>
              <div className='input-box'>
              <input className='input' type="text" placeholder='Telefono'required name="Telefono" id="telf" />
              </div>
              <div className='input-box'>
              <input className='input' type="text" placeholder='Email'required name="Email" id="email" />
              </div>
             
              <input className='boton' type="submit" value="crear" />
          </form>
      </div>
      </>
    )
}
//exporto la funcion

export default NuevaConsulta