const Sequelize = require('sequelize');
const sequelize = new Sequelize('dev_desafio_12', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost'
})

module.exports = sequelize