const Sequelize = require('sequelize');
const database = require('../config/db')

const Candidato = database.define('Candidato', {
  idEstado: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  idCargo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Candidato.associate = function(models) {
  Candidato.belongsTo(models.Estado, {foreignKey: 'idEstado'})
  Candidato.belongsTo(models.Cargo, {foreignKey: 'idCargo'})
};

module.exports = Candidato;