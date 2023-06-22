const { Model, DataTypes } = require("sequelize");

class TarefaEspecificacaoModel extends Model {
    static init(database) {
        super.init({
            especificacao: DataTypes.STRING(500),
        }, {
            tableName: 'tarefa_especificacao',
            modelName: 'TarefaEspecificacao',
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.Tarefa, { foreignKey: 'tarefaid' });
    }
}

module.exports = { TarefaEspecificacaoModel };
