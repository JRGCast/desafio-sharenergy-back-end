const connection = require('./connection');

const getAllTheCompanies = async () => {
  const db = await connection();
  const Companies = db.collection('Companies').find().toArray();
  return Companies;
};

module.exports = { getAllTheCompanies };