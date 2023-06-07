
const express = require ("express");
const router = express.Router();
const controller = require("../controllers/controller");
// const adminController = require("../controllers/adminController");

router.get("/", controller.listAdmin);
// router.get("/", adminController.listAdmin);


module.exports = router;