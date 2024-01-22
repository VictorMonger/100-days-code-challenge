const connection = require("../database/connection");

const userExistCheck = async (email) => {
  return await connection("users").select("email").where("email", email).first();
};

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
  return await connection("users").select("*");
};

const modelGetUserById = async (id) => {
  return await connection("users").select("*").where("id", id).first();
};

const modelDeleteUser = async (id) => {
  return await connection("users").where("id", id).delete();
};

const modelUpdateUser = async (id, userName) => {
  return await connection("users").where("id", id).update(
    {
      userName,
    },
    ["id", "userName"]
  );
};

module.exports = {
  modelRegisterUser,
  modelGetAllUsers,
  modelGetUserById,
  modelUpdateUser,
  modelDeleteUser,
  userExistCheck,
};
