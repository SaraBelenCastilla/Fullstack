const mongoose = require('mongoose');
const Usuarios = mongoose.model('Usuarios',{ Usuario:String,Password:String })

//importamos la conexion a mongo y el modelo de usuarios

exports.getUser = (req,res)=>{
  
    let {Usuario,Password} = req.body
    console.log(req.body);
    let login = false
   
 //hacemos el request desestructurado    
  
   try {
     Usuarios.find({Usuario:Usuario,Password:Password}).then(results =>{
        console.log(results);
        
       
      if (results.length > 0) {
        login = true
        res.json({state:'success'});
      }else{
        login =false
        res.json({state:'failed'});
      }
    
     })
   } catch (err) {
    res.json('error en la ruta de usuarios')
   }
  //hacemos el try catch para gestion de errores y comprobamos que los datos existen en la base de datos para hacer el login    
  
  }


  exports.getCreateUsuario =(req,res,next)=>{
    let {Usuario,Password} = req.body;
    console.log(req.body);
  // establecemos el request con los datos recogidos en el formulario y hacemos el request 
  try {
   const usuario = new Usuarios ({ Usuario :Usuario ,Password :Password });
    usuario.save().then(doc=>{
     console.log('dato insertado correctamente:+doc');
     res.redirect('http://localhost:5173/login')
   })
  } catch (err) {
    console.error('error en el find:'+err.stack)
  }
  //utilizamos try catch para gestionar los errores
  //guardamos los datos recogidos en el cuestionario en la BD
 
  }


  

 