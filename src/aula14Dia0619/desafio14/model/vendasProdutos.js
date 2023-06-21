const Sequelize = require('sequelize')
const database = require('../db/db')
const Venda = require('./vendas')
const Produto = require('./produtos')

const VendaProduto = database.define('vendas_produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Venda,
            key: 'id'
        }
    },
    id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: 'id'
        }
    }
})

module.exports = VendaProduto