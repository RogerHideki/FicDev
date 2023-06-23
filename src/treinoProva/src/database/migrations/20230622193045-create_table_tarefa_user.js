'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarefa_user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tarefaid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: { model: 'tarefa', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tarefa_user');
  }
};
