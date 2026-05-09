const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function setupSwagger(app) {
  const apiUrl = "http://localhost:3001";;
  // const apiUrl = process.env.GATEAPI_URL;;
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Auth Service API",
        version: "1.0.0",
        description: "API documentation for the e-auth-server-service oauth2.0 micro-service",
      },
      servers: [
        { url: apiUrl, description: "Local server" }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [],
    },
    apis: ["./app.js",
      "./routes/*.js",
    ],
  };

  const specs = swaggerJsDoc(options);
  app.use("/docs/", swaggerUi.serve, swaggerUi.setup(specs));

  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs);
  });

  
}

module.exports = setupSwagger;
