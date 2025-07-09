// productService.js

// In-memory product data for demonstration
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(product => product.id === id);
}

function addProduct(product) {
  const newId = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = { id: newId, ...product };
  products.push(newProduct);
  return newProduct;
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};