const clientsController = require('../src/controllers/ClientsController');
const clientsRouter = require('express').Router();

clientsRouter.get('/', clientsController.getAllC);
clientsRouter.get('/byname', clientsController.getClientByName);
clientsRouter.post('/newclient', clientsController.addNewClient);
// clientsRouter.get('/datareadabletime', clientsController.getAllUDataNHTime);
// clientsRouter.get('/test', clientsController.testFunc);

module.exports = clientsRouter;