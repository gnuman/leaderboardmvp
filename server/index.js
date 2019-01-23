import express from 'express';
import bodyParser from 'body-parser';
import listLeaderBoards from './controllers/leaderboard/leaderboard';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  listLeaderBoards();
  res.send('Hello World!');
});

app.get('/leaderboards/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));
