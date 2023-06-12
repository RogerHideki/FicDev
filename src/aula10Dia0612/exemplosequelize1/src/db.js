const Sequelize = require('sequelize');

const sequelize = new Sequelize('exemplosequelize1', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;