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
  const { nomeCliente, numeroCliente, usinas } = clientData;
  const clientInsertion = await clientsServices.insertNewClient(clientData);
  console.log(clientInsertion);
  return res.status(200).json({ message: 'novo cliente inserido', new_client: { nomeCliente, numeroCliente, usinas } });
};

const deleteClient = async (req, res) => {
  const { clientData } = req.body;
  const clientDeletion = await clientsServices.deleteOneClient(clientData);
  const response = clientDeletion === 'Não encontrado' ?
    res.status(200).json({ message: 'cliente não encontrado' }) :
    res.status(200).json({ message: 'cliente deletado', client: clientDeletion });
  return response;
};

module.exports = { getAllC, getClientByNameOrNumber, addNewClient, deleteClient };