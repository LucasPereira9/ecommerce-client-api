const Client = require('../../entities/client');
const clientRepository = require('../../repositories/ClientRepository');
const validateCPF = require('../../utils/validateCpf');

class CreateClientUseCase {
  async execute(data) {
    const { cpf, name, email, maritalStatus, address, phoneNumbers } = data;

    if (!validateCPF(cpf)) {
      throw new Error('CPF inválido');
    }

    if (!name || !email || !maritalStatus || !address || !phoneNumbers.length) {
      throw new Error('Dados obrigatórios faltando');
    }

    const client = new Client(cpf, name, email, maritalStatus, address, phoneNumbers);
    return clientRepository.create(client);
  }
}

module.exports = CreateClientUseCase;