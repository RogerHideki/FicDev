const Sequelize = require('sequelize');
const database = require('../config/db')

const Pessoa = database.define('Pessoa', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Pessoa;