const Sequelize = require('sequelize');
const database = require('../config/db')

const Aluno = database.define('Aluno', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataNascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  curso: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cursaEnsinoSuperior: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  estagia: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = Aluno;