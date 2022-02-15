const express = require("express");
const router  = express.Router();
const userController = require('../controllers/userController');

//definiento rutas

router.get("/login", userController.login);

router.get("/perfil", userController.perfil);

router.get("/registro", userController.registro);

module.exports = router;
