// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// ************ rutas ***************
router.get('/', mainController.index);
// router.get('/carrito', mainController.carrito);
// router.get('/perfil',mainController.perfil)
// router.get("/login", mainController.login);
// router.get("/registro", mainController.registro);
//router.???('/search', mainController.search); 

module.exports = router;
