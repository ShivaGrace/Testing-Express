const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
  list: (req, res) => {
    res.render('productList', {title: 'Todos los productos', products: products});
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

module.exports = productController;
