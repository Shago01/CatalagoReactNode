const express = require("express");
const routerOffer = express.Router();
const handlersProduct = require("../handlers/productHandler");

// // Get - All products offer
routerOffer.get("/", handlersProduct.getAllProductsOffer);

// // DELETE - Delete a product offer by ID
routerOffer.delete("/:id", handlersProduct.deleteProdutOffer);

// // Post - crate a offer
routerOffer.post("/:id", handlersProduct.postAddNewProductOffer);

module.exports = routerOffer;
