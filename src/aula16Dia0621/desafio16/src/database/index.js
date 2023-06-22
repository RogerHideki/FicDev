const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UsuarioModel } = require('../models/usuario-model');
const { TarefaModel } = require('../models/tarefa-model');

const database = new Sequelize(configDatabase);

UsuarioModel.init(database);
TarefaModel.init(database);

UsuarioModel.associate(database.models);
TarefaModel.associate(database.models);

module.exports = database;
