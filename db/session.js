const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('airline_crew', 'postgre', 'root', {
  host: '172.28.134.49',
  dialect: 'postgres',
});

module.exports = sequelize;
