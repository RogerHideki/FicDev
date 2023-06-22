'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tarefa', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            usuarioId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'usuario', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tarefa');
    }
};
