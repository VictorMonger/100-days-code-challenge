const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const { PORT } = process.env;

const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(PORT);