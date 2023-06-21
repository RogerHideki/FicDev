const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { UserModel } = require('../models/user-model');
const { NutritionistModel } = require('../models/nutritionist-model');

const database = new Sequelize(configDatabase);

UserModel.init(database);
NutritionistModel.init(database);

UserModel.associate(database.models);
NutritionistModel.associate(database.models);

module.exports = database;
