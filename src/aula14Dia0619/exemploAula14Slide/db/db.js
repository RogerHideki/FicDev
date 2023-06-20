const Sequelize = require('sequelize')
const sequelize = new Sequelize('dev_exemplo_aula_14_slide', 'postgres', 'admin', {
    dialect: 'postgres',
    host: 'localhost',
})
module.exports = sequelize