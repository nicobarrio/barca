const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get("/products", productsController.list);

module.exports = router;