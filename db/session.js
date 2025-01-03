const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('airline-crew', 'postgres', 'admin', {
  host: '172.28.134.49',
  dialect: 'postgres',
});

module.exports = sequelize;
