class BankAccountController {
  constructor(bankAccountModel) {
    this.bankAccountModel = bankAccountModel;
  }
  
  async createAccount(request,response) {
    try {
      const { balance, cpf } = request.body
      
    } catch (error) {
      
    }
  }

}

module.exports = BankAccountController;
