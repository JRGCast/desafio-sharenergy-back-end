const companiesModel = require('../model/CompaniesModel');

const getAllCompanyData = async () => companiesModel.getAllTheCompanyData();

const getAllCIntervals = async () => {
  const intervalsList = await companiesModel.getAllTheCompanyIntervals();
  let intervalsDiff = [];
  for (let i = 1; i < intervalsList.length; i++) {
    let getIntervalsDiff = intervalsList[i].tempo_h - intervalsList[i - 1].tempo_h;
    intervalsDiff.push(getIntervalsDiff);
  }
  const averageWithReduceDirect = intervalsDiff.reduce((acc, currInterval, _index, array) => {
    return acc + currInterval / array.length;
  }, 0);
  return { intervals_diff: intervalsDiff, intervals_avg: averageWithReduceDirect };
};

const getCDataWithHTime = async () => {
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


module.exports = { getAllCompanyData, getAllCIntervals, getCDataWithHTime };