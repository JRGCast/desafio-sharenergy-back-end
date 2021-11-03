const clientsServices = require('../services/ClientsServices');

const getAllC = async (_req, res) => {
  const clientsList = await clientsServices.getAllClients();
  return res.status(200).json({ dados_clientes: clientsList });
};

const getClientByNameOrNumber = async (req, res) => {
  const { name, number } = req.body;
  const foundByName = await clientsServices.getSpecificClient(name, number);
  return res.status(200).json({ client: foundByName });
};

const addNewClient = async (req, res) => {
  const { clientData } = req.body;
  const clientInsertion = await clientsServices.insertNewClient(clientData);
  console.log(clientInsertion);
  return res.status(200).json({ message: 'cliente inserido', client: clientInsertion });
};

module.exports = { getAllC, getClientByNameOrNumber, addNewClient };