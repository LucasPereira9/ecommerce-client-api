const clientRepository = require('../../repositories/ClientRepository');

class GetClientByCpfUseCase {
  async execute(cpf) {
    const client = await clientRepository.findByCpf(cpf);
    if (!client) {
      throw new Error('Cliente não encontrado');
    }
    return client;
  }
}

module.exports = GetClientByCpfUseCase;