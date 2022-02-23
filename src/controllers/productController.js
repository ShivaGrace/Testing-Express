const path = require("path")

const productController = {
  list: (req, res) => {
    res.render('productDetail', {title: 'Detalle de producto'});
  },
  add: (req, res) => {
    res.render('productCreate', {title: 'Crear Producto Nuevo'});
  },
  edit: (req, res) => {
    res.send('product TBD')},
  delete: (req, res) => {
    res.send('product delete TBD')},
}

module.exports = productController;
