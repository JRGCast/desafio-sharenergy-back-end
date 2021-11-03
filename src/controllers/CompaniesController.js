const companiesServices = require('../services/CompaniesServices');
const jsonUsina = require('../database/dadosUsina.json');

const getAllUsinData = async (_req, res) => {
  const companyData = await companiesServices.getAllCompanyData();
  return res.status(200).json({ companyData });
};

const testInterval = async (_req, res) => {
  const intervalsData = await companiesServices.getAllCIntervals();
  return res.status(200).json({ intervalsData });
};

const getAllUsinIntervals = async (_req, res) => {
  const intervalsList = await companiesServices.getAllCIntervals();
  let intervalsDiff = [];
  for (let i = 1; i < intervalsList.length; i++) {
    let getIntervalsDiff = intervalsList[i].tempo_h - intervalsList[i - 1].tempo_h;
    intervalsDiff.push(getIntervalsDiff);
  }
  return res.status(200).json({ intervals_difference: intervalsDiff });
};

module.exports = { getAllUsinData, getAllUsinIntervals, testInterval };



// let intervals = [];

// for (let i = 1; i < usin.length; i++) {
//   let subtraction = usin[i].tempo_h - usin[i - 1].tempo_h;
//   intervals.push(subtraction);
// }

// console.log('length: ', intervals.length);

// const averageWithReduceDirect = intervals.reduce((item1, item2, _index, array) => {
//   return item1 + item2 / array.length;
// }, 0);

// console.log('media com reduce direto: ', averageWithReduceDirect);

// let totalIntervalsSum = 0;

// for (let i = 0; i < intervals.length; i++) {
//   totalIntervalsSum += intervals[i];
// }

// console.log('media com for loop para somar e divisão pelo length: ', totalIntervalsSum / intervals.length);

// const avgReduce = intervals.reduce((acc, item, _index, array) => {
//   return acc += item;
// }, 0);

// console.log('reduce para soma e divisão separado: ', avgReduce / intervals.length);

// let finalMedium = [0.08388888888888885, 0.08388888888888892, 0.08388888888888892];
// let finalSum = 0;

// for (let i = 0; i < finalMedium.length; i++) {
//   finalSum += finalMedium[i];
// }

// console.log(finalSum / 3);