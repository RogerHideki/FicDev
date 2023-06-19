const Sequelize = require('sequelize');
const sequelize = new Sequelize('dev_desafio10', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost'
})

module.exports = sequelize