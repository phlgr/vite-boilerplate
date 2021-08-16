import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
