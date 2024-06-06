const express = require('express');
const router = express.Router();
const { createClientController } = require('../useCases/CreateClient');
const { getAllClientsController } = require('../useCases/GetAllClients');
const { getClientByCpfController } = require('../useCases/GetClientByCpf');
const { updateClientController } = require('../useCases/UpdateClient');
const { deleteClientController } = require('../useCases/DeleteClient');

/**
 * @swagger
 * /clients/create:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *                 example: '12345678900'
 *               name:
 *                 type: string
 *                 example: 'John Doe'
 *               email:
 *                 type: string
 *                 example: 'john@example.com'
 *               maritalStatus:
 *                 type: string
 *                 example: 'Single'
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                     example: '123 Main St'
 *                   city:
 *                     type: string
 *                     example: 'Anytown'
 *                   state:
 *                     type: string
 *                     example: 'Anystate'
 *                   zip:
 *                     type: string
 *                     example: '12345'
 *               phoneNumbers:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ['1234567890']
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Erro na criação do cliente
 */
router.post('/create', (req, res) => {
  return createClientController.handle(req, res);
});

/**
 * @swagger
 * /clients/{cpf}:
 *   get:
 *     summary: Busca um cliente pelo CPF
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: O CPF do cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado com sucesso
 *       400:
 *         description: Erro na busca do cliente
 *       404:
 *         description: Cliente não encontrado
 */
router.get('/:cpf', (req, res) => {
  return getClientByCpfController.handle(req, res);
});

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Busca todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de todos os clientes
 *       500:
 *         description: Erro no servidor
 */
router.get('/', (req, res) => {
  return getAllClientsController.handle(req, res);
});

/**
 * @swagger
 * /clients/update/{cpf}:
 *   put:
 *     summary: Atualiza um cliente pelo CPF
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: O CPF do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'John Doe Updated'
 *               email:
 *                 type: string
 *                 example: 'johnupdated@example.com'
 *               maritalStatus:
 *                 type: string
 *                 example: 'Married'
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                     example: 'Updated Street'
 *                   city:
 *                     type: string
 *                     example: 'Updated City'
 *                   state:
 *                     type: string
 *                     example: 'Updated State'
 *                   zip:
 *                     type: string
 *                     example: '12345'
 *               phoneNumbers:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ['1234567890', '0987654321']
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       400:
 *         description: Erro na atualização do cliente
 *       404:
 *         description: Cliente não encontrado
 */
router.put('/update/:cpf', (req, res) => {
  return updateClientController.handle(req, res);
});

/**
 * @swagger
 * /clients/delete/{cpf}:
 *   delete:
 *     summary: Deleta um cliente pelo CPF
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: O CPF do cliente
 *     responses:
 *       200:
 *         description: Cliente deletado com sucesso
 *       400:
 *         description: Erro na deleção do cliente
 *       404:
 *         description: Cliente não encontrado
 */
router.delete('/delete/:cpf', (req, res) => {
  return deleteClientController.handle(req, res);
});

module.exports = router;