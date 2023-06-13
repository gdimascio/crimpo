
const express = require ("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.listCatalogo);

router.get("/:nombre", controller.listProductos);

module.exports = router;