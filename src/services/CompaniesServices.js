const companiesModel = require('../model/CompaniesModel');

const getAllCompanyData = async () => companiesModel.getAllTheCompanyData();

const getAllCIntervals = async () => {
  const intervalsList = await companiesModel.getAllTheCompanyIntervals();
  let intervalsDiff = [];
  let allKw = [];
  for (let i = 1; i < intervalsList.length; i++) {
    let getIntervalsDiff = intervalsList[i].tempo_h - intervalsList[i - 1].tempo_h;
    intervalsDiff.push(getIntervalsDiff);
    allKw.push(intervalsList[i].potencia_kW);
  }
  const averageIntReduceDirect = intervalsDiff.reduce((acc, currInterval, _index, array) => {
    return acc + currInterval / array.length;
  }, 0);

  const averageKwReduceDirect = allKw.reduce((acc, currKW, _index, array) => {
    return acc + currKW / array.length;
  }, 0);
  return { intervals_diff: intervalsDiff, intervals_avg: averageIntReduceDirect, kw_avg: averageKwReduceDirect };
};

const getCDataWithHTime = async () => {
  const allCData = await getAllCompanyData();
  const modifiedData = Object.assign(allCData);
  for (let i = 0; i < modifiedData.length; i++) {
    const strangeTime = modifiedData[i].tempo_h;
    const intTime = Math.floor(strangeTime);
    const decimalTime = strangeTime - intTime;
    const convertedTime = Math.round(60 * decimalTime);
    const fullTimeString = `${intTime > 9 ? intTime : `0${intTime}`}h${convertedTime > 9 ? convertedTime : `0${convertedTime}`}min`;
    modifiedData[i].tempo_humano = fullTimeString;

  }
  return ({ modifiedData });
};


module.exports = { getAllCompanyData, getAllCIntervals, getCDataWithHTime };