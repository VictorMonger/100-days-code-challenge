  class BankClientsModel {
  constructor(connection) {
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

  async createClient(client) {
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

  async login(cpf, password) {
    try {
      return await this.connection("clients")
        .select("*")
        .where("cpf", cpf)
        .andWhere("password", password)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getClientByCpf(cpf) {
    try {
      return await this.connection("clients")
        .select("*")
        .where("cpf", cpf)
        .first();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllClients() {
    try {
      return await this.connection("clients").select("*");
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteClient(cpf) {
    try {
      return await this.connection("clients").where("cpf", cpf).delete();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BankClientsModel;
