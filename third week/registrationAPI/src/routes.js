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

users.get("/:userId", (request, response) => {
  getUserById(request, response);
});

users.put("/:userId", (request, response) => {
  updateUser(request, response);
});

users.delete("/:userId", (request, response) => {
  deleteUser(request, response);
});

module.exports = {
  users,
};
