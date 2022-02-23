

module.exports = router;



//
// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

// ************ Controller Require ************
const productController = require('../controllers/productController');


//***  Multer configuration  ****/

const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});


const uploadFile = multer({ storage: configuracionImagen });


// ************* Rutas **************
// //detalle de producto
// router.get("/", productController.list);
// //definiendo la ruta generica de productos, mostrando  el ID pasado
// router.get("/:id", productController.comments);
// //mostrando comentarios del producto y destalle si aplica.
// router.get("/:id/comentarios/:idComentario?",productController.commentsDetails );
// //mostrando la vista de creacion y edicion de productos
// router.get("/:id/create/", productController.add);
// router.post("/:id/create/", productController.edit);


/*** GET ALL PRODUCTS ***/ 
router.get("/", productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get("/create", productsController.create); 
router.post("/create", uploadFile.single('imageProduct'), productsController.store); 

/*** GET ONE PRODUCT ***/ 
router.get("/detail/:id", productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete("/:id", productsController.destroy); 


module.exports = router;
