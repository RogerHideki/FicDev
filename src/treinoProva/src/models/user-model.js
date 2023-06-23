const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: 'user',
            modelName: 'User',
            timestamps: true,
            createdAt: true,
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.Tarefa, { foreignKey: 'user_owner' });
        this.hasMany(models.TarefaUser, { foreignKey: 'userid' });
    }
}

module.exports = { UserModel };
