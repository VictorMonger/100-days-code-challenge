const express = require("express");
const app = express();

app.use(express.json());

const router = require('./routes');

app.use('/', router);

app.listen(3000);
