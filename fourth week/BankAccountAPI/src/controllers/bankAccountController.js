class BankAccountController {
  constructor(bankAccountModel){
    this.bankAccountModel = bankAccountModel;
  }

  async create(request, response) {
    try {
      const { cpf, firstName, lastName, password } = request.body;
      const failsInsert = 
      !cpf || !firstName || !lastName || !password;

      if (failsInsert) {
        return response
          .status(400)
          .json({ error: "Insert all required fields" });
      }

      const cpfExist = await this.bankAccountModel.cpfExists(cpf);

      if (cpfExist) {
        return response
          .status(400)
          .json({ error: "cpf already registered" });
      }

      const client = {
        cpf,
        firstName,
        lastName,
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
