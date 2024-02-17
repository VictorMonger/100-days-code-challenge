const express = require("express");

class BankClientRouter {
  constructor(bankClientsController){
    this.bankAccount = express.Router();

    this.bankClientsController = bankClientsController;

    this.bankAccount.post("/", (request, response) => {
      this.bankClientsController.createClient(request, response);
    });

    this.bankAccount.post("/", (request, response) => {
      this.bankClientsController.login(request, response);
    })

    this.bankAccount.get("/", (request, response) => {
      this.bankClientsController.getAllClients(request, response);
    });

    this.bankAccount.get("/:cpf", (request, response) => {
      this.bankClientsController.getClientByCpf(request, response);
    });

    this.bankAccount.delete("/:cpf", (request, response) => {
      this.bankClientsController.delete(request, response);
    });
  }

  getRoutes(){
    return this.bankAccount;
  }
}

module.exports = BankClientRouter;