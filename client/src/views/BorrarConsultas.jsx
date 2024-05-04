import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//importo todos los archivos que voy a necesitar
function BorrarConsultas() {
  //tomo el id con useParams
  let{ id } = useParams()
  //defino la funcion regresar asignada al boton volver para que regrese a consultas una vez borrada la consulta
    let navigate =useNavigate()
   function regresar() {
    navigate('/Consultas')
   }

   //para definir la funcion eliminar asignada al boton, tengo que hacer un fetch con el metodo delete
   function eliminar() {
    const controller = new AbortController();
    //defino la variable de entorno para utilizarla 
    const {VITE_LINK_API_CONSULTA} = import.meta.env
    //defino las opciones para hacer el fetch
    const options = {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        signal:controller.signal,
        body: JSON.stringify( { _id: id } )
    }

    fetch(VITE_LINK_API_CONSULTA,options)
    .then(res=>res.json())
    .then(data=>{
      if (data.status == 'success') {
        window.location.href = '/Consultas';
      }
    })
    //gestiono los errores 
    .catch((err) => console.log(err))
    //finalizo la señal
    .finally(() => controller.abort());
   }
   //en el return van todos los elementos HTML 
   // los botones con evento onClick y sus respectivas funciones definidas fuera e invocadas en el evento
  return (
    <div className='borrar'>
    <div className='borrar__div'>
        <h2 className='borrar__h2'>¿Estas seguro de que quieres eliminar la Consulta?</h2>
        <div className='borrar__botones'>
        <button className='boton' type='button' onClick={eliminar}>Eliminar</button>
        <button className='boton' type='button' onClick={regresar}>volver</button>
        </div>
    </div>
    </div>
  )
}

//exporto la funcion 

export default BorrarConsultas