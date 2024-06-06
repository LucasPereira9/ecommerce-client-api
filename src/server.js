const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rotas
app.use('/clients', clientRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Clientes está funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});