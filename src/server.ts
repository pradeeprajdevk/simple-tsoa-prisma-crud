import express from "express";
import { RegisterRoutes } from './routes'; // tsoa-generated
import swaggerUi from 'swagger-ui-express';



const app = express();

app.use(express());

app.use(express.json());
RegisterRoutes(app);

const swaggerDocument = require('./swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});