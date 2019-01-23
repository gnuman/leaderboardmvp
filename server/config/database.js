import Sequelize from 'sequelize';

// const DB_CONN_URL = 'postgres://postgres:leaderboard@127.0.0.1:5432/leaderboard';
const DB_CONN_URL = 'postgres://postgres:leaderboard@127.0.0.1:5432/leaderboard';
const connection = new Sequelize(DB_CONN_URL, {
  operatorsAliases: false,
});

export default connection;
