const express = require('express');
//importo express
const router = express.Router()
//importo el controller de consultas
const ConsultasController =require('../controllers/ConsultasController')
//establezco la ruta para cada controller

router.get('/',ConsultasController.getAllConsultas)
router.get('/:id',ConsultasController.getConsulta)
router.put('/',ConsultasController.getUpdateConsultas)
router.delete('/',ConsultasController.getDeleteConsultas)
router.post('/',ConsultasController.getCreateConsultas)

//exporto las rutas
  module.exports= router;