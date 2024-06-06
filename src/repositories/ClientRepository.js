const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  cpf: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  phoneNumbers: [{ type: String, required: true }],
});

const ClientModel = mongoose.model('Client', clientSchema);

class ClientRepository {
  async create(client) {
    const newClient = new ClientModel(client);
    return newClient.save();
  }

  async update(cpf, clientData) {
    return ClientModel.findOneAndUpdate({ cpf }, clientData, { new: true });
  }

  async findByCpf(cpf) {
    return ClientModel.findOne({ cpf });
  }
}

module.exports = new ClientRepository();