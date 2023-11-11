const express = require("express");
const handlersProduct = require("../handlers/productHandler");

const routerProduct = express.Router();

// Get- All products
routerProduct.get("/", handlersProduct.getAllProduct);

// Get - product by id
routerProduct.get("/:id", handlersProduct.getOneProduct);

// // Post - create a products
routerProduct.post("/", handlersProduct.postNewProduct);

// // Put - Full update of producto data.
routerProduct.put("/:id", handlersProduct.putUpdateProduct);

// // DELETE - Delete a product by ID
routerProduct.delete("/:id", handlersProduct.deleteProduct);

module.exports = routerProduct;
