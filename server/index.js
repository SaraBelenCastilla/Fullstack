const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rutasPerfiles = require('./routes/routerPerfiles')
const rutasConsultas = require('./routes/routerConsultas')
const rutasUsuarios =require('./routes/routerUser')
const rutasProductos = require('./routes/routerProductos')

//importo las rutas
//importo mongoose para utilizar la DB
//importo express para hacer la aplicacion
//importo body-parse para poder trabajar con los formularios
//importo cors 
//utilizo dot env durante el desarrollo , pero no en produccion
require('dotenv').config();
//declaro las variables de entorno para producción
const PORT = process.env.PORT || 3000
const DB_USER_CONNECTION =process.env.DB_USER_CONNECTION || 'mongodb+srv://Sara:$ara123@cluster0.syylwu5.mongodb.net/Wooh'
const LINK_CLIENTE = process.env.LINK_CLIENTE ||'http://localhost:5173/'
const app = express();
// utilizo los modules que he inportado
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//me conecto a la base de datos
mongoose.connect(DB_USER_CONNECTION);


//compruebo la conexion a la base de datos

  const connection = mongoose.connection;
  connection.once('open',()=>{
    console.log('conexion a la BD exitosa');
  })

  connection.on('error',(err)=>{
    console.log('ha habido un error',+err);
  })




//utilizo todas las rutas que he importado

app.use('/',rutasUsuarios)
app.use('/miPerfil',rutasPerfiles)
app.use('/consultas',rutasConsultas)
app.use('/productos',rutasProductos)

// creo un manejador de errores
const manejadorErrores =(err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Algo ha salido mal!')

}
//utilizo el manejador de errores
app.use(manejadorErrores);

 
//creo middlewares con status 500 y 400 para cada ruta
 rutasConsultas.use((req,res,next)=>{
   res.status(400).send('Ruta no encontrada para Consultas')
 })
 rutasConsultas.use((err,req,res,next)=>{
   console.error(err.stack)
   res.status(500).send('Error del servidor en Consultas')
 })


 rutasProductos.use((req,res,next)=>{
   res.status(400).send('Ruta no encontrada para Productos')
 })
 rutasProductos.use((err,req,res,next)=>{
   console.error(err.stack)
   res.status(500).send('Error del servidor en Productos')
 })

 rutasPerfiles.use((req,res,next)=>{
   res.status(400).send('Ruta no encontrada para Perfiles')
 })
 rutasPerfiles.use((err,req,res,next)=>{
   console.error(err.stack)
   res.status(500).send('Error del servidor en Perfiles')
 })






 // cargo la api de express
app.get('/',(req,res)=>{
 
 
    res.json('funcionando')

})


//arranco la api
app.listen(PORT,()=>{
    console.log('Servidor Encendido')
})