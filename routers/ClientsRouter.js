const clientsController = require('../src/controllers/ClientsController');
const clientsTestingRouter = require('./clientsTestRoutes');
const clientsRouter = require('express').Router();

clientsRouter.get('/', clientsController.getAllC);
clientsRouter.get('/byname', clientsController.getClientByNameOrNumber);
clientsRouter.post('/newclient', clientsController.addNewClient);
clientsRouter.delete('/deleteclient', clientsController.deleteClient);


// Testing/dev routes
clientsRouter.use('/test', clientsTestingRouter);

module.exports = clientsRouter;