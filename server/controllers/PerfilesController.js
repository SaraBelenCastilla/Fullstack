
const mongoose = require('mongoose');


const Perfiles = mongoose.model('Perfiles',{ Nombre:String,Foto:String })

//importamos la conexion y el modelo de mongo

exports.getAllPerfiles =(req,res,next)=>{
 
    try {
      Perfiles.find().then(doc=>{
        res.json( {arrayPerfiles:doc} );
       
      })
    } catch (err) {
      console.error('error en el find:'+err.stack)
    }
  // pasamos los datos de la coleccion Perfiles en un array para utilizarlos y hacemos un try catch para la gestion de errores    
  }

exports.getPerfil = (req,res,next)=>{
    let id = req.params.id
  //creamos un request co el id   
      try {
        Perfiles.find({_id:id}).then(doc =>{
          // console.log(doc[0]);
          if (doc.length !=1) {
            console.log('perfil no encontrado');
          } else {
            res.json(doc[0])
          }
        })
      } catch (err) {
        console.error('error en el find:'+err.stack)
      }
    //hacemos la gestion de errores econ el try catch
  }
exports.getUpdatePerfiles =(req,res,next)=>{

 
    let {Nombre,Apellidos,Direccion,_id} = req.body;
     
    console.log(req.body)
 
  //hacemos el request de forma desestructurada 
    try {
      Perfiles.updateOne({_id: _id}, {$set: {Nombre:Nombre,Src:Src} }).then(result=>{
        res.json({status:'success'});
    })
    } catch (err) {
      console.error('error en el find:'+err.stack)
    }
    //editamos por el id y gestionamos los errores con el try catch
  }
