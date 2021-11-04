const clientsModel = require('../model/ClientsModel');

const getAllClients = async () => clientsModel.getAllTheClients();

const getSpecificClient = async (givenId, givenName = '', givenNumber = '') => {
  const findOrNot = await clientsModel.getSpecificClient(givenId, givenName, givenNumber);
  return findOrNot === null ? 'Não encontrado' : findOrNot;
};

const insertNewClient = async (clientData) => clientsModel.insertTheNewClient(clientData);

const deleteOneClient = async ({ id, nomeCliente = '', numeroCliente = '' }) => {
  const deletedOrNot = await clientsModel.deleteTheClient({ id, nomeCliente, numeroCliente });
  return deletedOrNot === null ? 'Não encontrado' : deletedOrNot;
};

module.exports = { getAllClients, getSpecificClient, insertNewClient, deleteOneClient };

// {
//   "_id": "6182b733b0051f8619bd9d83",
//   "clientName": "Jeeeeeeeeeeeeeeoe",
//   "age": 36
// },
// {
//   "_id": "6182f873bda33439491346c9",
//   "nomeCliente": "Maria Coelho",
//   "numeroCliente": 3
// },
// {
//   "_id": "6182f8af0c88ccb0e8531e3e",
//   "nomeCliente": "Maria Coelho",
//   "numeroCliente": 3
// }