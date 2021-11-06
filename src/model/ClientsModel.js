const { ObjectId } = require('mongodb');
const connection = require('./connection');

const rewriteCollection = async () => {
  /* WARNING: THIS IS TOTALLY AWFUL SOLUTION, TOTALLY NOT SCALABLE AND FLAWED, 
     but right now MongoAtlas autoincrement is getting too many strange errors,
     and for a small collection, I think it's... barely ok.
  */
  try {
    const db = await connection();
    const totalClients = await db.collection('Clients').find().toArray();
    for (let i = 0; i < totalClients.length; i++) {
      totalClients[i].numeroCliente = i + 1;
    }
    db.collection('Clients').deleteMany({});
    db.collection('Clients').insertMany(totalClients);
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

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
    const newClient = await db.collection('Clients').insertOne(clientData);
    rewriteCollection();
    return newClient;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

const updateTheClient = async (clientData, updateData) => {
  const { nomeCliente } = clientData;
  const { novoNome, novasUsinas } = updateData;
  const findQuery = {
    nomeCliente,
  };
  const updateQuery = !novasUsinas ? {
    "$set": {
      nomeCliente: novoNome,
    }
  } : {
    "$set": {
      nomeCliente: novoNome,
      usinas: novasUsinas
    }
  };

  const options = { returnDocument: 'after', omitUndefined: true };
  try {
    const db = await connection();
    const newClient = await db.collection('Clients').findOneAndUpdate(findQuery, updateQuery, options);
    rewriteCollection();
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
    rewriteCollection();
    return findClient.value;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

// Test Function
const deleteMany = async ({ id, nomeCliente, numeroCliente }) => {
  try {
    const db = await connection();
    const findClient = await db.collection('Clients').deleteMany({
      $or: [
        { nomeCliente },
        { numeroCliente },
        { _id: ObjectId(id) }
      ]
    }, { projection: { _id: 0, nomeCliente: 1, numeroCliente: 1 } });
    rewriteCollection();
    return findClient;
  } catch (error) {
    console.log(error);
    return `Erro: ${error}`;
  }
};

module.exports = {
  getAllTheClients,
  getSpecificClient,
  insertTheNewClient,
  updateTheClient,
  deleteTheClient,
  deleteMany
};