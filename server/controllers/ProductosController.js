const mongoose = require('mongoose');
//importamos la conexion a la Bd

const Productos =mongoose.model('Productos',{Nombre:String,Src:String})

//importamos el modelo

exports.getAllProductos = (req,res,next)=>{

 //hacemos el get con try catch para gestion de errores
 //buscamos los datos y hacemos la resouesta en un array 
 
    try {
      Productos.find().then(doc=>{
        res.json( {arrayProductos:doc} );
        
      }) 
    } catch (err) {
        console.error('error en el find'+err.stack)
    }
  
  }
