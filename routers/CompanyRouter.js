const companyController = require('../src/controllers/CompaniesController');
const companyRouter = require('express').Router();

companyRouter.get('/', companyController.getAllUsinData);
companyRouter.get('/intervals', companyController.getAllUsinIntervals);
// companyRouter.get('/tintervals', companyController.testInterval);

module.exports = companyRouter;