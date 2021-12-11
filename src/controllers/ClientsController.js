const clientsServices = require('../services/ClientsServices');
const clientsModel = require('../model/ClientsModel');

const getAllC = async (_req, res) => {
  const clientsList = await clientsServices.getAllClients();
  return res.status(200).json({ todos_clientes: clientsList });
};

const getThisClient = async (req, res) => {
  const { clientData } = req.body;
  const { id, nomeCliente, numeroCliente } = clientData;
  const foundByName = await clientsServices.getSpecificClient(id, nomeCliente, numeroCliente);
  return res.status(200).json({ cliente: foundByName });
};

const addNewClient = async (req, res) => {
  const { clientData } = req.body;
  const { nomeCliente, numeroCliente, usinas } = clientData;
  const clientInsertion = await clientsServices.insertNewClient(clientData);
  console.log(clientInsertion);
  return res.status(201).json({ message: 'novo cliente inserido', new_client: { nomeCliente, numeroCliente, usinas } });
};

const updateClient = async (req, res) => {
  const { clientData, updateData } = req.body;
  const clientUpdate = await clientsServices.updateOneClient(clientData, updateData);
  console.log('controller', updateData)
  return res.status(200).json({ message: 'client updated', client: clientUpdate.value });
};

const deleteClient = async (req, res) => {
  const { clientData } = req.body;
  const clientDeletion = await clientsServices.deleteOneClient(clientData);
  return res.status(200).json({ message: 'client deleted', client: clientDeletion });
};


// Testing func
const deleteManyC = async (req, res) => {
  const { clientData } = req.body;
  const clientDeletion = await clientsModel.deleteMany(clientData);
  return res.status(200).json({ message: `${clientDeletion.deletedCount} cliente(s) deletado(s)` });
};

module.exports = { getAllC, getThisClient, addNewClient, updateClient, deleteClient, deleteManyC };