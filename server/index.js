import express from 'express';
import bodyParser from 'body-parser';
import listLeaderBoards from './controllers/leaderboard/leaderboard';

const app = express();
app.use(bodyParser.json());


app.get('/leaderboards/', async (req, res) => {
  const leaderBoards = await listLeaderBoards();
  res.json(leaderBoards);
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));
