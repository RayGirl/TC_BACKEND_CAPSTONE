import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FashionTube',
      version: '1.0.0',
      description: 'API documentation for FashionTube backend',
      contact: {
        name: 'API Support',
        url: 'http://fashiontube-api.onrender.com:'+process.env.PORT+'/api-docs',
      },
    },
    servers: [
      {
        url: 'http://fashiontube-api.onrender.com'+process.env.PORT+'/api',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{
      bearerAuth: [],
    }],
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};

export const specs = swaggerJsdoc(options);