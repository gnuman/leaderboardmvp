import express from 'express';
import bodyParser from 'body-parser';
import listLeaderBoards from './controllers/leaderboard/leaderboard';

const app = express();
app.use(bodyParser.json());
/*
  I have implemented login funtionality but i have not tested it so haven't
  included in app.get
  Idea is to have REST api's like
  GET,POST competions/<compitation-id>/games/<game-id>/
  GET,POST games/<game-id>
*/

app.get('/leaderboards/', async (req, res) => {
  const leaderBoards = await listLeaderBoards();
  res.json(leaderBoards);
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));
