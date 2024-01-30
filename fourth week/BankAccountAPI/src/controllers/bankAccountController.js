class BankAccountController {
  constructor(bankAccountModel){
    this.bankAccountModel = bankAccountModel;
  }

  async create(request, response) {
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
      
      const createAccount = await this.bankAccountModel.create(client);

      return response.status(201).json(createAccount);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = BankAccountController;