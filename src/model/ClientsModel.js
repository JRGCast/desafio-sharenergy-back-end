const { ObjectId } = require('mongodb');
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

const getSpecificClient = async (id, name, number) => {
  try {
    const db = await connection();
    const findClient = await db.collection('Clients').findOne({
      $or: [
        { nomeCliente: name },
        { numeroCliente: number },
        { _id: ObjectId(id) }
      ]
    });
    return findClient;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

const insertTheNewClient = async (clientData) => {
  try {
    const db = await connection();
    const totalClients = await db.collection('Clients').find().toArray();
    const newClient = await db.collection('Clients').insertOne(clientData);
    for (let i = 1; i < totalClients.length; i++) {
      db.collection('Clients').updateMany({ numeroCliente: { $eq: i } }, { $set: { numeroCliente: i } });
    }
    return newClient;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

const deleteTheClient = async ({ id, nomeCliente, numeroCliente }) => {
  try {
    const db = await connection();
    const findClient = await db.collection('Clients').findOneAndDelete({
      $or: [
        { nomeCliente },
        { numeroCliente },
        { _id: ObjectId(id) }
      ]
    }, { projection: { _id: 0, nomeCliente: 1, numeroCliente: 1 } });
    return findClient.value;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

module.exports = { getAllTheClients, getSpecificClient, insertTheNewClient, deleteTheClient };