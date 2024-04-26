const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Manager API',
            version: '1.0.0',
            description: 'NODE JS API for managing book entries',
        },
    },
    servers: [
        {
            api:
                `http://localhost:${PORT}/`
        }],

    apis: ['./Routes/routes.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec, swaggerUi };
