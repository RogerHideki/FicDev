const Sequelize = require('sequelize')
const database = require('../db/db')
const Funcionario = require('./funcionarios')

const Venda = database.define('vendas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_funcionario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Funcionario,
            key: 'id'
        }
    }
})

module.exports = Venda