// productController.js

const productService = require("../services/productService");

const getAllProducts = (req, res, next) => {
  try {
    const products = productService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

const getProductById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = productService.getProductById(id);
    if (product) {
      res.json(product);
    } else {
      const error = new Error("Product not found");
      error.statusCode = 404;
      next(error);
    }
  } catch (err) {
    next(err);
  }
};

const addProduct = (req, res, next) => {
  try {
    const newProduct = productService.addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};