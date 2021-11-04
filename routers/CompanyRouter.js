const companyController = require('../src/controllers/CompaniesController');
const companyTestingRouter = require('./companyTestRoutes');
const companyRouter = require('express').Router();

companyRouter.get('/', companyController.getAllUsinData);
companyRouter.get('/intervals', companyController.getAllUsinIntervals);
companyRouter.get('/datareadabletime', companyController.getAllUDataNHTime);


// Testing/dev routes
companyRouter.use('/test', companyTestingRouter);

module.exports = companyRouter;