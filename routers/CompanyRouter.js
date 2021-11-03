const companyController = require('../src/controllers/CompaniesController');
const companyRouter = require('express').Router();

companyRouter.get('/', companyController.getAllUsinData);
companyRouter.get('/intervals', companyController.getAllUsinIntervals);
companyRouter.get('/test', companyController.testModifyData);

module.exports = companyRouter;