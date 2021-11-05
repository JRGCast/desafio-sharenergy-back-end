const clientsController = require('../src/controllers/ClientsController');
const clientsTestingRouter = require('./clientsTestRoutes');
const clientsRouter = require('express').Router();

clientsRouter.get('/', clientsController.getAllC);
clientsRouter.get('/findclient', clientsController.getThisClient);
clientsRouter.post('/newclient', clientsController.addNewClient);
clientsRouter.put('/updateclient', clientsController.updateClient);
clientsRouter.delete('/deleteclient', clientsController.deleteClient);



// Testing/dev routes
clientsRouter.use('/test', clientsTestingRouter);

module.exports = clientsRouter;