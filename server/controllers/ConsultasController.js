const mongoose = require('mongoose');
//importamos la conexion a la base de datos
const Consultas =mongoose.model('Consultas',{Nombre:String,Motivo:String,Telefono:Number,Email:String,Usuario:String})
//importamos el modelo de la coleccion Consultas


exports.getAllConsultas =(req,res,next)=>{
//exportamos el controlador del fetch de react GET de cconsultas
  
    try {
     Consultas.find().then(doc=>{
       res.json( {arrayConsultas:doc} );
     })
    } catch (err) {
        console.error('error en el find'+err.stack)
    }  
//hacemos un controlador de errores try catch 
//buscamos en la base de datos  y nos traemos todos los datos de la coleccion consultas en a respuesta en un array 
   
   }
exports.getCreateConsultas = (req,res,next)=>{
    let {Nombre,Motivo,Telefono,Email,Usuario} = req.body;
  //creamos el request con los datos recogidos en el formulario   
  try {
    const consultas = new Consultas({ Nombre:Nombre,Motivo:Motivo,Telefono:Telefono,Email:Email,Usuario:Usuario });
    consultas.save().then(doc=>{
      console.log('dato insertado correctamente:+doc');
      res.redirect('http://localhost:5173/Consultas')
    })
  } catch (err) {
    console.error('error en el find'+err.stack)
  }
  //realizamos un try catch para gestion de errores
  //creamos un nuevo modelo para recoger los datos y los guardamos en la BD
  
  }
exports.getConsulta = (req,res,next)=>{
    let id = req.params.id
//hacemos un get por id  recogiendo el id en el request     
      try {
        Consultas.find({_id:id}).then(doc =>{
          // console.log(doc[0]);
          if (doc.length !=1) {
            console.log('perfil no encontrado');
          } else {
            res.json(doc[0])
          }
        })
      } catch (err) {
        console.error('error en el find'+err.stack)
      }
    //hacemos try catch para gestion de errores, traemos los datos que corresponden al id, comprobamos que existen y creamos la respuesta
  }
exports.getUpdateConsultas = (req,res,next)=>{
    let{Nombre,Motivo,Telefono,Email,_id,Usuario}=req.body;
    console.log(req.body);
 //recogemos los datos del formulario en un request desestructurado 
    
  try {
    Consultas.updateOne({_id:_id},{$set:{Nombre:Nombre,Motivo:Motivo,Telefono:Telefono,Email:Email,Usuario:Usuario}}).then(result=>{
      res.json({status:'success'});
      console.log(result);
  })
  } catch (err) {
    console.error('error en el find'+err.stack)
  }
//hacemos try catch para gestion de errores lo editamos dentro de la coleccion consultas
  }
exports.getDeleteConsultas = (req,res,next)=>{
 
    let {_id} = req.body;
  
    console.log(req.body);
  
 //recogemos el elemento por el id en el request     
     
  try {
    Consultas.findByIdAndDelete({_id: _id}).then(doc=>{
      console.log('Borrado con éxito: '+doc);
      res.json({status:'success'});
  });
  } catch (err) {
    console.error('error en el find'+err.stack)
  }
  //hacemos try catch para gestionar los errores y lo eliminamos de la BD
  }