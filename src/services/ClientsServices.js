const clientsModel = require('../model/ClientsModel');

const getAllClients = async () => clientsModel.getAllTheClients();

const getSpecificClient = async (clientName) => clientsModel.getSpecificClient(clientName);

const insertNewClient = async (clientObj) => clientsModel.insertTheNewClient(clientObj);

module.exports = { getAllClients, getSpecificClient, insertNewClient };