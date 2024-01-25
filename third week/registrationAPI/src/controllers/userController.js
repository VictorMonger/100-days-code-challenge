class UsersController {
  constructor(usersModel) {
    this.usersModel = usersModel;
  }
  
  async register(request, response) {
    try {
      const { userName, firstName, lastName, email, password } = request.body;
      const failsInsert =
        !userName || !firstName || !lastName || !email || !password;

      if (failsInsert) {
        return response
          .status(400)
          .json({ error: "Insert all required fields" });
      }

      const userNameExist = await this.usersModel.userNameExists(userName);

      if (userNameExist) {
        return response.status(400).json({ error: "Username already in use" });
      }

      const userEmailExist = await this.usersModel.emailExists(email);

      if (userEmailExist) {
        return response
          .status(400)
          .json({ error: "E-mail already registered" });
      }

      const user = {
        userName,
        firstName,
        lastName,
        email,
        password,
      };

      const userRegistration = await this.usersModel.register(user);

      return response.status(201).json(userRegistration);
    } catch (error) {
      console.log(error)
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async login(request, response) {
    try {
      const { userName, password } = request.body;
      const failsInsert = !userName || !password;

      if (failsInsert) {
        return response
          .status(400)
          .json({ error: "Insert all required fields" });
      }

      const userLogin = await this.usersModel.login(userName, password);

      if (!userLogin) {
        return response
          .status(401)
          .json({ message: "user login or password not valid" });
      }

      return response.status(200).json({ message: "logged" });
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAll(request, response) {
    try {
      const users = await this.usersModel.getAll();

      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async index(request, response) {
    try {
      const { id } = request.params;

      const user = await this.usersModel.getById(id);

      return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { userName } = request.body;

      const updatedUser = await this.usersModel.update(id, userName);

      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      const deletedUser = await this.usersModel.delete(id);

      return response.status(200).json(deletedUser);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UsersController;
