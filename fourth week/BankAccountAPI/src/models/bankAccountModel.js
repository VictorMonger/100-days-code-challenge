class BankAccountModel {
  constructor(connection){
    this.connection = connection;
  }

  async cpfExists(cpf) {
    try {
      return await this.connection("clients")
        .select("cpf")
        .where("cpf", cpf)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(client) {
    try {
      const { cpf, firstName, lastName, password } = client;

      return await this.connection("clients")
        .insert({
          cpf,
          firstName,
          lastName,
          password,
        })
        .returning("*");
    } catch (error) {
      throw new Error(error);
    }
  }


}

module.exports = BankAccountModel
