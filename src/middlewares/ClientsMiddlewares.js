const clientsModel = require('../model/ClientsModel');
const errors = require('../error/errorObj');
const { BAD_REQUEST } = errors;
const { User } = BAD_REQUEST;

const verifyIfClientData = async (req, res, next) => {
  try {
    const { clientData } = req.body;
    if (!clientData) res.status(BAD_REQUEST.status).json(User.clientData.inexistsClientData);
    if (!Object.hasOwnProperty.call(clientData, 'nomeCliente') ||
      !Object.hasOwnProperty.call(clientData, 'numeroCliente')) res.status(BAD_REQUEST.status).json(User.clientData.nameAndNumberRequired);
    if (!clientData.nomeCliente || clientData.numeroCliente) res.status(BAD_REQUEST.status).json(User.clientData.clientDataInvalidFields);
    return next(req, res);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const verifyClientRegistered = async (req, res, next) => {
  try {
    const { clientData } = req.body;
    const clientDeletion = await clientsModel.deleteTheClient(clientData);
    return next(clientDeletion);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const verifyRequest = async (req, res, next) => {
  // const checkUserExists = () => verifyIfUserExists(req, res, next);
  const checkValid = () => verifyClientRegistered(req, res, next);
  verifyIfClientData(req, res, checkValid);
};


module.exports = { verifyRequest };