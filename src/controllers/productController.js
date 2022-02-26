// Requires
const path = require("path");




// Controllers
const productController = {
  list: (req, res) => {
    res.render('productList', {title: 'Listado de producto'});
  },
  detail: (req, res) => {
    res.render('productDetail', {title: 'Detalle de producto'});
  },
  add: (req, res) => {
    res.render('productCreate', {title: 'Crear Producto Nuevo'});
  },
  edit: (req, res) => {
    res.send('producto creado TBD')},
  delete: (req, res) => {
    res.send('product delete TBD')},
  carrito: (req, res) => {
    res.render('carrito', { title: 'Carrito de compras' })
  }
}


// Module export
module.exports = productController;
