const clientsController = require('../src/controllers/ClientsController');
const { verifyRequest} = require('../src/middlewares/ClientsMiddlewares');
const clientsRouter = require('express').Router();

clientsRouter.get('/', clientsController.getAllC);
clientsRouter.get('/byname', clientsController.getClientByNameOrNumber);
clientsRouter.post('/newclient', clientsController.addNewClient);
clientsRouter.delete('/deleteclient', clientsController.deleteClient);
clientsRouter.post('/testmid', verifyRequest);
// clientsRouter.get('/datareadabletime', clientsController.getAllUDataNHTime);
// clientsRouter.get('/test', clientsController.testFunc);

module.exports = clientsRouter;