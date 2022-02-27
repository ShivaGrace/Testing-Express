// Requires
const path = require("path");



// Controladores
let userController = {
  usuarios: (req, res) => {
    res.send('pagina de usuarios TBD');
  },
  perfil: (req, res) => {
    res.render('perfil', { title: 'Editar Perfil' })
  },
  login: (req, res) => {
    res.render('login', { title: 'Login' })
  },
  registro: (req, res) => {
    res.render('registro', { title: 'Registro' })
  },
  carrito: (req, res) => {
    res.render('carrito', { title: 'Carrito de compras' });
  }
}


// Exportar modulo
module.exports = userController;
