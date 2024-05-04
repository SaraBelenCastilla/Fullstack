import React from 'react'
import { useState,useEffect } from 'react'
import{useParams} from 'react-router-dom'
// importo los hooks que voy a necesitar
function EditarPerfiles() {
//recibo el id
    let{id}= useParams()
//defino los estados
    const [datosPerfil,setDatosPerfil] = useState({})
//defino la variable de entorno
    const {VITE_LINK_API_PERFIL}=import.meta.env
//realizo el fetch dentro del useEffect
    useEffect(()=>{

        const controller = new AbortController()
        const options={
           metod:'GET',
           headers: {
               'content-type':'application/json'
     
           },
           signal:controller.signal
       }
//realizo el fetch con el id de cada perfil con metodo GET
       fetch(VITE_LINK_API_PERFIL+'/'+id,options)
       .then(res=>res.json())
       .then(data=>{
        setDatosPerfil(data)
       })
       //gestiono los errores 
    .catch((err) => console.log(err))
    //finalizo la señal
    .finally(() => controller.abort());
       
    },[])

  //asigno la funcion al evento onChange para recoger los datos del input y guardarlos en un estado
    function cambiarValor(e) {
      let nombre= e.target.name;
      let valor = e.target.value;
      setDatosPerfil({...datosPerfil,[nombre]:valor});
    }
  //asigno la funcion al formulario , primero lo paro y despues le hago un fetch con metodo PUT
    function enviarFormulario(e) {
      e.preventDefault()
      const controller = new AbortController();
      const {VITE_LINK_API_PERFIL} = import.meta.env
      const options = {
          method:'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          signal:controller.signal,
          body: JSON.stringify( datosPerfil )
      }
  
      fetch(VITE_LINK_API_PERFIL,options)
      .then(res=>res.json()).then(data=>{
        if (data.status == 'success') {
            window.location.href = '/miPerfil';
        }
    })
  //control de errores
    .catch((err) => console.log(err))

    .finally(() => controller.abort());
     
     
      
    }
  //en el return pongo los elementos HTML del formulario con sus inputs y eventos
  return (
    <div className='perfil__div'>
    <form className='formulario__perfil' action='#' method="post" onSubmit={enviarFormulario} >
       <h2 className='formulario__h2'>Pon nombre a tu avatar</h2>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Nombre'required  name="Nombre" id="nom" value={datosPerfil.Nombre||''} onChange={cambiarValor}/>
       </div>
       {/* <div className='input-box'>
       <input className='input' type="text" placeholder='Apellidos'required name="Apellidos" id="ape" value={datosPerfil.Apellidos||''} onChange={cambiarValor}/>
       </div>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Direccion'required name="Direccion" id="direc" value={datosPerfil.Direccion||''} onChange={cambiarValor}/>
       </div>
       */}
       <input className='boton' type="submit" value="editar" />
   </form>
</div>
  )
}
//exporto la funcion
export default EditarPerfiles