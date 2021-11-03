const companyController = require('../src/controllers/CompaniesController');
const companyRouter = require('express').Router();

companyRouter.get('/', companyController.getAllUsinData);
companyRouter.get('/intervals', companyController.getAllUsinIntervals);
companyRouter.get('/datareadabletime', companyController.getAllUDataNHTime);
companyRouter.get('/test', companyController.testFunc);

module.exports = companyRouter;