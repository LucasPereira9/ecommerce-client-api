const CreateClientUseCase = require('./createClientUseCase');

class CreateClientController {
  async handle(req, res) {
    const createClientUseCase = new CreateClientUseCase();

    try {
      const client = await createClientUseCase.execute(req.body);
      res.status(201).json(client);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = CreateClientController;