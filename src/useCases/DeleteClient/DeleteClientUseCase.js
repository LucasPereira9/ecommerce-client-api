const clientRepository = require('../../repositories/ClientRepository');

class DeleteClientUseCase {
  async execute(cpf) {
    const existingClient = await clientRepository.findByCpf(cpf);
    if (!existingClient) {
      throw new Error('Cliente não encontrado');
    }

    await clientRepository.delete(cpf);
  }
}

module.exports = DeleteClientUseCase;