const GetAllClientsUseCase = require('./GetAllClientsUseCase');

class GetAllClientsController {
  constructor() {
    this.getAllClientsUseCase = new GetAllClientsUseCase();
  }

  async handle(req, res) {
    try {
      const clients = await this.getAllClientsUseCase.execute();
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = GetAllClientsController;