const connection = require("../database/connection");

const userNameExists = async (userName) => {
  try {
    return await connection("users")
      .select("userName")
      .where("userName", userName)
      .first();
  } catch (error) {
    throw new Error(error);
  }
};

const emailExists = async (email) => {
  try {
    return await connection("users")
      .select("email")
      .where("email", email)
      .first();
  } catch (error) {
    throw new Error(error);
  }
};

const modelRegisterUser = async (user) => {
  try {
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
  } catch (error) {
    throw new Error(error);
  }
};

const modelUserLogin = async (userName, password) => {
  try {
    return await connection("users")
      .select("*")
      .where("userName", userName)
      .orWhere("email", userName)
      .andWhere("password", password)
      .first();
  } catch (error) {
    throw new Error(error);
  }
};

const modelGetAllUsers = async () => {
  try {
    return await connection("users").select("*");
  } catch (error) {
    throw new Error(error);
  }
};

const modelGetUserById = async (id) => {
  try {
    return await connection("users").select("*").where("id", id).first();
  } catch (error) {
    throw new Error(error);
  }
};

const modelDeleteUser = async (id) => {
  try {
    return await connection("users").where("id", id).delete();
  } catch (error) {
    throw new Error(error);
  }
};

const modelUpdateUser = async (id, userName) => {
  try {
    return await connection("users").where("id", id).update(
      {
        userName,
      },
      ["id", "userName"]
    );
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  modelRegisterUser,
  modelGetAllUsers,
  modelGetUserById,
  modelUpdateUser,
  modelDeleteUser,
  emailExists,
  userNameExists,
  modelUserLogin,
};
