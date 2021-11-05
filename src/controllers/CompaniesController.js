const companiesServices = require('../services/CompaniesServices');
const testFunc = async (_req, res) => {
  const allCData = await companiesServices.getAllCompanyData();
  const modifiedData = Object.assign(allCData);
  for (let i = 0; i < modifiedData.length; i++) {
    const strangeTime = modifiedData[i].tempo_h;
    const intTime = Math.floor(strangeTime);
    const decimalTime = strangeTime - intTime;
    const convertedTime = Math.round(60 * decimalTime);
    const fullTimeString = `${intTime}h${convertedTime > 9 ? convertedTime : `0${convertedTime}`}min`;
    modifiedData[i].tempo_humano = fullTimeString;
  }
  return res.status(200).json({ modifiedData });
};

const getAllUsinData = async (_req, res) => {
  const companyData = await companiesServices.getAllCompanyData();
  return res.status(200).json({ companyData });
};

const getAllUsinIntervals = async (_req, res) => {
  const intervalsData = await companiesServices.getAllCIntervals();
  return res.status(200).json(intervalsData);
};

const getAllUDataNHTime = async (_req, res) => {
  const allCDataNHT = await companiesServices.getCDataWithHTime();
  return res.status(200).json(allCDataNHT);
};

module.exports = { getAllUsinData, getAllUsinIntervals, getAllUDataNHTime, testFunc };