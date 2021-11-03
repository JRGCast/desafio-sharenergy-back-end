const connection = require('./connection');

const getAllTheCompanyData = async () => {
  const db = await connection();
  const Companies = db.collection('Companies').find().toArray();
  return Companies;
};

const getAllTheCompanyIntervals = async () => {
  const db = await connection();
  const Intervals = db.collection('Companies').find({}).project({ tempo_h: 1, _id: 0 }).toArray();
  return Intervals;
};

module.exports = { getAllTheCompanyData, getAllTheCompanyIntervals };