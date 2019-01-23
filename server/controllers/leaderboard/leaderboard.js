import Game from '../../models/game/game';


const listLeaderBoards = async () => {
  // const { dataValues: competition } = await Game.findAll({});
  const dataValues = await Game.findAll({});
  console.log('listLeaderBoards is called, ', dataValues);
};

export default listLeaderBoards;

