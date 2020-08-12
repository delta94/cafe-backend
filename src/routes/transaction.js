const express = require("express");

const transactionController = require("../controller/transaction");

const transactionRouter = express.Router();

//add transaction
transactionRouter.post("/", transactionController.addTransaction);

module.exports = transactionRouter;