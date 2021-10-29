const connection = require('./connection');

const getAllTheClients = async () => {
  const db = await connection();
  const Clients = db.collection('Clients').find().toArray();
  return Clients;
};

module.exports = { getAllTheClients };