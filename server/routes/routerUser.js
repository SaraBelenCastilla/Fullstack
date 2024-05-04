const express = require('express');
//importamos express
//importamos router
const router = express.Router()
//importamos los controller de usuarios
const UserController =require('../controllers/UserController')

//creamos las rutas del login y del formulario de nuevo usuario
router.post('/',UserController.getUser)
router.post('/login',UserController.getCreateUsuario)



// exportamos las rutas para utilizarlas en index.js
module.exports= router;