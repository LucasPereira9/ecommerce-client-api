const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clientRoutes');
const { swaggerUi, swaggerDocs } = require('./swagger');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/clients', clientRoutes);

app.get('/', (req, res) => {
  res.send('API de Clientes está funcionando');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
