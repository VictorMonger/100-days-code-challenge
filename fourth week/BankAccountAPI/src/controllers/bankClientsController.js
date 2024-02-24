const jwt = require("jsonwebtoken");

const { JWT_PRIVATE_KEY } = process.env;

class BankClientsController {
  constructor(bankClientsModel, validator) {
    this.bankClientsModel = bankClientsModel;
    this.validator = validator;
  }

  async createClient(request, response) {
    try {
      const { cpf, firstName, lastName, email, password } = request.body;
      const failsInsert =
        !cpf || !firstName || !lastName || !email || !password;

      if (failsInsert) {
        return response
          .status(400)
          .json({ error: "Insert all required fields" });
      }

      const emailExist = await this.bankClientsModel.emailExists(email);

      if (emailExist) {
        return response
          .status(400)
          .json({ error: "E-mail already registered" });
      }

      const cpfIsValid = this.validator.cpfIsValid(cpf);

      if (!cpfIsValid) {
        return response.status(400).json({ error: "cpf invalid" });
      }

      const cpfExist = await this.bankClientsModel.cpfExists(cpf);

      if (cpfExist) {
        return response.status(400).json({ error: "cpf already registered" });
      }

      if (password.length < 8) {
        return response
          .status(400)
          .json({ error: "password must contain at least 8 characters" });
      }

      const client = {
        cpf,
        firstName,
        lastName,
        email,
        password,
      };

      const createClient = await this.bankClientsModel.createClient(client);

      /*const createAccount = await this.bankClientsModel.createAccount(
        cpf,
        balance || 0
      );*/

      return response.status(201).json(createClient);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async login(request, response) {
    try {
      const { cpf, password } = request.body;
      const failsInsert = !cpf || !password;

      if (failsInsert) {
        return response
          .status(400)
          .json({ error: "Insert all required fields" });
      }

      const client = await this.bankClientsModel.login(cpf, password);

      if (!client) {
        return response
          .status(401)
          .json({ message: "user login or password not valid" });
      }

      const token = jwt.sign(
        { client: JSON.stringify(client) },
        JWT_PRIVATE_KEY,
        { expiresIn: "24h" }
      );

      response.status(200).json({ data: { client, token } });
    } catch (error) {
      console.log(error)
      response.status(500).json({ error: "Login failed" });
    }
  }

  async getAllClients(request, response) {
    try {
      const clients = await this.bankClientsModel.getAllClients();

      return response.status(200).json(clients);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getClientByCpf(request, response) {
    try {
      const { cpf } = request.params;

      const getClientByCpf = await this.bankClientsModel.getClientByCpf(cpf);

      return response.status(200).json(getClientByCpf);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async delete(request, response) {
    try {
      const { cpf } = request.params;

      const deleteClient = await this.bankClientsModel.delete(cpf);

      return response.status(200).json(deleteClient);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = BankClientsController;
