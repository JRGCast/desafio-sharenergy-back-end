const clientsModel = require('../model/ClientsModel');

const getAllClients = async () => clientsModel.getAllTheClients();

const getSpecificClient = async (givenId, givenName = '', givenNumber = '') => {
  const findOrNot = await clientsModel.getSpecificClient(givenId, givenName, givenNumber);
  return findOrNot === null ? 'Não encontrado' : findOrNot;
};

const insertNewClient = async (clientData) => clientsModel.insertTheNewClient(clientData);

const updateOneClient = async (clientData, updateData) => {
  const updateOrNot = await clientsModel.updateTheClient(clientData, updateData);
  console.log('services', updateData)
  return updateOrNot === null ? 'Não encontrado' : updateOrNot;
};

const deleteOneClient = async ({ id, nomeCliente = '', numeroCliente = '' }) => {
  const deletedOrNot = await clientsModel.deleteTheClient({ id, nomeCliente, numeroCliente });
  return deletedOrNot === null ? 'Não encontrado' : deletedOrNot;
};

module.exports = {
  getAllClients,
  getSpecificClient,
  insertNewClient,
  updateOneClient,
  deleteOneClient
};