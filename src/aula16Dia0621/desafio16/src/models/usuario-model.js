const { Model, DataTypes } = require("sequelize");

class UsuarioModel extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: 'usuario',
            modelName: 'Usuario',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.Tarefa, { foreignKey: 'usuarioId' });
    }
}

module.exports = { UsuarioModel };
