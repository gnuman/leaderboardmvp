import Leaderboard from '../../models/leaderboard/leaderboard';


const listLeaderBoards = async () => {
  const dataList = await Leaderboard.findAll({
    where: {},
    attributes: ['id', 'winningPlayerId', 'loosingPlayerId'],
  });
  // eslint-disable-next-line
  const leaderboards = dataList.reduce((accumulator, currentValue) => {
    const { id, winningPlayerId, loosingPlayerId } = currentValue.dataValues;
    // To-Do get player data and game data from models
    accumulator.push({
      id,
      winningPlayerId,
      loosingPlayerId,
    });
    return accumulator;
  }, []);
  return leaderboards;
};

export default listLeaderBoards;

