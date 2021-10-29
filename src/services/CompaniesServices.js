const companiesModel = require('../model/CompaniesModel');

const getAllCompanies = async () => companiesModel.getAllTheCompanies();

module.exports = { getAllCompanies };