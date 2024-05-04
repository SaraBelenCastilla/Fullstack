import React from 'react'
import { useState,useEffect } from 'react'
import{useParams} from 'react-router-dom'
//importo todos los hook que necesito
function EditarConsultas() {
  //recibo el id con useParams
    let{id}= useParams()
  //defino el estado coo un objeto
    const [datosConsultas,setDatosConsultas] = useState({})
  //defino la variable de entorno 
    const {VITE_LINK_API_CONSULTA}=import.meta.env
  //utilizo el useEffect para renderizar cuando cambie un elemento
    useEffect(()=>{

        const controller = new AbortController()
        const options={
           metod:'GET',
           headers: {
               'content-type':'application/json'
     
           },
           signal:controller.signal
       }
  //realizo el fetch de cada consulta por su id con metodo Get ,realizando una petición a express     
       fetch(VITE_LINK_API_CONSULTA+'/'+id,options)
       .then(res=>res.json())
       .then(data=>{
        setDatosConsultas(data)
       })
   //gestion de errores    
       .catch((err) => console.log(err))

      .finally(() => controller.abort());
       
    },[])

  // defino la funcion asignada al evento onChange para que recoger el nombre y el valor del input y guardarlo en el estado  
    function cambiarValor(e) {
      let nombre= e.target.name;
      let valor = e.target.value;
      setDatosConsultas({...datosConsultas,[nombre]:valor});
    }
  //defino la funcion asignada al formulario, parando el formulario y haciendo un fetch con metodo PUT a express para editar los datos
    function enviarFormulario(e) {
      e.preventDefault()
      const controller = new AbortController();
  //defino la variable de entorno    
      const {VITE_LINK_API_CONSULTA} = import.meta.env
      const options = {
          method:'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          signal:controller.signal,
          body: JSON.stringify( datosConsultas )
      }
  //realizo el fetch
      fetch(VITE_LINK_API_CONSULTA,options)
      .then(res=>res.json()).then(data=>{
        if (data.status == 'success') {
            window.location.href = '/Consultas';
        }
    })
     //control de errores
     .catch((err) => console.log(err))

     .finally(() => controller.abort());
     
     
      
    }
  //defino el formulario con sus inputs
  return (
    <>
    <div className='editar__div'>
    <form className='formulario__editar' action='#' method="post" onSubmit={enviarFormulario} >
       <h2 className='editar__h2'>Editar</h2>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Nombre'required  name="Nombre" id="nom" value={datosConsultas.Nombre||''} onChange={cambiarValor}/>
       </div>
       <div className='input-box'>
       <textarea className='textarea' name="Motivo" id="motiv" cols="49" rows="3" placeholder='Motivo'value={datosConsultas.Motivo||''} onChange={cambiarValor}></textarea>
       </div>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Telefono'required name="Telefono" id="telf" value={datosConsultas.Telefono||''} onChange={cambiarValor}/>
       </div>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Email'required name="Email" id="email" value={datosConsultas.Email||''} onChange={cambiarValor}/>
       </div>
      
       <input className='boton' type="submit" value="ok" />
   </form>
</div>
</>
  )
}
//exporto la funcion
export default EditarConsultas
