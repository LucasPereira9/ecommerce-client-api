const clientRepository = require('../../repositories/ClientRepository');
const validateCPF = require('../../utils/validateCpf');

class UpdateClientUseCase {
  async execute(cpf, data) {
    const { name, email, maritalStatus, address, phoneNumbers } = data;

    const emptyData = !name || !email || !maritalStatus || !address || !phoneNumbers.length;

    if (emptyData) {
      throw new Error('Dados obrigatórios faltando');
    }

    const existingClient = await clientRepository.findByCpf(cpf);
    if (!existingClient) {
      throw new Error('Cliente não encontrado');
    }

    const updatedClient = await clientRepository.update(cpf, data);
    return updatedClient;
  }
}

module.exports = UpdateClientUseCase;