const express = require("express");

class BankAccountRouter {
  constructor(bankAccountController){
    this.bankAccount = express.Router();

    this.bankAccountController = bankAccountController;

    this.bankAccount.post("/", (request, response) => {
      this.bankAccountController.create(request, response);
    });
  }

  getRoutes(){
    return this.bankAccount;
  }
}

module.exports = BankAccountRouter;