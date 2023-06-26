
const express = require ("express");
const router = express.Router();
const controller = require("../controllers/controllerMail");

router.get("/", controller.carritoEnviar);
router.post("/send", controller.carritoSend);


module.exports = router;