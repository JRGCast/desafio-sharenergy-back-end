const companyController = require('../src/controllers/CompaniesController');
const companyTestingRouter = require('express').Router();


// Testing/dev routes
companyTestingRouter.get('/func', companyController.testFunc);

module.exports = companyTestingRouter;