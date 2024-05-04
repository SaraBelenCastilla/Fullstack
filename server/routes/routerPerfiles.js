const express = require('express');
//importo express
const router = express.Router()
//declaro el router que luego voy a exportar

const PerfilesController = require('../controllers/PerfilesController')
//importo los controllers de perfiles

router.get('/',PerfilesController.getAllPerfiles)
  


  router.get('/:id',PerfilesController.getPerfil)

  router.put('/',PerfilesController.getUpdatePerfiles)
  
  // establezco cada ruta para exportarla
 //exporto las rutas
  module.exports= router;
 