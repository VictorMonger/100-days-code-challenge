class BankAccountController {
  constructor(bankAccountModel) {
    this.bankAccountModel = bankAccountModel;
  }

  async createAccount(request, response) {
    try {
      const { cpf, balance } = request.body;
      const failsInsert = !cpf || !balance;

      if (failsInsert) {
        return response
          .status(400)
          .json({ error: "Insert all required fields" });
      }

      const createAccount = await this.bankAccountModel.createAccount(cpf, balance);

      return response.status(201).json(createAccount);
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deposit(request, response) {

  }

  async withdrawal(request, response) {
    
  }
}

module.exports = BankAccountController;
