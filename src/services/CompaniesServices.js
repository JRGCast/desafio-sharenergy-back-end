const companiesModel = require('../model/CompaniesModel');

const getAllCompanyData = async () => companiesModel.getAllTheCompanyData();

const getAllCIntervals = async () => companiesModel.getAllTheCompanyIntervals();

module.exports = { getAllCompanyData, getAllCIntervals };