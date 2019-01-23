import Competition from '../../models/competition/competition';


const listLeaderBoards = async () => {
  const { dataValues: competition } = await Competition.findAll({});
  // const dataValues = await Competition.findAll({});
  console.log('listLeaderBoards is called, ', competition);
};

export default listLeaderBoards;

