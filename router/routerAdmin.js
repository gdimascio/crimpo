
const express = require ("express");
const router = express.Router();
const controller = require("../controllers/controllerAdmin");

router.get("/", controller.listAdmin);

router.post("/cargar", controller.cargar);
router.post("/cargarProducto", controller.cargarProducto);
router.post("/editar", controller.editar);

router.post("/delete", controller.borrar);
router.post("/edit", controller.editarProducto);


module.exports = router;