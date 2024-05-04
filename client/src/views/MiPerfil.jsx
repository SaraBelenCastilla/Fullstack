import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
// importo los hooks y el icono
function MiPerfil() {
//defino la variable de entorno
  const { VITE_LINK_API_PERFIL } = import.meta.env;
//defino los estados,perfiles como array y foto como objeto
  const [perfiles, setPerfiles] = useState([]);
  const[foto, setFoto]= useState({})
//dentro del useEffect hago el fetch con metodo Get  para pedir los datos a la api de express 
  useEffect(() => {
    const controller = new AbortController();
    const options = {
      metod: "GET",
      headers: {
        "content-type": "application/json",
      },
      signal: controller.signal,
    };
    fetch(VITE_LINK_API_PERFIL, options)
      .then((res) => res.json())
      .then((data) => {
        setPerfiles(data.arrayPerfiles);
      })
  //control de errores
      .catch((err) => console.log(err))

      .finally(() => controller.abort());
  }, []);
  //recibo los datos del localStore y los transformo en objetos que pueda usar
  localStorage.setItem('perfiles', JSON.stringify(foto))
 
  return (
    <><div className="perfiles">
        {/* <Link to={"/miPerfil/nuevoPerfil"}>
                  <MdAddCircleOutline className="plus" />
                </Link>
       */}
       <h2 className="perfiles__h2">Escoge tu Avatar</h2>
       <div className="perfiles__div">
  {/* realizo un map para recoger los datos que necesito */}
      {perfiles.map((perfil) => {
        return (
         
           
            <div key={perfil._id} className="plantilla">
              <h2 className="plantilla__h2">{perfil.Nombre}</h2>
             <div className="perfil__foto">
              <img className="perfil__img" src={perfil.Foto}alt="" />
             </div>
              <div className="plantilla__div">
               
                <Link to={"/miPerfil/editar/" + perfil._id}>
                  <FaPen className="perfil__icon"/>
                </Link>
                {/* <Link to={"/miPerfil/borrar/" + perfil._id}>
                  <RiDeleteBin7Fill className="perfil__icon" />
                </Link> */}
              </div>
              {/* boton con funcion flecha que recoge los datos del localStore y redirige a inicio */}
              <button className="perfil__boton" onClick={()=>{
                setFoto({_id:perfil._id,Nombre:perfil.Nombre,Foto:perfil.Foto})
                window.location.replace('/')
                }}>ok</button>
            </div>
       
        );
      })}
     </div>
      </div>
    </>
  );
}
//exporto la funcion

export default MiPerfil;
