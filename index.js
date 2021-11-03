const cors = require('cors');
const express = require('express');

// const clientController = require('./src/controllers/ClientsController');

const companyRouter = require('./routers/CompanyRouter');
const clientsRouter = require('./routers/ClientsRouter');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.send(`Porta ${PORT} Ok!`);
});

app.use('/company', companyRouter);
app.use('/clients', clientsRouter);

// app.get('/clients', clientController.getAllC);


app.listen(PORT, () => console.log(`Escutando porta ${PORT}`));
