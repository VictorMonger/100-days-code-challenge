class BankAccountModel {
  constructor(connection){
    this.connection = connection;
  }

  async createAccount(cpf, balance) {
    try {
      const { cpf, balance} = client;

      return await this.connection("accounts")
        .insert({
          cpf,
          balance,
        })
        .returning("*");
  } catch (error) {
    throw new Error(error);
  }
  }
}

module.exports = BankAccountModel;