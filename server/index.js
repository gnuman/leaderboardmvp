import express from 'express';
import bodyParser from 'body-parser';
import { createAuth } from './controllers/auth/auth';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  createAuth('anish', 'patil');
  res.send('Hello World!');
});

app.get('/leaderboards/', (req, res) => {
  createAuth('anish', 'patil');
  res.send('Hello World!');
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));
