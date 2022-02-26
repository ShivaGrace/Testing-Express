// requires
var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
const multer = require ('multer');



/* GET users listing. */
router.get('/', userController.usuarios);
router.get('/login',userController.login);
router.get('/registro',userController.registro);



module.exports = router;
