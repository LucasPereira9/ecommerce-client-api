const express = require('express');
const { createClientController } = require('../useCases/CreateClient');
const { getClientByCpfController } = require('../useCases/GetClientByCpf');

const router = express.Router();

router.post('/create', (req, res) => {
  return createClientController.handle(req, res);
});
router.get('/:cpf', (req, res) => {
  return getClientByCpfController.handle(req, res);
});

module.exports = router;