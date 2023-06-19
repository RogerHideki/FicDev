const Sequelize = require('sequelize');
const database = require('../config/db')

const Estado = database.define('Estado', {
  sigla: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Estado.associate = function(models) {
  Estado.hasMany(models.Candidatos)
};

module.exports = Estado;