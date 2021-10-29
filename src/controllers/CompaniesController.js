const companiesServices = require('../services/CompaniesServices');
const jsonUsina = require('../database/dadosUsina.json');

const getAllU = async (_req, res) => {
  const companiesList = await companiesServices.getAllCompanies();
  return res.status(200).send({ OqVoltaDaConn: companiesList, OqDeveriaVoltar: jsonUsina });
};

module.exports = { getAllU };