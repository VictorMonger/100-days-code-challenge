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
  return await connection("users").select("*");
};

const modelGetUserById = async (userId) => {
  return await connection("users").select("*").where("userId", userId).first();
};

const modelDeleteUser = async (userId) => {
  return await connection("users").where("userId", userId).delete();
};

const modelUpdateUser = async (userId, userName) => {
  return await connection("users").where("userId", userId).update(
    {
      userName,
    },
    ["userId", "userName"]
  );
};

module.exports = {
  modelRegisterUser,
  modelGetAllUsers,
  modelGetUserById,
  modelUpdateUser,
  modelDeleteUser,
};
