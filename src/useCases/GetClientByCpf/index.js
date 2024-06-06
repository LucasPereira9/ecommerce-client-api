const GetClientByCpfController = require('./GetClientByCpfController');
const GetClientByCpfUseCase = require('./GetClientByCpfUseCase');

const getClientByCpfUseCase = new GetClientByCpfUseCase();

const getClientByCpfController = new GetClientByCpfController(getClientByCpfUseCase);

module.exports = { getClientByCpfController };