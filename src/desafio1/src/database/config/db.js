const Sequelize = require('sequelize');
const sequelize = new Sequelize('dev_db', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost'
})

module.exports = sequelize