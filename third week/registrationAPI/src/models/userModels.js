class UsersModel {
  constructor(connection) {
    this.connection = connection;
  }

  async userNameExists(userName) {
    try {
      return await this.connection("users")
        .select("userName")
        .where("userName", userName)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async emailExists(email) {
    try {
      return await this.connection("users")
        .select("email")
        .where("email", email)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async register(user) {
    try {
      const { userName, firstName, lastName, email, password } = user;

      return await this.connection("users")
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
  }

  async login(userName, password) {
    try {
      return await this.connection("users")
        .select("*")
        .where("userName", userName)
        .orWhere("email", userName)
        .andWhere("password", password)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      return await this.connection("users").select("*");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      return await this.connection("users").select("*").where("id", id).first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.connection("users").where("id", id).delete();
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, userName) {
    try {
      return await this.connection("users").where("id", id).update(
        {
          userName,
        },
        ["id", "userName"]
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UsersModel;
