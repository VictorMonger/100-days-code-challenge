const express = require("express");

const { timeConverter } = require("./controllers/timeConverter");

const router = express.Router();

router.post("/time-converter", timeConverter);

module.exports = router;
