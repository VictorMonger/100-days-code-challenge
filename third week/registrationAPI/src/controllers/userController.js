const { 
  modelRegisterUser, 
  modelGetAllUsers, 
  modelGetUserById, 
  modelUpdateUser, 
  modelDeleteUser, 
} = require("../models/userModels");

const registerUser = async (request, response) => {
  const { userName, firstName, lastName, email, password } = request.body;
  const failsInsertCheck =
    !userName || !firstName || !lastName || !email || !password;

  if (failsInsertCheck) {
    response.status(400).json({ error: "Insert all required fields" }).error();
  }

  const user = {
    userName,
    firstName,
    lastName,
    email,
    password,
  };

  const userRegistration = await modelRegisterUser(user);

  return response.status(201).json(userRegistration);
};

const getAllUsers = async (request, response) => {
  const users = await modelGetAllUsers();

  return response.status(200).json(users);
};

const getUserById = async (request, response) => {
  const { userId } = request.params;

  const user = await modelGetUserById(userId);

  return response.status(200).json(user);
};

const updateUser = async (request, response) => {
  const { userId } = request.params;
  const { userName } = request.body;

  const updatedUser = await modelUpdateUser(userId, userName);

  return response.status(200).json(updatedUser);
};

const deleteUser = async (request, response) => {
  const { userId } = request.params;

  const deletedUser = await modelDeleteUser(userId);

  return response.status(200).json(deletedUser);
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
