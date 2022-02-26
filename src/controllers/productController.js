const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




// Controllers
const productController = {
  list: (req, res) => {
    res.render('productList', {title: 'Todos los productos', products: products});
  },
  add: (req, res) => {
    res.render('productCreate', {title: 'Crear Producto Nuevo'});
  },
  detail: (req, res) => {
    let productoSeleccionado = null;
    for (i=0;i<products.length;i++) {
    if(req.params.id == products[i].id) {
      productoSeleccionado = products[i];
	 		}
	 	}
	 	res.render('productDetail', {title: 'Detalle de producto', productDetail: productoSeleccionado});
  },
  store: (req, res) =>{
    res.send('Llegue al controlador')
  },
  edit: (req, res) => {
    res.render('productEdit', {title: 'Editar Producto Nuevo'});
  },
  delete: (req, res) => {
    res.send('product delete TBD');
  },
  carrito: (req, res) => {
    res.render('carrito', { title: 'Carrito de compras' });
  }
}


// Module export
module.exports = productController;
