const connection = require('./connection');

const getAllTheClients = async () => {
  try {
    const db = await connection();
    const Clients = db.collection('Clients').find().toArray();
    return Clients;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

const getSpecificClient = async (name) => {
  try {
    const db = await connection();
    const findClient = db.collection('Clients').findOne({ nomeCliente: name });
    return findClient;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

const insertTheNewClient = async (clientData) => {
  try {
    const db = await connection();
    const newClient = db.collection('Clients').insertOne({ clientName: clientData.name, age: clientData.age });
    return newClient;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

module.exports = { getAllTheClients, getSpecificClient, insertTheNewClient };