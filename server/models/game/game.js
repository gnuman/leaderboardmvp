import Sequelize from 'sequelize';
import Competition from '../competition/competition';
import connection from '../../config/database';

const Game = connection.define('game', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  gameName: {
    type: Sequelize.STRING,
  },
});

Competition.belongsTo(Game, {
  foreignKey: 'competitionId',
});
export default Game;
