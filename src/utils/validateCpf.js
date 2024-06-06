const { cpf } = require('cpf-cnpj-validator');

const validateCPF = (cpfNumber) => {
  if (/[^0-9]/.test(cpfNumber)) {
    return false;
  }

  return cpf.isValid(cpfNumber);
};

module.exports = validateCPF;