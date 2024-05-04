import React from 'react'

import{useState, useEffect} from 'react'
import { FaPen } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
// importo los archivos que voy a necesitar los hooks y los iconos
// defino la funcion consultas
 function Consultas() {

 

 
  //defino la variable de entorno para utilizar en el fetch
    const { VITE_LINK_API_CONSULTA } = import.meta.env;
  //defino el hook de estado como un array
    const [consultas, setConsultas] = useState([]);
  //utilizo un useEffect para hacer el fetch que se renderiza al cambiar un elemento array
    useEffect(() => {
  // defino el controller para utilizarlo en las opciones del fecth
        const controller = new AbortController();
        const options = {
          metod: "GET",
          headers: {
            "content-type": "application/json",
          },
          signal: controller.signal,
        };
  // hago el fetch con metodo GET      
        fetch(VITE_LINK_API_CONSULTA, options)
           .then((res) => res.json())
          .then((data) => {
             setConsultas(data.arrayConsultas);
             console.log(data.arrayConsultas);
           })
  //control de errores        
           .catch((err) => console.log(err))
    
           .finally(() => controller.abort());
      }, []);
      
  //elemetos de HTML
  return (
    <><div className='consultas'>
       <h2 className='consultas__h2'>Mis consultas</h2>
      <div className="consultas__div">
  {/* asigno un link al icono       */}
        <Link to={"/Consultas/nuevaConsulta"}>
              <MdAddCircleOutline className="plus" />
        </Link>
    
        <div  className='consultas__cuadro'>
    {/* hago un map al estado para recoger los datos que necesito  */}
          {consultas.map((consulta)=>{
          
      // coloco todos los elementos recogidos en el map con sus enlaces     
             return <div key={consulta._id}>
              {localStorage.getItem('Usuario') == consulta.Usuario? <div className='cuadro__div'>
                
                 <h2 className='contenedor__h2' >{localStorage.getItem('Usuario') == consulta.Usuario? consulta.Nombre:''}</h2>
                 
                 <div className="cuadros__botones">
               
                
                 <Link  to={"/Consultas/editar/" + consulta._id}>
                  <FaPen  className="consultas__icon"/>
                </Link>
               
                
                <Link to={"/consultas/borrar/" + consulta._id}>
                  <RiDeleteBin7Fill  className="consultas__icon" />
                </Link>
                
              </div>
               </div> :''}
               </div>
                
              
          })}
            
            </div> 
     </div>
    </div>
    </>
  )
}
//exporto la funcion
export default Consultas