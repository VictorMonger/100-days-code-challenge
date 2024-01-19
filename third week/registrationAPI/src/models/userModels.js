const connection = require("../database/connection");

const modelRegisterUser = async (user) => {
  const { userName, firstName, lastName, email, password } = user;

  return await connection("users")
    .insert({
      userName,
      firstName,
      lastName,
      email,
      password,
    })
    .returning("*");
};

const modelGetAllUsers = async () => {
  return await connection("users").select("*")
}

module.exports = {
  modelRegisterUser,
  modelGetAllUsers,
};
