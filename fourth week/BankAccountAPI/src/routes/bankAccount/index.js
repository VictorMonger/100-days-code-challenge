const express = require("express");

class BankAccountRouter {
  constructor(bankAccountController) {
    this.bankAccount = express.Router();

    this.bankAccountController = bankAccountController;

    this.bankAccount.post("/", (request, response) => {
      this.bankAccountController.createAccount(request, response);
    });
  }
}

module.exports = BankAccountRouter;