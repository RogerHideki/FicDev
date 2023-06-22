const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: 'user',
            modelName: 'User',
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.Tarefa, { foreignKey: 'userid_owner' });
        this.hasMany(models.TarefaUser, { foreignKey: 'userid' });
    }
}

module.exports = { UserModel };
