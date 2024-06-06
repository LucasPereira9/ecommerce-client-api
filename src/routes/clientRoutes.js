const express = require('express');
const { createClientController } = require('../useCases/CreateClient');

const router = express.Router();

router.post('/', (req, res) => {
  return createClientController.handle(req, res);
});

module.exports = router;