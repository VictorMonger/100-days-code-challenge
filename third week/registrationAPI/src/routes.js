const express = require("express");

const { registerUser, getAllUsers } = require("./controllers/userController.js");

const users = express.Router();

users.post("/", (request, response) => {
  registerUser(request, response);
});

users.get("/", (request, response) => {
  getAllUsers(request, response);
});

module.exports = { 
  users, 
};
