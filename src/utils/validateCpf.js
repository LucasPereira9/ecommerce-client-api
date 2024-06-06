const { cpf } = require('cpf-cnpj-validator');

const validateCPF = (cpfNumber) => {
  return cpf.isValid(cpfNumber);
};

module.exports = validateCPF;