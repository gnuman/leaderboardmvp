import Sequelize from 'sequelize';
import Game from '../game/game';
import connection from '../../config/database';
import Player from '../player/player';

const Leaderboard = connection.define('leaderboard', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
});

Game.belongsTo(Leaderboard, {
  foreignKey: 'gameId',
});

Player.belongsTo(Leaderboard, {
  foreignKey: 'winningPlayerId',
});

Player.belongsTo(Leaderboard, {
  foreignKey: 'loosingPlayerId',
});

export default Leaderboard;
