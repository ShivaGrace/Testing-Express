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
  store: (req, res) =>{
    idNuevo=0;

		for (let s of products){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		let nombreImagen = req.file.filename;

		let productoNuevo =  {
			id:   idNuevo,
			name: req.body.productName ,
			description: req.body.productDescription,
			//category: req.body.category,
			price: req.body.productPrice,
      color: req.body.color,
      talle: req.body.talle,
      stock: req.body.productStock,
			image: nombreImagen
		};

		products.push(productoNuevo);

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');

		
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
  edit: (req, res) => {
      let id = req.params.id;
      let productoEncontrado = null;
      for (let s of products){
        if (id==s.id){
          productoEncontrado=s;
        }
      };
      res.render('productEdit',{title: 'Editar Producto', ProductoaEditar: productoEncontrado});
    },

  update: (req, res) =>{
    res.send('Llegue al controlador de update via PUT')
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
