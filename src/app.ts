import express from 'express';

import router from './routes/index';

import config from './utils/config';

const { port } = config;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(port, () =>
  console.log(`The application is listening on port ${port}!`));