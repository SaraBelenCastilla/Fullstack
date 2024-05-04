import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";

import { IoMenu } from "react-icons/io5";


function Header() {
//funcion cerrar sesion asociada a un boton que elimina los datos del localStorage y te redirige al login 
  function cerrarSesion() {
    localStorage.removeItem('Usuario')
    localStorage.removeItem('Password')
    window.location.replace('/login')

   
  }

  //recogemos los datos del localStorage pertenecientes a perfiles y los convertimos en objeto para poder utilizarlos
    let perfiles = JSON.parse(localStorage.getItem('perfiles'))
    console.log(perfiles);
  

 
  
    
    // hacemos unos estados con un booleano para poder cambiar de clase y asi despegar el menu hamburguesa para pantallas pequeñas
    const [menu,setMenu]= useState(false)
    const toggleMenu = ()=>{
      setMenu(!menu)
    }
 
  return (
  <header className="header">
    <div className="header__container">
       <div className="header__menu">
          <h1 className="header__h1">WOOH!</h1>
          {/* aquí aplicamos el toddle al boton para despegar y recoger el menu */}
          <button  className='cabecera__boton' onClick={toggleMenu}>
        <IoMenu className='menu__icon' />
        </button>
        {/* aqui tengo la barra de navegacion donde todos los enlaces tienen rutas restringidas, es decir ha de cumplirse la condición de que estes logeado para poder acceder a los enlaces, para esto utilizo un condicional ternario */}
         <nav className="header__navegacion">
          {/* esta es la clase que se cambia con el toggle */}
           <ul className={`header__lista ${ menu? 'isActive':''} `}> 
             <li className="header__elementoLista"><Link className="header__linkLista" to={'/'}>Inicio</Link></li>
              {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/productos'}>Servicios</Link></li>)}
              {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/nosotros'}>Nosotros</Link></li>)}
              {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/Consultas'}>Consultas</Link></li>)}
            </ul>
         </nav>
       </div>
       {/* segundo panel con saludo, foto de perfil y boton de cerrar sesion */}
      <div className={`header__panel ${menu? 'activa':''}`}>
        {localStorage.getItem("Usuario") == null ? ( <li className="header__elementoLista"><Link className="header__linkLista" to={"/login"}>Login</Link></li>) :<h2 className="header__saludo">Hola {localStorage.getItem("Usuario")}!</h2>}
        {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/miPerfil'}>{perfiles  == null? <img className="header__img" width={10} src='/gato1.png' alt="imagen del perfil"/> :<img className="header__img" width={10} src={perfiles.Foto} alt="perfil"/>}</Link></li>)}
       
        {localStorage.getItem("Usuario") == null ? (<></>) :<button className="header__boton" type="button"onClick={cerrarSesion}><FaRegWindowClose /></button>}
       
      </div>
      
    </div>
  </header>
  );
}

export default Header;
