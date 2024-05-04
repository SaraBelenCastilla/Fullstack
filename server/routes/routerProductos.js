const express = require('express');

//importamos express

const router = express.Router()
//importamos router
const ProductosController =require('../controllers/ProductosController')
//importamos los controller

router.get('/',ProductosController.getAllProductos)
// declaramos la ruta get utilizando el controller getAllproductos

//exportamos la ruta para ser utilizada en index.js

module.exports= router;