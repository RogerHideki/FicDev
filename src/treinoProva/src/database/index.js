const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { TarefaModel } = require('../models/tarefa-model');
const { TarefaEspecificacaoModel } = require('../models/tarefa-especificacao-model');
const { TarefaUserModel } = require('../models/tarefa-user-model');

const database = new Sequelize(configDatabase);

UserModel.init(database);
TarefaModel.init(database);
TarefaEspecificacaoModel.init(database);
TarefaUserModel.init(database);

UserModel.associate(database.models);
TarefaModel.associate(database.models);
TarefaEspecificacaoModel.associate(database.models);
TarefaUserModel.associate(database.models);

module.exports = database;
