const { modelRegisterUser, modelGetAllUsers } = require("../models/userModels");

const registerUser = async (request, response) => {
  const { userName, firstName, lastName, email, password } = request.body;
  const failsInsertCheck =
    !userName || !firstName || !lastName || !email || !password;

  if (failsInsertCheck) {
    response.status(400).json({ error: "Insert all required fields" }).error()
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

module.exports = {
  registerUser,
  getAllUsers,
};
