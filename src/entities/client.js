class Client {
    constructor(cpf, name, email, maritalStatus, address, phoneNumbers) {
      this.cpf = cpf;
      this.name = name;
      this.email = email;
      this.maritalStatus = maritalStatus;
      this.address = address;
      this.phoneNumbers = phoneNumbers;
    }
  }
  
  module.exports = Client;