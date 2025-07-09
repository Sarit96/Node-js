// productRoutes.js

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// GET /products
router.get("/products", productController.getAllProducts);

// GET /products/:id
router.get("/products/:id", productController.getProductById);

// POST /products
router.post("/products", productController.addProduct);

module.exports = router;