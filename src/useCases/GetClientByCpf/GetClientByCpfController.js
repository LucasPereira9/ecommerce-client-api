class GetClientByCpfController {
    constructor(getClientByCpfUseCase) {
      this.getClientByCpfUseCase = getClientByCpfUseCase;
    }
  
    async handle(request, response) {
      const { cpf } = request.params;
  
      try {
        const client = await this.getClientByCpfUseCase.execute(cpf);
        return response.status(200).json(client);
      } catch (error) {
        return response.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = GetClientByCpfController;