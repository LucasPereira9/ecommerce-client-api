const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce Client API',
      version: '1.0.0',
      description: 'API para gerenciar clientes em um sistema de ecommerce',
      contact: {
        name: 'Seu Nome',
        email: 'seuemail@example.com'
      }
    },
    servers: [{ url: 'http://localhost:3000', description: 'Servidor de Desenvolvimento' }],
  },
  apis: ['./src/routes/*.js', './src/useCases/**/*.js']
};

module.exports = { swaggerUi, swaggerDocs: swaggerJsDoc(swaggerOptions) };