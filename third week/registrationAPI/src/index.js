const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());

const connection = require("./database/connection");

const UsersModel = require("./models/userModels");
const UsersController = require("./controllers/userController");
const { UsersRouter } = require("./routes/");

const usersModel = new UsersModel(connection);
const usersController = new UsersController(usersModel);
const usersRouter = new UsersRouter(usersController);

app.use("/users", usersRouter.getRoutes());

app.listen(PORT);
