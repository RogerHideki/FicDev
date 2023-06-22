const { Model, DataTypes } = require("sequelize");

class TarefaModel extends Model {
    static init(database) {
        super.init({
            descricao: DataTypes.STRING,
        }, {
            tableName: 'tarefa',
            modelName: 'Tarefa',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
    }
}

module.exports = { TarefaModel };
