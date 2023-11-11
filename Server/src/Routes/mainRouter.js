const { Router } = require("express");
const routerProduct = require("./productsRouter");
const routerUser = require("./usersRouter");
const routerOffer = require("./offerRouter");

const routerMain = Router();

routerMain.use("/products", routerProduct);
routerMain.use("/user", routerUser);
routerMain.use("/offer", routerOffer);

module.exports = routerMain;
