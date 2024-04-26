const express = require('express');
const bodyParser = require('body-parser');
const routes=require('./Routes/routes');
const {errorHandler} = require("./Services/errorHandler");
const logger = require("./Services/logger");
const { swaggerSpec, swaggerUi } = require('./swagger');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// All request comming from web are mounted to this folder
app.use("/", routes);

app.use(errorHandler);
 


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
