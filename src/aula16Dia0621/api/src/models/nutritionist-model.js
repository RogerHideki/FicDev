const { Model, DataTypes } = require("sequelize");

class NutritionistModel extends Model {
    static init(database) {
        super.init({
            crn: DataTypes.TEXT,
        }, {
            tableName: 'nutritionist',
            modelName: 'Nutritionist',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId' });
    }
}

module.exports = { NutritionistModel };
