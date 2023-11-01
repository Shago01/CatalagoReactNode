const express = require("express");
const handlersProduct = require("../handlers/productHandler");

const routerProduct = express.Router();

// Get- products
routerProduct.get("/", handlersProduct.getAllProduct);

// // Get - All products offer
routerProduct.get("/offer", handlersProduct.getAllProductsOffer);

// Get - products by id
routerProduct.get("/:id", handlersProduct.getOneProduct);

// // Post - create a products
routerProduct.post("/", handlersProduct.postNewProduct);

// // Post - crate a offer
routerProduct.post("/addOffer/:id", handlersProduct.postAddNewProductOffer);

// // Put - Full update of producto data.
routerProduct.put("/:id", handlersProduct.putUpdateProduct);

// // DELETE - Delete a product offer by ID
routerProduct.delete("/offer/:id", handlersProduct.deleteProdutOffer);

// // DELETE - Delete a product by ID
routerProduct.delete("/:id", handlersProduct.deleteProduct);

module.exports = routerProduct;
