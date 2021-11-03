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


module.exports = { getAllCompanyData, getAllCIntervals };