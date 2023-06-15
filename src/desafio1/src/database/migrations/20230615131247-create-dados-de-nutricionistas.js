'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DadosDeNutricionistas', {
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DadosDeNutricionistas');
  }
};