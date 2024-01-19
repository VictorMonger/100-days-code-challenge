const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(express.json());

const { users } = require("./routes");

app.use("/users", users);

app.listen(PORT);
