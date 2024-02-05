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

  async emailExists(email) {
    try {
      return await this.connection("clients")
        .select("email")
        .where("email", email)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(client) {
    try {
      const { cpf, firstName, lastName, email, password } = client;

      return await this.connection("clients")
        .insert({
          cpf,
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

  async getAll() {
    try {
      return await this.connection("clients").select("*");
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(cpf) {
    try {
      return await this.connection("clients").where("cpf", cpf).delete();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBankStatement(cpf, password) {
    try {
      return await this.connection("account").where("cpf", cpf).andWhere("password", password);
    } catch (error) {
      throw new Error(error);
    }
  }

  }

module.exports = BankAccountModel
