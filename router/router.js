
const express = require ("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.listCatalogo);
router.get("/cart_add", controller.cartAdd);
router.get("/carrito", controller.showCart);


router.get("/:nombre", controller.listProductos);


module.exports = router;