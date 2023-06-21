const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            name: DataTypes.TEXT,
            password: DataTypes.TEXT
        }, {
            tableName: 'users',
            modelName: 'User',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.Nutritionist, { foreignKey: 'userId' });
    }
}

module.exports = { UserModel };
