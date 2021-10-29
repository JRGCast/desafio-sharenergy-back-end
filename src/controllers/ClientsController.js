const clientsServices = require('../services/ClientsServices');
const jsonClientes = require('../database/dadosClientes.json');

const getAllC = async (_req, res) => {
  const clientsList = await clientsServices.getAllClients();
  return res.status(200).json({ OqVoltaDaConn: clientsList, OqDeveriaVoltar: jsonClientes });
};

module.exports = { getAllC };