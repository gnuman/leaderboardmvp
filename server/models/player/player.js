import Sequelize from 'sequelize';
import Game from '../game/game';
import connection from '../../config/database';

const Player = connection.define('player', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  profileName: {
    type: Sequelize.STRING,
  },
  profilePic: {
    type: Sequelize.STRING,
  },
});

Game.belongsTo(Player, {
  foreignKey: 'gameId',
});
export default Player;
