import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa6";

//importo react y los iconos que voy a usar

function NuevoUsuario() {

//declaro la variable de entorno que voy a utilizar en el formulario para enviar los datos a express
    const {VITE_LINK_API_LOCALHOST}=import.meta.env
  return (<>
   <div className='login'>
   <form className='formulario__login' action={VITE_LINK_API_LOCALHOST+'/login'} method="post">
   <h2 className='login__h2'>Nuevo Usuario</h2>
            <div className='input-box'>
            <input className='formulario__input' type="text" placeholder='Usuario'required  name="Usuario" id="nom"/><IoMdPerson className='icono' />
            </div>
            <div className='input-box'>
            <input className='formulario__input' type="text" placeholder='Password'required name="Password" id="pass"/><FaLock  className='icono'/>
            </div>
           
            <input className='formulario__boton' type="submit" value="registrarse" />



   </form>



   </div>
  
  </>
    
  )
}
//exporto la funcion

export default NuevoUsuario