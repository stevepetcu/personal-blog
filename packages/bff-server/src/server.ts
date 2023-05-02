import * as dotenv from 'dotenv';
import express from 'express';
import { Endpoints, Router } from './api';
import { EnvConfig } from './config';
import cors from 'cors';

// TODO: Implement routes, controllers and models: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
//  See this for routes and testing: https://codingpr.com/test-your-express-api-with-jest/

dotenv.config();

const app = express();
app.use(cors());
app.use(Router);

app.listen(EnvConfig.port, () => {
  console.info(`Server at http://localhost:${EnvConfig.port}`);
  console.info('Available endpoints:');
  console.info(Endpoints);
});
