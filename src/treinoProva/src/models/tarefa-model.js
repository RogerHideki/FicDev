const { Model, DataTypes } = require("sequelize");

class TarefaModel extends Model {
    static init(database) {
        super.init({
            descricao: DataTypes.STRING,
            dataprevistatermino: DataTypes.DATEONLY
        }, {
            tableName: 'tarefa',
            modelName: 'Tarefa',
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_owner' });
        this.hasMany(models.TarefaUser, { foreignKey: 'tarefaid' });
        this.hasOne(models.TarefaEspecificacao, { foreignKey: 'tarefaid' });
    }
}

module.exports = { TarefaModel };
