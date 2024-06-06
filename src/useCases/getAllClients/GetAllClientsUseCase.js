const clientRepository = require('../../repositories/ClientRepository');

class GetAllClientsUseCase {
  async execute() {
    return clientRepository.findAll();
  }
}

module.exports = GetAllClientsUseCase;