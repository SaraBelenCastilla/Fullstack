import React from 'react'
import Galeria from '../components/Galeria'
// importo el archivo galeria de componentes para integrarlo como parte de esta pg
function Nosotros() {
//establezco los elemnetos del HTML y agrego el componente
  return (
    <div className='nosotros'>
        <h2 className='nosotros__h2'>Quienes somos</h2>
        <div className='nosotros__texto'>
        <p>Queríamos diseñar una clínica diferente, intentando evitar el ambiente frio, aséptico e impersonal que con frecuencia se respira en muchos centros. La estética está buscada para que os sintáis como si estuvierais en casa. Calidez, limpieza, profesionalidad y sobretodo una atención al cliente excepcional como carta de visita. Ofreciendo una imagen nítida de lo que somos: un equipo de profesionales en continua formación con unos servicios y un equipamiento de primer orden, para atender a tu mascota. Pero el punto fuerte que nos diferencia de otras clínicas veterinarias de la zona, es la forma en que tratamos a nuestros clientes y pacientes.

           Tú y tu mascota sois mucho más que otra cita en la agenda. Sois parte integral de lo que nosotros somos. Nuestra mejor activo…y podéis esperar ser tratados como tal.</p>
        </div>
        <Galeria/>
    </div>
  )
}
//exporto la funcion

export default Nosotros