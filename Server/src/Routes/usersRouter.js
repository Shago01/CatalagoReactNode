const express = require("express");
const UserHandler = require("../handlers/userHandler");

const routerUser = express.Router();

// Get- get all Users
routerUser.get("/", UserHandler.getAllUsers);

// Post - Comprueba Usuario - - - -
routerUser.post("/play", UserHandler.postUserExistsInDB);

// Post -  One User
routerUser.get("/:id", UserHandler.getOneUser);

// Post - create a user
routerUser.post("/", UserHandler.postNewUser);

// // Put -  update password User
routerUser.put("/:id", UserHandler.putUpdateUser);

// // DELETE - Delete a user by ID
routerUser.delete("/:id", UserHandler.deleteUser);

module.exports = routerUser;
