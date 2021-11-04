const clientsController = require('../src/controllers/ClientsController');
const { verifyRequest } = require('../src/middlewares/ClientsMiddlewares');
const clientsTestingRouter = require('express').Router();

// Testing/dev routes
clientsTestingRouter.post('/mid', verifyRequest);
clientsTestingRouter.delete('/deletemany', clientsController.deleteManyC);

module.exports = clientsTestingRouter;