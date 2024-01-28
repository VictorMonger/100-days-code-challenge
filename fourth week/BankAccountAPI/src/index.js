const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());

const connection = require("./database/connection");

const BankAccountModel = require("./models/bankAccountModel");
const BankAccountController = require("./controllers/bankAccountController");
const { BankAccountRouter } = require("./routes/");

const bankAccountModel = new BankAccountModel(connection);
const bankAccountController = new BankAccountController(bankAccountModel);
const bankAccountRouter = new BankAccountRouter(bankAccountController);

app.use("/bankAccount", BankAccountRouter.getRoutes());

app.listen(PORT);
