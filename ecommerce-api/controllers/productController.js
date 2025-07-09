// productController.js

const productService = require("../services/productService");

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = productService.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

const addProduct = (req, res) => {
  const newProduct = productService.addProduct(req.body);
  res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};