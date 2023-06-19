const Sequelize = require('sequelize');
const database = require('../config/db')

const Cargo = database.define('Cargo', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Cargo.associate = function(models) {
  Cargo.hasMany(models.Candidato)
};

module.exports = Cargo;