'use strict';

const express = require('express');
// const { usersService } = require('./services/user.service');
const { usersRouter } = require('./routes/user.route');
const { expensesRouter } = require('./routes/expense.route');
// const { usersService } = require('./services/user.service');
// const { expensesService } = require('./services/expense.service');

const createServer = () => {
  const app = express();

  // expensesService.resetExpenses();
  // usersService.resetUsers();

  app.use(express.json());
  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  return app;
};

module.exports = {
  createServer,
};
