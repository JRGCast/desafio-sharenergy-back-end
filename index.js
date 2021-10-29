import cors from 'cors';
const express = require('express');

const clientController = require('./src/controllers/ClientsController');
const companyController = require('./src/controllers/CompaniesController');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.send(`Porta ${PORT} Ok!`);
});

app.get('/clients', clientController.getAllC);
app.get('/company', companyController.getAllU);


app.listen(PORT, () => console.log(`Escutando porta ${PORT}`));
// fixed mongoatlas access network