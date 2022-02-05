const express = require("express");
const router  = express.Router();
const path = require("path");

//definiento rutas
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
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
  router.get("/login2", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/loginNEW.html"));
  });


module.exports = router;
