const express = require("express");

const { primeNumber } = require("./controllers/primeNumber");

const router = express.Router();

router.get("/prime-number", primeNumber);

module.exports = router;
