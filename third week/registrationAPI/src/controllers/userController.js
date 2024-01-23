const {
  modelRegisterUser,
  modelGetAllUsers,
  modelGetUserById,
  modelUpdateUser,
  modelDeleteUser,
  emailExistCheck,
  userNameExistCheck,
  modelUserLogin,
} = require("../models/userModels");

const registerUser = async (request, response) => {
  try {
    const { userName, firstName, lastName, email, password } = request.body;
    const failsInsertCheck =
      !userName || !firstName || !lastName || !email || !password;

    if (failsInsertCheck) {
      return response.status(400).json({ error: "Insert all required fields" });
    }

    const userNameExist = await userNameExistCheck(userName);

    if (userNameExist) {
      return response.status(400).json({ error: "Username already in use" });
    }

    const userEmailExist = await emailExistCheck(email);

    if (userEmailExist) {
      return response.status(400).json({ error: "E-mail already registered" });
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
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const userLogin = async (request, response) => {
  try {
    const { userName, email, password } = request.body;
    const failsInsertCheck = (!userName && !email) || !password;

    if (failsInsertCheck) {
      return response.status(400).json({ error: "Insert all required fields" });
    }

    const userLogin = await modelUserLogin((userName || email), password);

    return response.status(200).json(userLogin);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllUsers = async (request, response) => {
  try {
    const users = await modelGetAllUsers();

    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserById = async (request, response) => {
  try {
    const { id } = request.params;

    const user = await modelGetUserById(id);

    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const { userName } = request.body;

    const updatedUser = await modelUpdateUser(id, userName);

    return response.status(200).json(updatedUser);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;

    const deletedUser = await modelDeleteUser(id);

    return response.status(200).json(deletedUser);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  userLogin,
};
