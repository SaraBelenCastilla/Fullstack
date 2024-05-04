import React from 'react'
import Productos from './Productos'

//importo el archivo productos para añadirlo a la pg de inicio

function Inicio() {
  //defino los elementos de HTML
  return (
    <>
    <main className='main'>
        <h2 className='h2__main'>Bienvenido a Wooh!</h2>
        <p className='main__parrafo'>Gestiona  todas tus consultas veterinarias de forma rapida y fácil</p>
    </main>
    <Productos/>
    </>
  )
}
//exporto la funcion
export default Inicio