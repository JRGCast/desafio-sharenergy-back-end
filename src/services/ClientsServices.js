const clientsModel = require('../model/ClientsModel');

const getAllClients = async () => clientsModel.getAllTheClients();

module.exports = { getAllClients };