const express = require("express");

const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controllers/userController.js");

const users = express.Router();

users.post("/", (request, response) => {
  registerUser(request, response);
});

users.get("/", (request, response) => {
  getAllUsers(request, response);
});

users.get("/:id", (request, response) => {
  getUserById(request, response);
});

users.put("/:id", (request, response) => {
  updateUser(request, response);
});

users.delete("/:id", (request, response) => {
  deleteUser(request, response);
});

module.exports = {
  users,
};
