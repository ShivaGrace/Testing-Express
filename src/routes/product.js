// Requires
const express = require("express");
const router = express.Router();
const multer = require ('multer');
const path = require ('path');
const productController = require("../controllers/productController");

// configuracion de multer
const storage = multer.diskStorage({
    destination : (res, req, cb) => {
        cb (null, path.join(__dirname, '../../public/images/products'))
    },
    filename : (req, file, cb) => {
        const newFilename = 'productos-'+ Date.now() + path.extname(file.originalfilename);
        cb(null, newFilename);
    }

});

const upload = multer ({storage: storage});



//Rutas de producto
router.get("/", productController.list);
router.get("/create", productController.add);
router.get("/detail/:id", productController.detail);
router.get("/detail/:id/edit", productController.edit);
//router.post('/', productController.???)
//router.put("/:id", productController.???);
//router.delete("/:id", productController.???);
router.get('/carrito', productController.carrito);

router.post("/create", upload.single ('productImage'), productController.store);



//definiendo la ruta generica de productos, mostrando  el ID pasado
//router.get("/comentarios/:id", productController.comments);
//mostrando comentarios del producto y destalle si aplica.
//router.get("/comentarios/:id/:idComentario?",productController.commentsDetails );
//mostrando la vista de creacion y edicion de productos

module.exports = router;
