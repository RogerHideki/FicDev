const Sequelize = require('sequelize')
const database = require('../db/db')

const Funcionario = database.define('funcionarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_de_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    escolaridade: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Funcionario