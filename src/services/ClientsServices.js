const clientsModel = require('../model/ClientsModel');

const getAllClients = async () => clientsModel.getAllTheClients();

const getSpecificClient = async (givenName, givenNumber = 0) => {
  const findOrNot = await clientsModel.getSpecificClient(givenName, givenNumber);
  return findOrNot === null ? 'Não encontrado' : findOrNot;
};

const insertNewClient = async (clientObj) => clientsModel.insertTheNewClient(clientObj);

module.exports = { getAllClients, getSpecificClient, insertNewClient };