const Sequelize = require('sequelize');
const database = require('../config/db')

const DadosDeNutricionistas = database.define('DadosDeNutricionistas', {
  nome: {
    primaryKey: true,
    type: Sequelize.STRING,
    allowNull: false
  },
  crn: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  uf: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = DadosDeNutricionistas;