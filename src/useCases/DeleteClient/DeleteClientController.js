const DeleteClientUseCase = require('./DeleteClientUseCase');

class DeleteClientController {
  constructor() {
    this.deleteClientUseCase = new DeleteClientUseCase();
  }

  async handle(req, res) {
    const { cpf } = req.params;

    try {
      await this.deleteClientUseCase.execute(cpf);
      res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = DeleteClientController;