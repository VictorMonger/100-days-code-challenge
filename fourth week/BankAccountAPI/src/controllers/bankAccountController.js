class BankAccountController {
  constructor(bankAccountModel){
    this.bankAccountModel = bankAccountModel;
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

      const emailExist = await this.bankAccountModel.emailExists(email);

      if (emailExist) {
        return response
        .status(400).
        json({ error: "E-mail already registered" });
      }

      const cpfExist = await this.bankAccountModel.cpfExists(cpf);

      if (cpfExist) {
        return response
          .status(400)
          .json({ error: "cpf already registered" });
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
      
      const createClient = await this.bankAccountModel.create(client);

      return response.status(201).json(createClient);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createAccount() {
    try {
      
    } catch (error) {
      
    }
  }

  async getAllClient(request, response) {
    try {
      const clients = await this.bankAccountModel.getAllClient();

      return response.status(200).json(clients);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  async delete(request, response) {
    try {
      const { cpf } = request.params;

      const deleteClient = await this.bankAccountModel.delete(cpf);

      return response.status(200).json(deleteClient);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllAccount(request, response) {
    try {
      const account = await this.bankAccountModel.getAllAccount();

      return response.status(200).json(account);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getBankStatement(request, response) {
    try {
      const { cpf } = request.params;
      const { accountNumber } = request.body;

      const getBankStatement = await this.bankAccountModel.getBankStatement(cpf, accountNumber);

      return response.status(200).json(getBankStatement);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

}

module.exports = BankAccountController;
