const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());

const connection = require("./database/connection");

const { verifyToken } = require("./authMiddleware");

const Validator = require("./validator");
const BankClientsModel = require("./models/bankClientsModel");
const BankClientsController = require("./controllers/bankClientsController");
const { BankClientsRouter } = require("./routes/");

const validator = new Validator();
const bankClientsModel = new BankClientsModel(connection);
const bankClientsController = new BankClientsController(
  bankClientsModel,
  validator
);
const bankClientsRouter = new BankClientsRouter(bankClientsController);

app.use("/bankClient/private", verifyToken);

app.use("/bankClient", bankClientsRouter.getRoutes());

app.listen(PORT);
