import Sequelize from 'sequelize';
import connection from '../../config/database';

const Competition = connection.define('competition', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  competitionName: {
    type: Sequelize.STRING,
  },
});

export default Competition;
