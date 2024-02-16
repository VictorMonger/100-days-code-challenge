const express = require("express");

class BankAccountRouter {
  constructor(bankAccountController){
    this.bankAccount = express.Router();

    this.bankAccountController = bankAccountController;

    this.bankAccount.post("/", (request, response) => {
      this.bankAccountController.create(request, response);
    });

    this.bankAccount.get("/", (request, response) => {
      this.bankAccountController.getAllClients(request, response);
    });

    this.bankAccount.get("/:cpf", (request, response) => {
      this.bankAccountController.getClientByCpf(request, response);
    });

    this.bankAccount.delete("/:cpf", (request, response) => {
      this.bankAccountController.delete(request, response);
    });
  }

  getRoutes(){
    return this.bankAccount;
  }
}

module.exports = BankAccountRouter;