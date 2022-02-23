var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

/* Main routes */
router.get('/',mainController.index);
router.get('/login',mainController.login);
router.get('/registro',mainController.registro);
router.get('/carrito', mainController.carrito);


module.exports = router;
