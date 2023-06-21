const Sequelize = require('sequelize')
const database = require('../db/db')
const Usuario = require('./usuarios')

const Tarefa = database.define('tarefas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    data_de_vencimento: {
        type: Sequelize.DATEONLY,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id',
        },
    },
})

module.exports = Tarefa