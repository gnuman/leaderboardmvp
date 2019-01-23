import Sequelize from 'sequelize';
import Game from '../game/game';
import connection from '../../config/database';
import Player from '../player/player';

const Round = connection.define('round', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  roundName: {
    type: Sequelize.STRING,
  },
  roundOneScore: {
    type: Sequelize.INTEGER,
  },
  roundTwoScore: {
    type: Sequelize.INTEGER,
  },
});

Game.belongsTo(Round, {
  foreignKey: 'gameId',
});

Player.belongsTo(Round, {
  foreignKey: 'playerId',
});

export default Round;
