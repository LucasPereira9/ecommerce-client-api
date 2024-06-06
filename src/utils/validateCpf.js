const { validate } = require('cpf-validator');

const validateCPF = (cpf) => {
  return validate(cpf);
};

module.exports = validateCPF;