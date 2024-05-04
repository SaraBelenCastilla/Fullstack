import React from 'react'
import{useState, useEffect} from 'react'

// importo react y los hooks que voy a utilizar



function Productos() {
 //declaro la variable de entorno 
  const { VITE_LINK_API_PRODUCTOS } = import.meta.env;
//declaro los estados como un array
  const [productos, setProductos] = useState([]);
// hacemos una petición a express con metodo Get , para recibir todos los datos 
  useEffect(() => {
    const controller = new AbortController();
    const options = {
      metod: "GET",
      headers: {
        "content-type": "application/json",
      },
      signal: controller.signal,
    };
    fetch(VITE_LINK_API_PRODUCTOS, options)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.arrayProductos);
      })
  //gestion de errores
      .catch((err) => console.log(err))

      .finally(() => controller.abort());
  }, []);
  //voy a recoger los datos del localStore y los convierto a Json para poder usarlos en otro archivo
    const [product , setProduct] = useState({})
    
     localStorage.setItem('producto', JSON.stringify(product))
  return (
    <>
    <div className='contenedor'>
        {/* hago un map que me devuelve los datos que necesito de cada producto */}
            {productos.map((producto)=>{
             return <div key={producto._id} className='contenedor__div'>
              <div className='contenedor__foto'>
                 <img className='foto__img' src={producto.Src} alt="ilustracion del servicio" />
                 
                 <div className='titulo__foto'>
                 <h2 className='contenedor__h2' >{producto.Nombre}</h2>
                 </div>
                 </div>
                 {/* <button type='boton' onClick={()=>{
                  setProduct({_id:producto._id,Nombre:producto.Nombre,Src:producto.Src,Precio:producto.Precio})
                  localStorage.removeItem('producto')

                 }}>Agregar al Carrito</button> */}
               </div>
               
            })}

      
    </div>
    </>
  )
}
// exportar la funcion
export default Productos