const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//detalle de producto
router.get("/", productController.list);
router.get("/create", productController.add);
//router.post("/:id/create/", productController.edit);

router.get('/carrito', productController.carrito);



//definiendo la ruta generica de productos, mostrando  el ID pasado
//router.get("/comentarios/:id", productController.comments);
//mostrando comentarios del producto y destalle si aplica.
//router.get("/comentarios/:id/:idComentario?",productController.commentsDetails );
//mostrando la vista de creacion y edicion de productos

module.exports = router;
