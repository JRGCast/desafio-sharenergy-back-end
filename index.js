const express = require('express');
const clientController = require('./src/controllers/ClientsController');
const companyController = require('./src/controllers/CompaniesController');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.send(`Porta ${PORT} Ok!`);
});

app.get('/clients', clientController.getAllC);
app.get('/company', companyController.getAllU);

app.listen(PORT, () => console.log(`Escutando porta ${PORT}`));