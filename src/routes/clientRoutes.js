const express = require('express');
const { createClientController } = require('../useCases/CreateClient');
const { getClientByCpfController } = require('../useCases/GetClientByCpf');
const { getAllClientsController } = require('../useCases/getAllClients');

const router = express.Router();

router.get('/', (req, res) => {
  return getAllClientsController.handle(req, res);
});

router.post('/create', (req, res) => {
  return createClientController.handle(req, res);
});
router.get('/:cpf', (req, res) => {
  return getClientByCpfController.handle(req, res);
});

module.exports = router;