const express = require('express');
const { createClientController } = require('../useCases/CreateClient');
const { getClientByCpfController } = require('../useCases/GetClientByCpf');
const { getAllClientsController } = require('../useCases/getAllClients');
const { updateClientController } = require('../useCases/UpdateClient');
const { deleteClientController } = require('../useCases/DeleteClient');

const router = express.Router();


router.post('/create', (req, res) => {
  return createClientController.handle(req, res);
});

router.get('/', (req, res) => {
  return getAllClientsController.handle(req, res);
});

router.get('/:cpf', (req, res) => {
  return getClientByCpfController.handle(req, res);
});

router.put('/update/:cpf', (req, res) => {
  return updateClientController.handle(req, res);
});

router.delete('/delete/:cpf', (req, res) => {
  return deleteClientController.handle(req, res);
});

module.exports = router;