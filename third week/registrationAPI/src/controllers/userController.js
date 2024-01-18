const { modelRegisterUser } = require("../models/userModels");

const registerUser = async (request, response) => {
  const { userName, firstName, lastName, email, password } = request.body;
  const failsInsertCheck =
    !userName || !firstName || !lastName || !email || !password;

  if (failsInsertCheck) {
    response.status(400).json({ error: "PLEASE ADD ALL FIELDS" });
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

module.exports = {
  registerUser,
};
