const express = require("express");
const router  = express.Router();
const userController = require('../controllers/userController');

//definiento rutas

router.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/registro.html"));
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});
router.get("/perfil", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/perfil.html"));
});
router.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/carrito.html"));
});

module.exports = router;
