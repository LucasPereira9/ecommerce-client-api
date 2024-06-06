const UpdateClientUseCase = require('./UpdateClientUseCase');

class UpdateClientController {
  constructor() {
    this.updateClientUseCase = new UpdateClientUseCase();
  }

  async handle(req, res) {
    const { cpf } = req.params;
    const clientData = req.body;

    try {
      const updatedClient = await this.updateClientUseCase.execute(cpf, clientData);
      res.status(200).json(updatedClient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = UpdateClientController;