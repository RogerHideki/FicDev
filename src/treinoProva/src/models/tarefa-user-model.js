const { Model, DataTypes } = require("sequelize");

class TarefaUserModel extends Model {
    static init(database) {
        super.init({

        }, {
            tableName: 'tarefa_user',
            modelName: 'TarefaUser',
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.Tarefa, { foreignKey: 'tarefaid' });
        this.belongsTo(models.User, { foreignKey: 'userid' });
    }
}

module.exports = { TarefaUserModel };
